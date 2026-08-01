"use client";

import { useState, useEffect, useMemo } from "react";
import { 
  Lock, 
  Search, 
  Download, 
  RefreshCw, 
  Calendar, 
  Filter, 
  Trash2, 
  Eye, 
  CheckCircle, 
  Building2, 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldAlert,
  ArrowUpDown
} from "lucide-react";
import { toast } from "sonner";

export default function AdminContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({ total: 0, pastWeek: 0, pastMonth: 0, partners: 0 });
  const [loading, setLoading] = useState(false);

  // Filters state
  const [dateRange, setDateRange] = useState("all"); // 'all' | '1w' | '1m'
  const [leadType, setLeadType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // 'newest' | 'oldest'

  // Modal detail state
  const [selectedLead, setSelectedLead] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [showClearAllModal, setShowClearAllModal] = useState(false);

  // Check stored auth session
  useEffect(() => {
    const session = sessionStorage.getItem("quantum_admin_auth");
    if (session === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === "quantum2026" || passcode === "admin123") {
      sessionStorage.setItem("quantum_admin_auth", "true");
      setIsAuthenticated(true);
      setAuthError("");
      toast.success("Authenticated successfully as Administrator.");
    } else {
      setAuthError("Invalid Admin Passcode. Please check your credentials.");
      toast.error("Invalid Admin Passcode");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("quantum_admin_auth");
    setIsAuthenticated(false);
    toast.info("Logged out of Admin Portal.");
  };

  // Fetch leads from API
  const fetchLeads = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        range: dateRange,
        type: leadType,
        search: searchQuery,
      }).toString();

      const res = await fetch(`/api/admin/leads?${query}`);
      const data = await res.json();

      if (res.ok && data.success) {
        setLeads(data.leads || []);
        if (data.stats) setStats(data.stats);
      } else {
        toast.error(data.detail || "Failed to load leads");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      toast.error("Error connecting to leads server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads();
    }
  }, [isAuthenticated, dateRange, leadType, searchQuery]);

  // Sort leads client side if needed
  const sortedLeads = useMemo(() => {
    return [...leads].sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });
  }, [leads, sortOrder]);

  // Delete Lead Handler
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Lead entry deleted successfully.");
        setLeads((prev) => prev.filter((item) => item.id !== id));
        setDeleteId(null);
        if (selectedLead?.id === id) setSelectedLead(null);
      } else {
        toast.error(data.detail || "Failed to delete lead");
      }
    } catch (err) {
      toast.error("Error deleting lead.");
    }
  };

  // Clear All Leads Handler
  const handleClearAll = async () => {
    try {
      const res = await fetch("/api/admin/leads?action=clear_all", { method: "DELETE" });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(`Cleared all ${data.deletedCount} lead submissions from database.`);
        setLeads([]);
        setStats({ total: 0, pastWeek: 0, pastMonth: 0, partners: 0 });
        setShowClearAllModal(false);
        setSelectedLead(null);
      } else {
        toast.error(data.detail || "Failed to clear leads");
      }
    } catch (err) {
      toast.error("Error clearing leads from server.");
    }
  };

  // Export to CSV Function
  const exportToCSV = () => {
    if (sortedLeads.length === 0) {
      toast.error("No lead data available to export.");
      return;
    }

    const headers = ["Name", "Email", "Phone", "Lead Type", "Organization", "City", "Investment Capacity", "Message", "Date Submitted", "IP Address"];
    
    const rows = sortedLeads.map((item) => [
      `"${(item.name || "").replace(/"/g, '""')}"`,
      `"${(item.email || "").replace(/"/g, '""')}"`,
      `"${(item.phone || "").replace(/"/g, '""')}"`,
      `"${(item.lead_type || "general").toUpperCase()}"`,
      `"${(item.organization || "N/A").replace(/"/g, '""')}"`,
      `"${(item.city || "N/A").replace(/"/g, '""')}"`,
      `"${(item.investment_capacity || "N/A").replace(/"/g, '""')}"`,
      `"${(item.message || "").replace(/"/g, '""').replace(/\n/g, " ")}"`,
      `"${new Date(item.created_at).toLocaleString()}"`,
      `"${item.ip || "Unknown"}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `quantum_leads_export_${dateRange}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast.success(`Exported ${sortedLeads.length} lead entries to CSV!`);
  };

  // ----------------------------------------------------
  // PASSCODE LOCK SCREEN
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <section className="mx-auto flex min-h-[75vh] max-w-md flex-col justify-center px-4 py-20">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-xl shadow-[#0B121C]/5 sm:p-10">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B4D95]/10 text-[#0B4D95]">
            <Lock size={26} />
          </div>

          <h2 className="mt-6 text-center font-display text-2xl font-extrabold text-[#0B121C]">
            Admin Access Portal
          </h2>
          <p className="mt-2 text-center text-xs text-[#4A5568]">
            Enter your security passcode to view & manage stored lead submissions.
          </p>

          <form onSubmit={handleLogin} className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A5568]">
                Security Passcode
              </label>
              <input
                type="password"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                required
                className="mt-1.5 w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] px-4 py-3 text-sm text-[#0B121C] outline-none transition-all focus:border-[#0284C7] focus:bg-white focus:ring-2 focus:ring-[#0284C7]/20"
              />
            </div>

            {authError && (
              <p className="flex items-center gap-1.5 text-xs font-medium text-rose-600">
                <ShieldAlert size={14} /> {authError}
              </p>
            )}

            <button
              type="submit"
              className="btn-gradient-coral w-full rounded-xl py-3.5 font-display text-sm font-semibold text-white shadow-md"
            >
              Authenticate & Unlock
            </button>
          </form>

          <p className="mt-6 text-center font-mono text-[10px] text-[#4A5568]">
            Quantum Medical Secure Cloud Store • SSL Encrypted
          </p>
        </div>
      </section>
    );
  }

  // ----------------------------------------------------
  // ADMIN DASHBOARD CONTENT
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-16">
      {/* Dedicated Admin Navbar Header */}
      <header className="sticky top-0 z-40 border-b border-[#E2E8F0] bg-white/95 backdrop-blur-md shadow-xs">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.webp" alt="Quantum Medical" className="h-8 w-auto object-contain" />
            <div className="flex flex-col">
              <span className="font-display text-base font-extrabold text-[#0B121C]">Quantum Medical</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#0284C7] font-semibold">Admin Control Console</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#4A5568] transition-colors hover:bg-slate-50 hover:text-[#0B121C]"
            >
              🌐 View Main Site
            </a>
            <div className="h-4 w-px bg-[#E2E8F0]" />
            <button
              onClick={handleLogout}
              className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2 text-xs font-semibold text-rose-700 transition-colors hover:bg-rose-100"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-[#E2E8F0] pb-6 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#0284C7]/15 px-3 py-1 font-mono text-xs font-semibold text-[#0284C7]">
                Live Store
              </span>
              <span className="text-xs font-mono text-[#4A5568]">v1.4 • Active Sync</span>
            </div>
            <h1 className="mt-2 font-display text-3xl font-extrabold text-[#0B121C]">
              Lead Submissions Admin Panel
            </h1>
            <p className="mt-1 text-sm text-[#4A5568]">
              Manage, filter by date range, and export patient & partner inquiry records.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 text-xs font-semibold text-[#0B121C] transition-colors hover:bg-slate-50"
            >
              <RefreshCw size={14} className={loading ? "animate-spin text-[#0284C7]" : ""} />
              Refresh Data
            </button>

            <button
              onClick={() => setShowClearAllModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-semibold text-rose-700 transition-colors hover:bg-rose-100"
            >
              <Trash2 size={14} />
              Clear All Data
            </button>
          </div>
        </div>

      {/* Summary Metrics Cards */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-[#0B4D95]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4A5568]">Total Records</span>
            <Users size={18} />
          </div>
          <p className="mt-3 font-display text-3xl font-extrabold text-[#0B121C]">{stats.total}</p>
          <p className="mt-1 text-xs text-[#4A5568]">All time form submissions</p>
        </div>

        <div className="rounded-2xl border border-[#0284C7]/30 bg-[#0284C7]/5 p-5 shadow-sm">
          <div className="flex items-center justify-between text-[#0284C7]">
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#0284C7]">Past 7 Days (1 Week)</span>
            <Calendar size={18} />
          </div>
          <p className="mt-3 font-display text-3xl font-extrabold text-[#0B121C]">{stats.pastWeek}</p>
          <p className="mt-1 text-xs text-[#4A5568]">Recent weekly submissions</p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-[#0B4D95]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4A5568]">Past 30 Days (1 Month)</span>
            <Clock size={18} />
          </div>
          <p className="mt-3 font-display text-3xl font-extrabold text-[#0B121C]">{stats.pastMonth}</p>
          <p className="mt-1 text-xs text-[#4A5568]">Monthly inquiry volume</p>
        </div>

        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between text-[#0B4D95]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4A5568]">Partner Enquiries</span>
            <Building2 size={18} />
          </div>
          <p className="mt-3 font-display text-3xl font-extrabold text-[#0B121C]">{stats.partners}</p>
          <p className="mt-1 text-xs text-[#4A5568]">Clinical B2B partnerships</p>
        </div>
      </div>

      {/* Interactive Controls & Filters Bar */}
      <div className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Date Range Segmented Control (1 Week / 1 Month / All) */}
          <div className="flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-1.5">
            <span className="px-2 font-mono text-[11px] font-semibold uppercase text-[#4A5568]">Time Range:</span>
            <button
              onClick={() => setDateRange("all")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                dateRange === "all"
                  ? "bg-white text-[#0B121C] shadow-sm border border-[#E2E8F0]"
                  : "text-[#4A5568] hover:text-[#0B121C]"
              }`}
            >
              All Time
            </button>
            <button
              onClick={() => setDateRange("1w")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                dateRange === "1w"
                  ? "bg-[#0284C7] text-white shadow-sm"
                  : "text-[#4A5568] hover:text-[#0B121C]"
              }`}
            >
              📅 1 Week (Past 7 Days)
            </button>
            <button
              onClick={() => setDateRange("1m")}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                dateRange === "1m"
                  ? "bg-[#0B4D95] text-white shadow-sm"
                  : "text-[#4A5568] hover:text-[#0B121C]"
              }`}
            >
              🗓️ 1 Month (Past 30 Days)
            </button>
          </div>

          {/* Action Buttons: Export CSV & Order */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSortOrder(sortOrder === "newest" ? "oldest" : "newest")}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-semibold text-[#0B121C] hover:bg-slate-50"
            >
              <ArrowUpDown size={14} />
              {sortOrder === "newest" ? "Newest First" : "Oldest First"}
            </button>

            <button
              onClick={exportToCSV}
              className="btn-gradient-coral inline-flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-semibold text-white shadow-md"
            >
              <Download size={15} />
              Download CSV Report
            </button>
          </div>
        </div>

        {/* Secondary Filter Line (Search & Lead Type) */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#4A5568]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, phone, city, or organization..."
              className="w-full rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] pl-10 pr-4 py-2 text-xs text-[#0B121C] outline-none focus:border-[#0284C7] focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter size={15} className="text-[#4A5568]" />
            <select
              value={leadType}
              onChange={(e) => setLeadType(e.target.value)}
              className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] px-3 py-2 text-xs font-medium text-[#0B121C] outline-none focus:border-[#0284C7]"
            >
              <option value="all">All Inquiry Types</option>
              <option value="partner">B2B Partner</option>
              <option value="consultation">Clinical Consultation</option>
              <option value="franchise">Franchise Inquiry</option>
              <option value="general">General Contact</option>
            </select>
          </div>
        </div>
      </div>

      {/* Leads Data Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <RefreshCw size={28} className="animate-spin text-[#0284C7]" />
            <p className="mt-3 text-xs font-mono text-[#4A5568]">Loading lead records from store...</p>
          </div>
        ) : sortedLeads.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Sparkles size={32} className="text-[#0284C7]/40" />
            <h3 className="mt-3 font-display text-lg font-bold text-[#0B121C]">No Lead Submissions Found</h3>
            <p className="mt-1 max-w-sm text-xs text-[#4A5568]">
              No entries match your current date range ({dateRange}) or search query filter.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#0B121C]">
              <thead className="border-b border-[#E2E8F0] bg-[#F8F9FA] font-mono text-[10px] uppercase tracking-wider text-[#4A5568]">
                <tr>
                  <th className="px-5 py-3.5">Date & Time</th>
                  <th className="px-5 py-3.5">Type</th>
                  <th className="px-5 py-3.5">Contact Name</th>
                  <th className="px-5 py-3.5">Email & Phone</th>
                  <th className="px-5 py-3.5">Organization / City</th>
                  <th className="px-5 py-3.5">Message / Requirement</th>
                  <th className="px-5 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E8F0]">
                {sortedLeads.map((item) => {
                  const dateStr = new Date(item.created_at).toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });

                  return (
                    <tr key={item.id} className="transition-colors hover:bg-slate-50">
                      <td className="whitespace-nowrap px-5 py-4 font-mono text-[11px] text-[#4A5568]">
                        {dateStr}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase ${
                            item.lead_type === "partner"
                              ? "bg-purple-100 text-purple-700"
                              : item.lead_type === "consultation"
                              ? "bg-sky-100 text-sky-700"
                              : item.lead_type === "franchise"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {item.lead_type || "general"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 font-bold text-[#0B121C]">
                        {item.name}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex flex-col gap-0.5">
                          <span className="flex items-center gap-1 font-medium text-[#0284C7]">
                            <Mail size={12} /> {item.email}
                          </span>
                          <span className="flex items-center gap-1 text-[#4A5568]">
                            <Phone size={12} /> {item.phone}
                          </span>
                        </div>
                      </td>

                      <td className="px-5 py-4 text-[#4A5568]">
                        {item.organization || item.city ? (
                          <div>
                            {item.organization && <p className="font-semibold text-[#0B121C]">{item.organization}</p>}
                            {item.city && <p className="text-[11px]">{item.city}</p>}
                          </div>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )}
                      </td>

                      <td className="max-w-xs truncate px-5 py-4 text-[#4A5568]">
                        {item.message ? item.message : <span className="text-slate-400">No message text</span>}
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedLead(item)}
                            title="View Details"
                            className="rounded-lg p-1.5 text-[#0284C7] transition-colors hover:bg-[#0284C7]/10"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteId(item.id)}
                            title="Delete Lead"
                            className="rounded-lg p-1.5 text-rose-600 transition-colors hover:bg-rose-50"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-4">
              <div>
                <span className="rounded-full bg-[#0284C7]/15 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#0284C7] uppercase">
                  {selectedLead.lead_type || "general"}
                </span>
                <h3 className="mt-1 font-display text-xl font-bold text-[#0B121C]">{selectedLead.name}</h3>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="rounded-full bg-slate-100 p-2 text-[#4A5568] hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#4A5568]">
                <Mail size={14} className="text-[#0284C7]" />
                <span className="font-semibold text-[#0B121C]">Email:</span> {selectedLead.email}
              </div>

              <div className="flex items-center gap-2 text-[#4A5568]">
                <Phone size={14} className="text-[#0284C7]" />
                <span className="font-semibold text-[#0B121C]">Phone:</span> {selectedLead.phone}
              </div>

              {selectedLead.organization && (
                <div className="flex items-center gap-2 text-[#4A5568]">
                  <Building2 size={14} className="text-[#0284C7]" />
                  <span className="font-semibold text-[#0B121C]">Organization:</span> {selectedLead.organization}
                </div>
              )}

              {selectedLead.city && (
                <div className="flex items-center gap-2 text-[#4A5568]">
                  <MapPin size={14} className="text-[#0284C7]" />
                  <span className="font-semibold text-[#0B121C]">City / Region:</span> {selectedLead.city}
                </div>
              )}

              {selectedLead.investment_capacity && (
                <div className="flex items-center gap-2 text-[#4A5568]">
                  <Sparkles size={14} className="text-[#0284C7]" />
                  <span className="font-semibold text-[#0B121C]">Investment Capacity:</span> {selectedLead.investment_capacity}
                </div>
              )}

              <div className="flex items-center gap-2 text-[#4A5568]">
                <Clock size={14} className="text-[#0284C7]" />
                <span className="font-semibold text-[#0B121C]">Submitted Date:</span> {new Date(selectedLead.created_at).toLocaleString()}
              </div>

              <div className="mt-4 rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] p-3.5">
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#4A5568]">Message Details:</p>
                <p className="mt-1 whitespace-pre-wrap text-sm text-[#0B121C]">
                  {selectedLead.message || "No additional message text submitted."}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedLead(null)}
                className="rounded-xl bg-[#0B121C] px-5 py-2.5 text-xs font-semibold text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
              <Trash2 size={24} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">Delete Lead Record?</h3>
            <p className="mt-2 text-xs text-[#4A5568]">
              Are you sure you want to delete this submission? This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#0B121C] hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="rounded-xl bg-rose-600 px-5 py-2 text-xs font-semibold text-white hover:bg-rose-700"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Clear All Data Confirmation Modal */}
      {showClearAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-sm rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600">
              <ShieldAlert size={24} />
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">Clear ALL Admin Data?</h3>
            <p className="mt-2 text-xs text-[#4A5568]">
              Are you sure you want to delete ALL lead submissions permanently? This will clear all stored inquiry records.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setShowClearAllModal(false)}
                className="rounded-xl border border-[#E2E8F0] bg-[#F8F9FA] px-4 py-2 text-xs font-semibold text-[#0B121C] hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleClearAll}
                className="rounded-xl bg-rose-600 px-5 py-2 text-xs font-semibold text-white hover:bg-rose-700 shadow-md"
              >
                Yes, Clear All Data
              </button>
            </div>
          </div>
        </div>
      )}
      </main>
    </div>
  );
}
