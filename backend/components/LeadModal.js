"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLeadModal } from "@/context/LeadModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { api, formatApiError } from "@/lib/api";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const empty = { name: "", email: "", phone: "", organization: "", city: "", investment_capacity: "", message: "" };

export default function LeadModal() {
  const { config, close } = useLeadModal();
  const { language, t, isRTL } = useLanguage();
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const isFranchise = config?.type === "franchise";
  const isPartner = config?.type === "partner";

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const validate = () => {
    const err = {};
    if (form.name.trim().length < 2) err.name = language === "ar" ? "يرجى إدخال اسم صحيح" : "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = language === "ar" ? "يرجى إدخال بريد إلكتروني صحيح" : "Enter a valid email";
    if (form.phone.trim().length < 5) err.phone = language === "ar" ? "يرجى إدخال رقم هاتف صحيح" : "Enter a valid phone number";
    if (isFranchise && !form.city.trim()) err.city = language === "ar" ? "المدينة مطلوبة" : "City / region is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: config.type });
      toast.success(language === "ar" ? "شكراً لك! سيتواصل فريقنا معك قريباً." : "Thank you! Our team will be in touch shortly.");
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
    <div className="space-y-1.5 text-start">
      <Label htmlFor={id} className="text-xs font-medium text-[#4A5568]">{label}</Label>
      <Input
        id={id}
        data-testid={`lead-${id}-input`}
        value={form[id]}
        onChange={set(id)}
        className="h-11 rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95] text-start"
        {...props}
      />
      {errors[id] && <p className="text-xs text-[#0052CC]" data-testid={`lead-${id}-error`}>{errors[id]}</p>}
    </div>
  );

  const title = isPartner ? t("modal.partnerTitle") : isFranchise ? (language === "ar" ? "فرص الامتياز والعيادات" : "Franchise Inquiry") : t("modal.consultTitle");
  const subtitle = isPartner ? t("modal.partnerDesc") : isFranchise ? (language === "ar" ? "انضم إلى شبكة كوانتوم في دول الخليج" : "Scale high-margin P&O clinics") : t("modal.consultDesc");

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
            <div className="relative bg-[#0B4D95] px-5 py-5 sm:px-8 sm:py-7 text-white shrink-0 text-start">
              <div className={`absolute ${isRTL ? "left-0 -translate-x-6" : "right-0 translate-x-6"} top-0 h-24 w-24 -translate-y-6 rounded-full bg-[#0284C7]/40 blur-2xl`} />
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-white/60">
                {language === "ar" ? "حلول الأطراف والتقويم" : "P&O Solutions"}
              </p>
              <h3 className="mt-0.5 font-display text-xl sm:text-2xl font-bold">{title}</h3>
              <p className="mt-1 max-w-sm text-xs sm:text-sm text-white/70">{subtitle}</p>
              <button
                onClick={close}
                data-testid="lead-modal-close"
                aria-label="Close lead modal"
                className={`absolute ${isRTL ? "left-4 sm:left-5" : "right-4 sm:right-5"} top-4 sm:top-5 rounded-full p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer`}
              >
                <X size={18} />
              </button>
            </div>
            <form onSubmit={submit} className="space-y-3.5 sm:space-y-4 px-5 py-5 sm:px-8 sm:py-7 overflow-y-auto">
              {field("name", `${t("modal.nameLabel")} *`, { placeholder: t("modal.namePlaceholder") })}
              <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                {field("email", `${t("modal.emailLabel")} *`, { placeholder: t("modal.emailPlaceholder"), type: "email" })}
                {field("phone", `${t("modal.phoneLabel")} *`, { placeholder: t("modal.phonePlaceholder") })}
              </div>
              {isPartner && field("organization", t("modal.orgLabel"), { placeholder: t("modal.orgPlaceholder") })}
              {isFranchise && (
                <div className="grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  {field("city", `${t("modal.cityLabel")} *`, { placeholder: t("modal.cityPlaceholder") })}
                  {field("investment_capacity", language === "ar" ? "القدرة الاستثمارية" : "Investment Capacity", { placeholder: "e.g. AED 200k–500k" })}
                </div>
              )}
              <div className="space-y-1.5 text-start">
                <Label htmlFor="message" className="text-xs font-medium text-[#4A5568]">{t("modal.msgLabel")}</Label>
                <Textarea id="message" data-testid="lead-message-input" value={form.message} onChange={set("message")} rows={3} placeholder={t("modal.msgPlaceholder")} className="rounded-xl border-[#E2E8F0] focus-visible:ring-[#0B4D95] text-start" />
              </div>
              <button
                type="submit"
                disabled={loading}
                data-testid="lead-submit-btn"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#0284C7] py-3 sm:py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] disabled:opacity-60 cursor-pointer shadow-lg shadow-[#0284C7]/25"
              >
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} className={`transition-transform ${isRTL ? "rotate-180 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`} />}
                {loading ? t("modal.submittingBtn", "Sending…") : t("modal.submitBtn", "Submit Request")}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
