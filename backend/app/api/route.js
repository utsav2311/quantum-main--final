import { corsHeaders, handleOptions } from '../../lib/cors.js';

export async function OPTIONS() {
  return handleOptions();
}

export async function GET() {
  return Response.json(
    { message: 'P&O B2B API running' },
    { headers: corsHeaders() }
  );
}
