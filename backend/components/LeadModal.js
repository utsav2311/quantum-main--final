"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLeadModal } from "@/context/LeadModalContext";
import { api, formatApiError } from "@/lib/api";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const empty = { name: "", email: "", phone: "", organization: "", city: "", investment_capacity: "", message: "" };

export default function LeadModal() {
  const { config, close } = useLeadModal();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isFranchise = config?.type === "franchise";
  const isPartner = config?.type === "partner";

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email";
    if (form.phone.trim().length < 5) err.phone = "Enter a valid phone number";
    if (isFranchise && !form.city.trim()) err.city = "City / region is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: config.type });
      toast.success("Thank you! Our team will be in touch shortly.");
      setForm(empty);
      setErrors({});
      close();
    } catch (err) {
      toast.error(formatApiError(err));
    } finally {
      setLoading(false);
    }
  };

  const field = (id, label, props = {}) => (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-medium text-[#4A5568]">{label}</Label>
      <Input
        id={id}
        data-testid={`lead-${id}-input`}
        value={form[id]}
        onChange={set(id)}
        className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]"
        {...props}
      />
      {errors[id] && <p className="text-xs text-[#0052CC]" data-testid={`lead-${id}-error`}>{errors[id]}</p>}
    </div>
  );

  return (
    <AnimatePresence>
      {config && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          data-testid="lead-modal"
        >
          <div className="fixed inset-0 bg-[#0B121C]/60 backdrop-blur-sm" onClick={close} />
          <motion.div
            className="relative z-10 my-auto w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl max-h-[92vh] flex flex-col"
            initial={{ scale: 0.94, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
          >
            <div className="relative bg-[#0B4D95] px-5 py-5 sm:px-8 sm:py-7 text-white shrink-0">
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-6 translate-x-6 rounded-full bg-[#0284C7]/40 blur-2xl" />
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/60">P&amp;O Solutions</p>
              <h3 className="mt-0.5 font-display text-xl sm:text-2xl font-bold">{config.title}</h3>
              <p className="mt-1 max-w-sm text-xs sm:text-sm text-white/70">{config.subtitle}</p>
              <button
                onClick={close}
                data-testid="lead-modal-close"
                aria-label="Close lead modal"
                className="absolute right-4 top-4 sm:right-5 sm:top-5 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submit} className="space-y-3.5 sm:space-y-4 px-5 py-5 sm:px-8 sm:py-7 overflow-y-auto">
              {field("name", "Full Name *", { placeholder: "Jane Doe" })}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                {field("email", "Email *", { placeholder: "you@org.com", type: "email" })}
                {field("phone", "Phone *", { placeholder: "+1 234 567 890" })}
              </div>
              {(isPartner) && field("organization", "Organization", { placeholder: "Hospital / Clinic name" })}
              {isFranchise && (
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  {field("city", "City / Region *", { placeholder: "e.g. Abu Dhabi, UAE" })}
                  {field("investment_capacity", "Investment Capacity", { placeholder: "e.g. AED 200k–500k" })}
                </div>
              )}
              <div className="space-y-1.5">
                <Label htmlFor="message" className="text-xs font-medium text-[#4A5568]">Message / Interest</Label>
                <Textarea id="message" data-testid="lead-message-input" value={form.message} onChange={set("message")} rows={3} placeholder="Tell us how we can help…" className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95]" />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="lead-submit-btn"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0284C7] py-3 sm:py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] disabled:opacity-60"
              >
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} className="transition-transform group-hover:translate-x-0.5" />}
                {loading ? "Sending…" : "Submit Request"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
