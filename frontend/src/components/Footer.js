import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook, Youtube, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { COMPANY, waLink } from "@/data/site";
import { api, formatApiError } from "@/lib/api";
import { useLeadModal } from "@/context/LeadModalContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const socialIcon = { linkedin: Linkedin, instagram: Instagram, facebook: Facebook, youtube: Youtube };

export default function Footer() {
  const { open } = useLeadModal();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(form.email) || form.phone.trim().length < 5) {
      toast.error("Please fill in your name, a valid email and phone.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: "general" });
      toast.success("Message sent — we'll be in touch soon!");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to send");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0B121C] text-white" data-testid="footer">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0B4D95]/40 blur-[120px]" />
      <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-[#FF6B4A]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          {/* Left: brand + contact */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt={COMPANY.name} loading="lazy" className="h-12 w-12 object-contain" />
              <span className="font-display text-xl font-extrabold text-white">{COMPANY.name}</span>
            </div>

            <h2 className="mt-3 max-w-md font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
              {COMPANY.tagline}
            </h2>

            <div className="mt-8 space-y-3">
              <a href={`tel:${COMPANY.phoneRaw}`} data-testid="footer-phone" className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                <Phone size={18} className="text-[#FF6B4A]" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} data-testid="footer-email" className="flex items-center gap-3 text-white/80 transition-colors hover:text-white">
                <Mail size={18} className="text-[#FF6B4A]" /> {COMPANY.email}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {COMPANY.addresses.map((a) => (
                <a key={a.label} href={a.maps} target="_blank" rel="noopener noreferrer" data-testid={`footer-address-${a.label}`} className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-[#FF6B4A]/50">
                  <div className="flex items-center gap-2 text-[#FF6B4A]"><MapPin size={15} /><span className="font-display text-xs font-semibold uppercase tracking-wide">{a.label}</span></div>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{a.value}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {COMPANY.socials.map((s) => {
                const Icon = socialIcon[s.icon];
                return (
                  <a key={s.icon} href={s.url} data-testid={`footer-social-${s.icon}`} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-[#FF6B4A] hover:text-[#FF6B4A]">
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>

            <button onClick={() => open("franchise")} data-testid="footer-franchise-btn" className="mt-8 rounded-full border border-[#FF6B4A] px-6 py-3 font-display text-sm font-semibold text-[#FF6B4A] transition-colors hover:bg-[#FF6B4A] hover:text-white">
              Apply for Franchise
            </button>
          </div>

          {/* Right: contact form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm sm:p-9">
            <h3 className="font-display text-2xl font-bold">Send us a message</h3>
            <p className="mt-1 text-sm text-white/60">General inquiries — we typically reply within one business day.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <Input data-testid="footer-name-input" placeholder="Your name" value={form.name} onChange={set("name")} className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-[#FF6B4A]" />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Input data-testid="footer-phone-input" placeholder="Phone" value={form.phone} onChange={set("phone")} className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-[#FF6B4A]" />
                <Input data-testid="footer-email-input" type="email" placeholder="Email" value={form.email} onChange={set("email")} className="h-12 rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-[#FF6B4A]" />
              </div>
              <Textarea data-testid="footer-message-input" placeholder="Message" rows={4} value={form.message} onChange={set("message")} className="rounded-xl border-white/15 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-[#FF6B4A]" />
              <button type="submit" disabled={loading} data-testid="footer-submit-btn" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B4A] py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f] disabled:opacity-60">
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />}
                {loading ? "Sending…" : "Submit"}
              </button>
            </form>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 block text-center text-sm text-white/50 transition-colors hover:text-[#25D366]">or chat with us on WhatsApp →</a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/terms" data-testid="footer-terms" className="transition-colors hover:text-white">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



