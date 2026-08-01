import { getDb, docToLead, ObjectId } from "@/lib/db";
import { corsHeaders, handleOptions } from "@/lib/cors";

export async function OPTIONS() {
  return handleOptions();
}

export async function GET(req) {
  try {
    const urlStr = req.nextUrl ? req.nextUrl.href : req.url;
    const url = new URL(urlStr, "http://localhost:8000");
    const range = url.searchParams.get("range") || "all";
    const type = url.searchParams.get("type") || "all";
    const search = (url.searchParams.get("search") || "").trim().toLowerCase();

    const db = await getDb();
    const rawDocs = await db.collection("leads").find().sort({ created_at: -1 }).toArray();
    let leads = rawDocs.map(docToLead);

    const now = Date.now();
    const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
    const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

    // Filter by Date Range (1 Week / 1 Month / All Time)
    if (range === "1w") {
      leads = leads.filter((item) => {
        const itemDate = new Date(item.created_at).getTime();
        return !isNaN(itemDate) && now - itemDate <= ONE_WEEK_MS;
      });
    } else if (range === "1m") {
      leads = leads.filter((item) => {
        const itemDate = new Date(item.created_at).getTime();
        return !isNaN(itemDate) && now - itemDate <= ONE_MONTH_MS;
      });
    }

    // Filter by Lead Type
    if (type !== "all") {
      leads = leads.filter((item) => item.lead_type === type);
    }

    // Search query filter (Name, Email, Phone, Organization, City)
    if (search) {
      leads = leads.filter((item) => {
        const name = (item.name || "").toLowerCase();
        const email = (item.email || "").toLowerCase();
        const phone = (item.phone || "").toLowerCase();
        const org = (item.organization || "").toLowerCase();
        const city = (item.city || "").toLowerCase();
        return (
          name.includes(search) ||
          email.includes(search) ||
          phone.includes(search) ||
          org.includes(search) ||
          city.includes(search)
        );
      });
    }

    // Quick Stats Summary
    const allLeads = rawDocs.map(docToLead);
    const stats = {
      total: allLeads.length,
      pastWeek: allLeads.filter((item) => now - new Date(item.created_at).getTime() <= ONE_WEEK_MS).length,
      pastMonth: allLeads.filter((item) => now - new Date(item.created_at).getTime() <= ONE_MONTH_MS).length,
      partners: allLeads.filter((item) => item.lead_type === "partner").length,
      consultations: allLeads.filter((item) => item.lead_type === "consultation").length,
    };

    return Response.json(
      { success: true, leads, stats, count: leads.length },
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error("[ADMIN LEADS GET ERROR]:", err);
    return Response.json(
      { detail: "Failed to fetch leads from database." },
      { status: 500, headers: corsHeaders() }
    );
  }
}

export async function DELETE(req) {
  try {
    const urlStr = req.nextUrl ? req.nextUrl.href : req.url;
    const url = new URL(urlStr, "http://localhost:8000");
    const id = url.searchParams.get("id");
    const action = url.searchParams.get("action");

    const db = await getDb();

    // Clear all if action=clear_all or id=all or clear_all in URL or no id specified
    if (action === "clear_all" || id === "all" || urlStr.includes("clear_all") || !id) {
      const res = await db.collection("leads").deleteMany({});
      return Response.json(
        { success: true, deletedCount: res.deletedCount || 0, message: "All lead records cleared." },
        { status: 200, headers: corsHeaders() }
      );
    }

    let filter;
    try {
      filter = { _id: new ObjectId(id) };
    } catch (e) {
      filter = { _id: id };
    }

    const res = await db.collection("leads").deleteOne(filter);
    return Response.json(
      { success: true, deletedCount: res.deletedCount },
      { status: 200, headers: corsHeaders() }
    );
  } catch (err) {
    console.error("[ADMIN LEADS DELETE ERROR]:", err);
    return Response.json(
      { detail: "Failed to delete lead" },
      { status: 500, headers: corsHeaders() }
    );
  }
}
