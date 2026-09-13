"use client";

import { useState } from "react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import { Reveal, Stagger, itemVariants } from "@/components/Reveal";
import { motion } from "framer-motion";
import { api, formatApiError } from "@/lib/api";
import { IMAGES } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Building2, Gauge, Boxes, LineChart, Handshake, Send, Loader2 } from "lucide-react";

const VALUE_ICONS = [Gauge, Boxes, LineChart, Handshake];

export default function B2BHubContent() {
  const { language, isRTL, t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (form.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(form.email) || form.phone.trim().length < 5) {
      toast.error(t("b2bHubPage.valError"));
      return;
    }
    setLoading(true);
    try {
      await api.post("/leads", { ...form, lead_type: "partner" });
      toast.success(t("b2bHubPage.sentSuccess"));
      setForm({ name: "", email: "", phone: "", organization: "", message: "" });
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail) || "Failed to submit");
    } finally {
      setLoading(false);
    }
  };

  const values = language === "ar" ? [
    { icon: Gauge, t: "أوقات تسليم قياسية", d: "التصنيع الرقمي يقلص فترات تسليم الأجهزة إلى أيام بدلاً من أسابيع." },
    { icon: Boxes, t: "إمداد موثوق وثابت", d: "القدرة التصنيعية المحلية تضمن إنتاجية مستمرة وبدون أي تأخيرات خارجية." },
    { icon: LineChart, t: "نتائج إكلينيكية أفضل", d: "الملاءمة الدقيقة تعزز راحة المريض والتزامه بالعلاج ونتائج التأهيل." },
    { icon: Handshake, t: "شراكة إكلينيكية حقيقية", d: "تنسيق إكلينيكي مخصص، تدريب للكوادر، ودعم تقني وتسويقي متكامل." },
  ] : [
    { icon: Gauge, t: "Faster Turnarounds", d: "Digital fabrication cuts device lead times to days, not weeks." },
    { icon: Boxes, t: "Reliable Supply", d: "In-house capacity means predictable output and no third-party delays." },
    { icon: LineChart, t: "Better Outcomes", d: "Precision fit improves compliance and clinical results." },
    { icon: Handshake, t: "True Partnership", d: "Dedicated clinical liaison, training and co-marketing support." },
  ];

  return (
    <div>
      <PageHero
        label={t("b2bHubPage.heroLabel")}
        title={t("b2bHubPage.heroTitle")}
        subtitle={t("b2bHubPage.heroSubtitle")}
        image={IMAGES.lab}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 text-start">
        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <motion.div key={v.t} variants={itemVariants} className="rounded-3xl border border-[#E2E8F0] bg-white p-7 text-start">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0B4D95] p-3 text-white"><v.icon size={24} /></span>
              <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{v.d}</p>
            </motion.div>
          ))}
        </Stagger>
      </section>

      <section className="bg-white py-20 text-start" data-testid="b2b-form-section">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95] font-semibold">{t("b2bHubPage.formSectionTag")}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[#0B121C]">{t("b2bHubPage.formSectionTitle")}</h2>
            <p className="mt-5 leading-relaxed text-[#4A5568]">{t("b2bHubPage.formSectionDesc")}</p>
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F8F9FA] p-5">
              <Building2 size={24} className="text-[#0284C7] shrink-0" />
              <p className="text-sm text-[#4A5568]">{t("b2bHubPage.servingBadge")}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="space-y-4 rounded-3xl border border-[#E2E8F0] bg-[#F8F9FA] p-7 sm:p-9 text-start" data-testid="b2b-form">
              <div className="space-y-1.5">
                <Label htmlFor="b2b-full-name" className="text-xs font-medium text-[#4A5568]">{t("b2bHubPage.nameLabel")}</Label>
                <Input id="b2b-full-name" data-testid="b2b-name" value={form.name} onChange={set("name")} placeholder={t("b2bHubPage.namePlaceholder")} className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="b2b-email-field" className="text-xs font-medium text-[#4A5568]">{t("b2bHubPage.emailLabel")}</Label>
                  <Input id="b2b-email-field" data-testid="b2b-email" type="email" value={form.email} onChange={set("email")} placeholder={t("b2bHubPage.emailPlaceholder")} className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="b2b-phone-field" className="text-xs font-medium text-[#4A5568]">{t("b2bHubPage.phoneLabel")}</Label>
                  <Input id="b2b-phone-field" data-testid="b2b-phone" value={form.phone} onChange={set("phone")} placeholder={t("b2bHubPage.phonePlaceholder")} className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="b2b-org-field" className="text-xs font-medium text-[#4A5568]">{t("b2bHubPage.orgLabel")}</Label>
                <Input id="b2b-org-field" data-testid="b2b-org" value={form.organization} onChange={set("organization")} placeholder={t("b2bHubPage.orgPlaceholder")} className="h-11 rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="b2b-message-field" className="text-xs font-medium text-[#4A5568]">{t("b2bHubPage.msgLabel")}</Label>
                <Textarea id="b2b-message-field" data-testid="b2b-message" value={form.message} onChange={set("message")} rows={4} placeholder={t("b2bHubPage.msgPlaceholder")} className="rounded-xl border-[#E2E8F0] bg-white focus-visible:ring-[#0B4D95]" />
              </div>
              <button type="submit" disabled={loading} data-testid="b2b-submit" className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0B4D95] py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#083a72] disabled:opacity-60 cursor-pointer">
                {loading ? <Loader2 size={17} className="animate-spin" /> : <Send size={16} className={isRTL ? "rotate-180" : ""} />}
                {loading ? t("b2bHubPage.submittingBtn") : t("b2bHubPage.submitBtn")}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
