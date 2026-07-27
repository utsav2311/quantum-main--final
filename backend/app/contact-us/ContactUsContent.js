"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { COMPANY, waLink } from "@/lib/site";
import { api, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send, Loader2, MessageCircle } from "lucide-react";

export default function ContactUsContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(form.email) || form.phone.trim().length < 5) {
      toast.error("Please provide your name, a valid email and phone.");
      return;
    }
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: "general" });
      toast.success("Message sent — we'll be in touch soon!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to send");
    } finally {
      setLoading(false);
    }
  };

  const primaryAddress = COMPANY.addresses[0] || {
    label: "Clinical Facility & C-Fab",
    value: "Al Danah, Abu Dhabi, United Arab Emirates",
    maps: "https://www.google.com/maps/search/?api=1&query=Al+Danah+Abu+Dhabi+United+Arab+Emirates",
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-4">
            <a href={`tel:${COMPANY.phoneRaw}`} data-testid="contact-phone" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#0B4D95]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4D95]/10"><Phone size={20} className="text-[#0B4D95]" /></span>
              <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">Call</p><p className="font-display font-semibold text-[#0B121C]">{COMPANY.phone}</p></div>
            </a>
            <a href={`mailto:${COMPANY.email}`} data-testid="contact-email" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#0B4D95]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4D95]/10"><Mail size={20} className="text-[#0B4D95]" /></span>
              <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">Email</p><p className="font-display font-semibold text-[#0B121C]">{COMPANY.email}</p></div>
            </a>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp" className="flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-colors hover:border-[#25D366]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10"><MessageCircle size={20} className="text-[#25D366]" /></span>
              <div><p className="font-mono text-xs uppercase tracking-widest text-[#94A3B8]">WhatsApp</p><p className="font-display font-semibold text-[#0B121C]">Chat with us</p></div>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {COMPANY.addresses.map((a) => (
              <a key={a.label} href={a.maps} target="_blank" rel="noopener noreferrer" data-testid={`contact-address-${a.label}`} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-all hover:border-[#0284C7] hover:shadow-md">
                <div className="flex items-center gap-2 text-[#0284C7]"><MapPin size={16} /><span className="font-display text-xs font-semibold uppercase tracking-wide">{a.label}</span></div>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{a.value}</p>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="space-y-4 rounded-3xl border border-[#E2E8F0] bg-white p-7 sm:p-9 shadow-sm" data-testid="contact-form">
            <h3 className="font-display text-xl font-bold text-[#0B121C]">Send us a message</h3>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-[#4A5568]">Full Name *</Label>
              <Input data-testid="contact-name" value={form.name} onChange={set("name")} placeholder="Your name" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Email *</Label>
                <Input data-testid="contact-email-input" type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Phone *</Label>
                <Input data-testid="contact-phone-input" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 890" className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-medium text-[#4A5568]">Message</Label>
              <Textarea data-testid="contact-message" value={form.message} onChange={set("message")} rows={4} placeholder="How can we assist you?" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
            </div>
            <button type="submit" disabled={loading} data-testid="contact-submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0284C7] py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] disabled:opacity-60">
              {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />}
              {loading ? "Sending…" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>

      {/* Live Interactive Google Map */}
      <Reveal delay={0.2}>
        <div className="mt-16 overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm" data-testid="contact-live-map">
          <div className="border-b border-[#E2E8F0] p-6 sm:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0284C7]">Facility Location</span>
                <h3 className="mt-1 font-display text-2xl font-bold text-[#0B121C]">Visit Our Clinical Center</h3>
                <p className="mt-1 text-sm text-[#4A5568]">{primaryAddress.value}</p>
              </div>
              <a
                href={primaryAddress.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B4D95] px-5 py-2.5 font-display text-xs font-semibold text-[#0B4D95] transition-colors hover:bg-[#0B4D95] hover:text-white"
              >
                <MapPin size={15} /> Open in Google Maps
              </a>
            </div>
          </div>
          <div className="relative h-[450px] w-full bg-[#F8F9FA]">
            <iframe
              title="Quantum Medical Abu Dhabi Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14519.865768270104!2d54.3644!3d24.4882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66160352a975%3A0x6b7df08b417e9154!2sAl%20Danah%20-%20Zone%201%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full filter contrast-[1.02]"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
