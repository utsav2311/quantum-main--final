import { MongoClient, ObjectId } from "mongodb";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME || "po_b2b_dev";

// cPanel MySQL Environment Variables
const mysqlHost = process.env.MYSQL_HOST;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPassword = process.env.MYSQL_PASSWORD;
const mysqlDatabase = process.env.MYSQL_DATABASE;

let cachedClient = null;
let cachedDb = null;
let mysqlPool = null;

// Persistent File Path for Local Leads Storage (Resilient Fallback)
const LEADS_FILE_PATH = path.join(process.cwd(), "data", "leads_store.json");

function readLocalLeads() {
  try {
    if (!fs.existsSync(LEADS_FILE_PATH)) {
      const dir = path.dirname(LEADS_FILE_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify([], null, 2), "utf8");
      return [];
    }
    const content = fs.readFileSync(LEADS_FILE_PATH, "utf8");
    return JSON.parse(content || "[]");
  } catch (err) {
    console.error("[LOCAL LEADS READ ERROR]:", err.message);
    return [];
  }
}

function writeLocalLeads(leads) {
  try {
    const dir = path.dirname(LEADS_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("[LOCAL LEADS WRITE ERROR]:", err.message);
  }
}

export const mockCollection = {
  insertOne: async (doc) => {
    const _id = new ObjectId().toString();
    const newDoc = { ...doc, _id, id: _id };
    const leads = readLocalLeads();
    leads.push(newDoc);
    writeLocalLeads(leads);
    return { insertedId: _id };
  },
  find: () => ({
    sort: () => ({
      toArray: async () => {
        const leads = readLocalLeads();
        return [...leads].reverse();
      },
    }),
  }),
  deleteOne: async (filter) => {
    if (filter._id) {
      const targetId = filter._id.toString();
      const leads = readLocalLeads();
      const idx = leads.findIndex((doc) => doc._id?.toString() === targetId || doc.id?.toString() === targetId);
      if (idx !== -1) {
        leads.splice(idx, 1);
        writeLocalLeads(leads);
        return { deletedCount: 1 };
      }
    }
    return { deletedCount: 0 };
  },
  deleteMany: async () => {
    const leads = readLocalLeads();
    const count = leads.length;
    writeLocalLeads([]);
    return { deletedCount: count };
  },
  createIndex: async () => {},
};

const mockDb = {
  collection: () => mockCollection,
};

// cPanel MySQL Collection Abstraction Wrapper
function createMySqlDbWrapper(pool) {
  const collection = {
    insertOne: async (doc) => {
      const sql = `
        INSERT INTO leads (name, email, phone, organization, city, investment_capacity, message, lead_type, status, created_at, ip)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        doc.name || "",
        doc.email || "",
        doc.phone || "",
        doc.organization || null,
        doc.city || null,
        doc.investment_capacity || null,
        doc.message || "",
        doc.lead_type || "general",
        doc.status || "new",
        doc.created_at || new Date().toISOString(),
        doc.ip || "unknown",
      ];
      const [result] = await pool.execute(sql, values);
      
      // Also backup to local file
      try {
        const localDoc = { ...doc, _id: result.insertId.toString(), id: result.insertId.toString() };
        const leads = readLocalLeads();
        leads.push(localDoc);
        writeLocalLeads(leads);
      } catch (e) {}

      return { insertedId: result.insertId };
    },
    find: () => ({
      sort: () => ({
        toArray: async () => {
          const [rows] = await pool.query("SELECT * FROM leads ORDER BY id DESC");
          return rows.map((r) => ({
            _id: r.id,
            ...r,
          }));
        },
      }),
    }),
    deleteOne: async (filter) => {
      let targetId = filter._id;
      if (typeof targetId === "object" && targetId !== null) {
        targetId = targetId.toString();
      }
      const [result] = await pool.execute("DELETE FROM leads WHERE id = ?", [targetId]);
      
      // Sync delete with local file
      try {
        const leads = readLocalLeads();
        const filtered = leads.filter((l) => l._id?.toString() !== targetId && l.id?.toString() !== targetId);
        writeLocalLeads(filtered);
      } catch (e) {}

      return { deletedCount: result.affectedRows };
    },
    deleteMany: async () => {
      const [result] = await pool.execute("DELETE FROM leads");
      writeLocalLeads([]);
      return { deletedCount: result.affectedRows };
    },
    createIndex: async () => {},
  };

  return {
    collection: () => collection,
  };
}

export async function getDb() {
  if (cachedDb) {
    return cachedDb;
  }

  // 1. Try cPanel MySQL if credentials are set
  if (mysqlDatabase && mysqlHost && mysqlUser && mysqlPassword) {
    try {
      if (!mysqlPool) {
        mysqlPool = mysql.createPool({
          host: mysqlHost,
          user: mysqlUser,
          password: mysqlPassword || "",
          database: mysqlDatabase,
          waitForConnections: true,
          connectionLimit: 10,
          queueLimit: 0,
        });

        // Initialize leads table automatically
        await mysqlPool.query(`
          CREATE TABLE IF NOT EXISTS leads (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255),
            email VARCHAR(255),
            phone VARCHAR(100),
            organization VARCHAR(255),
            city VARCHAR(255),
            investment_capacity VARCHAR(255),
            message TEXT,
            lead_type VARCHAR(100),
            status VARCHAR(50) DEFAULT 'new',
            created_at VARCHAR(100),
            ip VARCHAR(100)
          ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `);
      }
      cachedDb = createMySqlDbWrapper(mysqlPool);
      return cachedDb;
    } catch (mysqlErr) {
      console.warn("[MYSQL DB WARNING] Could not connect to cPanel MySQL database:", mysqlErr.message);
      mysqlPool = null;
      cachedDb = null;
    }
  }

  // 2. Try MongoDB if MONGO_URL is set and not localhost on production
  if (mongoUrl && !mongoUrl.includes("localhost:27017")) {
    try {
      const client = new MongoClient(mongoUrl, {
        serverSelectionTimeoutMS: 2000,
        connectTimeoutMS: 2000,
      });
      await client.connect();
      cachedClient = client;
      cachedDb = client.db(dbName);
      initDb(cachedDb).catch(() => {});
      return cachedDb;
    } catch (err) {
      cachedClient = null;
      cachedDb = null;
      console.warn("[DB WARNING] Could not connect to MongoDB:", err.message);
    }
  }

  // 3. Fallback to bulletproof persistent JSON file store
  return mockDb;
}

async function initDb(db) {
  try {
    if (db.collection) {
      await db.collection("leads").createIndex({ created_at: -1 });
      await db.collection("leads").createIndex({ lead_type: 1 });
    }
  } catch (err) {
    console.error("[DB INIT WARNING]:", err.message);
  }
}

export function docToLead(doc) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return {
    id: _id ? _id.toString() : new ObjectId().toString(),
    ...rest,
  };
}

export { ObjectId };
