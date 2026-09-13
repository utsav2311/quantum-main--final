"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Award, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

const TESTIMONIALS_EN = [
  {
    name: "Dr. Farhan Al-Mansouri",
    role: "Head of Orthopedic Surgery",
    facility: "Specialist Orthopedic Hospital, Abu Dhabi",
    quote: "Quantum Medical's CAD/CAM turnarounds have fundamentally changed how we manage post-op scoliosis patients. We receive custom 3D braces in days rather than weeks.",
    discipline: "Spinal Surgery & Orthotics",
    metric: "70% Faster Turnaround",
  },
  {
    name: "Sarah Jenkins, CPO",
    role: "Lead Pediatric Prosthetist",
    facility: "Gulf Rehabilitation Network, Dubai",
    quote: "The anatomical accuracy of their 3D cranial helmets and pediatric AFOs is exceptional. The lightweight materials make a noticeable difference in child compliance.",
    discipline: "Pediatric P&O Care",
    metric: "98% Fit Accuracy",
  },
  {
    name: "Dr. Tariq Al-Hashimi",
    role: "Director of Physical Medicine & Rehab",
    facility: "National Care Hospital, Abu Dhabi",
    quote: "Their digital workflow integrates effortlessly with our hospital referral system. Having in-house additive manufacturing locally in the UAE provides huge accountability.",
    discipline: "Rehabilitation Medicine",
    metric: "100+ Patients Restored",
  },
];

const TESTIMONIALS_AR = [
  {
    name: "د. فرحان المنصوري",
    role: "رئيس قسم جراحة العظام",
    facility: "مستشفى العظام التخصصي، أبوظبي",
    quote: "لقد غيّر سير العمل الرقمي لدى كوانتوم ميديكال طريقة تعاملنا مع مرضى الجنف بعد العمليات تماماً. نستلم الدعامات ثلاثية الأبعاد المخصصة خلال أيام بدلاً من أسابيع.",
    discipline: "جراحة العمود الفقري وتقويم العظام",
    metric: "تسليم أسرع بنسبة 70%",
  },
  {
    name: "سارة جينكينز",
    role: "أخصائية أطراف اصطناعية للأطفال",
    facility: "شبكة الخليج لإعادة التأهيل، دبي",
    quote: "الدقة التشريحية لخوذات الرأس ثلاثية الأبعاد وجبائر AFO للأطفال متميزة للغاية. المواد الخفيفة تصنع فارقاً كبيراً في راحة الطفل واستجابته للعلاج.",
    discipline: "تقويم وأطراف الأطفال",
    metric: "98% دقة الملاءمة",
  },
  {
    name: "د. طارق الهاشمي",
    role: "مدير الطب الطبيعي وإعادة التأهيل",
    facility: "مستشفى الرعاية الوطنية، أبوظبي",
    quote: "يتكامل نظامهم الرقمي بسلاسة مع مسارات الإحالة في مستشفانا. وجود استوديو تصنيع محلي في دولة الإمارات يمنحنا موثوقية عالية وسرعة استثنائية.",
    discipline: "الطب التأهيلي",
    metric: "أكثر من 100 مريض تمت خدمتهم",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const { language, isRTL } = useLanguage();

  const testimonials = language === "ar" ? TESTIMONIALS_AR : TESTIMONIALS_EN;
  const count = testimonials.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxTop = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const parallaxBottom = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const navigate = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const current = testimonials[index];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1929] to-[#0B121C] py-20 sm:py-28" data-testid="testimonials">
      {/* Background Ambient Glow Effects with Parallax */}
      <motion.div style={{ y: parallaxTop }} className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0B4D95]/35 via-[#0284C7]/15 to-transparent blur-3xl opacity-60" />
      <motion.div style={{ y: parallaxBottom }} className="pointer-events-none absolute -bottom-40 right-10 h-[450px] w-[450px] rounded-full bg-[#0284C7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              <Sparkles size={13} /> {language === "ar" ? "شركاؤنا الإكلينيكيون المعتمدون" : "Verified Clinical Partners"}
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {language === "ar" ? "موثوقون من كبار الجراحين وأطباء التأهيل." : "Trusted by Surgeons & Rehab Leads."}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              {language === "ar"
                ? "تعرف على كيفية مساهمة سير عملنا الرقمي CAD/CAM والتصنيع ثلاثي الأبعاد في دعم فرق المستشفيات في المنطقة."
                : "See how our digital CAD/CAM workflow and in-house 3D fabrication empower leading hospital teams across the region."}
            </p>
          </div>
        </Reveal>

        {/* Testimonial Spotlight Showcase */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${language}-${index}`}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
              data-testid="testimonial-card"
            >
              {/* Left Column: Clinician Profile & Verified Badges */}
              <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-start">
                <div className="flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#25D366]">
                  <CheckCircle2 size={14} /> {language === "ar" ? "شريك معتمد" : "Verified Partner"}
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">{current.name}</h3>
                <p className="text-sm font-semibold text-[#0284C7]">{current.role}</p>

                <div className="mt-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Building2 size={13} className="text-[#0B4D95]" />
                  <span className="truncate">{current.facility}</span>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="fill-[#0284C7] text-[#0284C7]" />
                  ))}
                  <span className="ms-2 font-mono text-xs font-bold text-white/90">5.0 / 5.0</span>
                </div>
              </div>

              {/* Right Column: Quote & Outcome Impact Metric */}
              <div className={`relative flex flex-col justify-between border-t border-white/10 pt-6 lg:col-span-8 lg:border-t-0 ${isRTL ? "lg:border-r lg:pr-10" : "lg:border-l lg:pl-10"} lg:pt-0 text-start`}>
                <Quote size={48} className={`absolute -top-3 ${isRTL ? "left-0" : "right-0"} text-white/10 sm:text-white/15`} />

                {/* Clinical Impact Metric Tag */}
                <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-[#0284C7]/30 bg-[#0284C7]/15 px-3.5 py-1.5 font-mono text-xs font-semibold text-[#0284C7]">
                  <Award size={14} /> {language === "ar" ? "الأثر الإكلينيكي:" : "Measured Impact:"} {current.metric}
                </div>

                {/* Quote Body */}
                <blockquote className="font-display text-lg font-medium leading-relaxed text-white/90 sm:text-2xl lg:text-2xl">
                  “{current.quote}”
                </blockquote>

                {/* Discipline Tag */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-white/60">
                  <span>{language === "ar" ? "التخصص:" : "Specialty:"} <strong className="text-white/90">{current.discipline}</strong></span>
                  <span className="flex items-center gap-1 text-[#0284C7]"><ShieldCheck size={14} /> {language === "ar" ? "تقييم موثق" : "Certified Review"}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            
            {/* Direct Clinician Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {testimonials.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setDirection(idx > index ? 1 : -1);
                    setIndex(idx);
                  }}
                  className={`rounded-full px-3.5 py-1.5 font-display text-xs font-semibold transition-all cursor-pointer ${
                    idx === index
                      ? "bg-[#0284C7] text-white shadow-lg shadow-[#0284C7]/30"
                      : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(isRTL ? 1 : -1)}
                data-testid="testimonial-prev"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#0284C7] hover:bg-[#0284C7] hover:text-white cursor-pointer"
                aria-label="Previous clinical review"
              >
                <ChevronLeft size={20} className={isRTL ? "rotate-180" : ""} />
              </button>

              <button
                onClick={() => navigate(isRTL ? -1 : 1)}
                data-testid="testimonial-next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#0284C7] hover:bg-[#0284C7] hover:text-white cursor-pointer"
                aria-label="Next clinical review"
              >
                <ChevronRight size={20} className={isRTL ? "rotate-180" : ""} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
