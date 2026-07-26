import { getDb, docToLead } from '../../../lib/db.js';
import { checkRateLimit } from '../../../lib/rateLimit.js';
import { corsHeaders, handleOptions } from '../../../lib/cors.js';

export async function OPTIONS() {
  return handleOptions();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req) {
  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
  if (!checkRateLimit(ip)) {
    return Response.json(
      { detail: 'Too many requests. Please try again shortly.' },
      { status: 429, headers: corsHeaders() }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (e) {
    return Response.json({ detail: 'Invalid JSON body' }, { status: 422, headers: corsHeaders() });
  }

  const name = (body.name || '').trim();
  const email = (body.email || '').trim();
  const phone = (body.phone || '').trim();
  const organization = body.organization || null;
  const city = body.city || null;
  const investment_capacity = body.investment_capacity || null;
  const message = body.message || '';
  const lead_type = body.lead_type || 'general';

  const allowedTypes = new Set(['partner', 'general', 'franchise', 'consultation']);

  if (!name || name.length < 2 || name.length > 120) {
    return Response.json({ detail: 'Invalid name length' }, { status: 422, headers: corsHeaders() });
  }
  if (!email || !validateEmail(email)) {
    return Response.json({ detail: 'Invalid email address' }, { status: 422, headers: corsHeaders() });
  }
  if (!phone || phone.length < 5 || phone.length > 30) {
    return Response.json({ detail: 'Invalid phone length' }, { status: 422, headers: corsHeaders() });
  }
  if (!allowedTypes.has(lead_type)) {
    return Response.json({ detail: 'Invalid lead_type' }, { status: 422, headers: corsHeaders() });
  }

  const doc = {
    name,
    email,
    phone,
    organization,
    city,
    investment_capacity,
    message,
    lead_type,
    status: 'new',
    created_at: new Date().toISOString(),
    ip,
  };

  const db = await getDb();
  const result = await db.collection('leads').insertOne(doc);
  doc._id = result.insertedId;

  const lead = docToLead(doc);
  console.log(`[EMAIL] Confirmation -> ${lead.email} | Notification of '${lead.lead_type}' lead: ${lead.name}`);

  return Response.json(lead, { status: 201, headers: corsHeaders() });
}
