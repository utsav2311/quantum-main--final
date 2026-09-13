"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal, TiltCard, TextReveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Factory, Ruler, Printer, ShieldCheck, Sparkles } from "lucide-react";

const ICONS = [Cpu, Factory, Ruler, Printer, ShieldCheck, Sparkles];

export default function WhyChooseUs() {
  const { language, t, isRTL } = useLanguage();

  const reasons = language === "ar" ? [
    {
      title: "تصنيع محلي بنسبة 100%",
      desc: "استوديو متكامل في الإمارات يشمل المسح، نمذجة CAD/CAM والطباعة ثلاثية الأبعاد.",
    },
    {
      title: "دقة تشريحية بالميليمتر",
      desc: "مسح ضوئي 3D يلغي التقديرات ويضمن راحة واستقرار الجهاز على جسم المريض.",
    },
    {
      title: "أوقات تسليم قياسية",
      desc: "تسليم معظم الأجهزة المخصصة خلال 5 إلى 10 أيام عمل مع خيارات تسليم عاجلة.",
    },
    {
      title: "ألياف كربون وبوليمرات طبية",
      desc: "مواد متطورة خفيفة الوزن توفر أقصى درجات القوة والمرونة لتلائم نمط حياة المريض.",
    },
    {
      title: "أخصائيون مرخصون من DOH",
      desc: "فريق إكلينيكي معتمد يقدم الدعم للأطباء والمستشفيات من التقييم إلى المتابعة.",
    },
    {
      title: "تكامل سلس مع المستشفيات",
      desc: "نظام إحالة B2B مبسط وتقارير رقمية متكاملة لفرق التأهيل الطبي.",
    },
  ] : [
    {
      title: "100% In-House Production",
      desc: "Direct fabrication from 3D scan to finished device under one accountable roof in the UAE.",
    },
    {
      title: "Sub-Millimetre Accuracy",
      desc: "Digital 3D optics eliminate guesswork, delivering exceptional anatomical fit.",
    },
    {
      title: "5–10 Day Turnaround",
      desc: "Industry-leading fabrication speed with fast-track pathways for urgent hospital cases.",
    },
    {
      title: "Aerospace Carbon & Medical Polymers",
      desc: "High-grade biocompatible composites engineered for durability, lightweight agility, and strength.",
    },
    {
      title: "DOH Licensed Clinical Team",
      desc: "Certified prosthetists and orthotists supporting your medical staff at every stage.",
    },
    {
      title: "Seamless B2B Hospital Flow",
      desc: "Dedicated ordering channels, digital case tracking, and ongoing clinical aftercare.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/25 to-slate-50 py-24 overflow-hidden" data-testid="why-choose-us">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#0284C7]/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-[#0B4D95]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 text-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0284C7] font-semibold">
            {language === "ar" ? "لماذا كوانتوم ميديكال" : "Why Choose Us"}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">
            <TextReveal text={language === "ar" ? "ستة أسباب تجعل المستشفيات تختار استوديوهاتنا." : "Six reasons partners choose our studio."} />
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((w, i) => {
            const Icon = ICONS[i] || Cpu;
            return (
              <motion.div key={w.title} variants={itemVariants}>
                <TiltCard className="group h-full rounded-3xl border border-white/80 bg-white/70 p-7 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-[#0284C7]/50 hover:bg-white/90 hover:shadow-xl hover:shadow-[#0284C7]/10 text-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B121C] to-[#0B4D95] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:from-[#0284C7] group-hover:to-[#0052CC]">
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B121C]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{w.desc}</p>
                </TiltCard>
              </motion.div>
            );
          })}
        </Stagger>
      </div>

      {/* Gradient Section Divider */}
      <div className="gradient-divider mt-24 mx-auto max-w-7xl" />
    </section>
  );
}
