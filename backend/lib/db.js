import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

// Load .env
dotenv.config({ path: path.join(process.cwd(), '.env') });

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'po_b2b_dev';

let cachedClient = null;
let cachedDb = null;
let initialized = false;

export async function getDb() {
  if (cachedDb) {
    if (!initialized) {
      initialized = true;
      initDb(cachedDb).catch(console.error);
    }
    return cachedDb;
  }

  if (!cachedClient) {
    cachedClient = new MongoClient(mongoUrl);
    await cachedClient.connect();
  }

  cachedDb = cachedClient.db(dbName);
  if (!initialized) {
    initialized = true;
    initDb(cachedDb).catch(console.error);
  }
  return cachedDb;
}

async function initDb(db) {
  try {
    // Indexes
    await db.collection('leads').createIndex({ created_at: -1 });
    await db.collection('leads').createIndex({ lead_type: 1 });
  } catch (err) {
    console.error('[Next.js DB] Initialization error:', err);
  }
}

export function docToLead(doc) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return {
    id: _id.toString(),
    ...rest,
  };
}

export { ObjectId };
