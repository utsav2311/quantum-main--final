import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "po_b2b_dev";

let cachedClient = null;
let cachedDb = null;
let initialized = false;

// Fallback in-memory store if MongoDB is offline or unavailable
const inMemoryLeads = [];

const mockCollection = {
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
  createIndex: async () => {},
};

const mockDb = {
  collection: (name) => {
    if (name === "leads") return mockCollection;
    return mockCollection;
  },
};

export async function getDb() {
  if (cachedDb) {
    if (!initialized) {
      initialized = true;
      initDb(cachedDb).catch(console.error);
    }
    return cachedDb;
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(mongoUrl, {
        serverSelectionTimeoutMS: 3000,
        connectTimeoutMS: 3000,
      });
      await cachedClient.connect();
    }

    cachedDb = cachedClient.db(dbName);
    if (!initialized) {
      initialized = true;
      initDb(cachedDb).catch(console.error);
    }
    return cachedDb;
  } catch (err) {
    console.warn("[DB WARNING] Could not connect to MongoDB. Using resilient fallback lead store:", err.message);
    return mockDb;
  }
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
