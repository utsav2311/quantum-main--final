"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { motion } from "framer-motion";
import { api, formatApiError } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Gauge, Boxes, LineChart, Handshake, Send, Loader2 } from "lucide-react";

const VALUE = [
  { icon: Gauge, t: "Faster Turnarounds", d: "Digital fabrication cuts device lead times to days, not weeks." },
  { icon: Boxes, t: "Reliable Supply", d: "In-house capacity means predictable output and no third-party delays." },
  { icon: LineChart, t: "Better Outcomes", d: "Precision fit improves compliance and clinical results." },
  { icon: Handshake, t: "True Partnership", d: "Dedicated clinical liaison, training and co-marketing support." },
];

export default function B2BHubContent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "", message: "" });
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
      await api.post("/leads", { ...form, lead_type: "partner" });
      toast.success("Thanks! Our partnerships team will reach out shortly.");
      setForm({ name: "", email: "", phone: "", organization: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE.map((v) => (
            <motion.div key={v.t} variants={itemVariants} className="rounded-3xl border border-[#E2E8F0] bg-white p-7">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0B4D95] p-3 text-white"><v.icon size={24} /></span>
              <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{v.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="bg-white py-20" data-testid="b2b-form-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Start the conversation</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[#0B121C]">Let's build your supply partnership.</h2>
            <p className="mt-5 leading-relaxed text-[#4A5568]">Tell us about your organization and clinical needs. Our partnerships team will design a tailored engagement — from device supply to on-site clinical support.</p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-5">
              <Building2 size={24} className="text-[#0284C7]" />
              <p className="text-sm text-[#4A5568]">Serving hospitals, clinics & rehabilitation partners across regions.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-4 rounded-3xl border border-[#E2E8F0] bg-[#F8F9FA] p-7 sm:p-9" data-testid="b2b-form">
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Full Name *</Label>
                <Input data-testid="b2b-name" value={form.name} onChange={set("name")} placeholder="Jane Doe" className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-[#4A5568]">Email *</Label>
                  <Input data-testid="b2b-email" type="email" value={form.email} onChange={set("email")} placeholder="you@org.com" className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-medium text-[#4A5568]">Phone *</Label>
                  <Input data-testid="b2b-phone" value={form.phone} onChange={set("phone")} placeholder="+1 234 567 890" className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">Organization</Label>
                <Input data-testid="b2b-org" value={form.organization} onChange={set("organization")} placeholder="Hospital / Clinic" className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-medium text-[#4A5568]">How can we help?</Label>
                <Textarea data-testid="b2b-message" value={form.message} onChange={set("message")} rows={4} placeholder="Volumes, device types, timelines…" className="rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <button type="submit" disabled={loading} data-testid="b2b-submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4D95] py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#083a72] disabled:opacity-60">
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} />}
                {loading ? "Submitting…" : "Submit Partnership Request"}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
