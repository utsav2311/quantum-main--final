import { MongoClient, ObjectId } from "mongodb";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import path from "path";

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

// Fallback in-memory store if no live database is configured
const inMemoryLeads = [];

export const mockCollection = {
  insertOne: async (doc) => {
    const _id = new ObjectId();
    const newDoc = { ...doc, _id };
    inMemoryLeads.push(newDoc);
    return { insertedId: _id };
  },
  find: () => ({
    sort: () => ({
      toArray: async () => [...inMemoryLeads].reverse(),
    }),
  }),
  deleteOne: async (filter) => {
    if (filter._id) {
      const idx = inMemoryLeads.findIndex((doc) => doc._id.toString() === filter._id.toString());
      if (idx !== -1) {
        inMemoryLeads.splice(idx, 1);
        return { deletedCount: 1 };
      }
    }
    return { deletedCount: 0 };
  },
  deleteMany: async () => {
    const count = inMemoryLeads.length;
    inMemoryLeads.length = 0;
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
      return { deletedCount: result.affectedRows };
    },
    deleteMany: async () => {
      const [result] = await pool.execute("DELETE FROM leads");
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
  if (mysqlDatabase && mysqlHost && mysqlUser) {
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

  // 2. Try MongoDB if MONGO_URL is set
  if (mongoUrl) {
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

  // 3. Fallback to resilient mock store
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
