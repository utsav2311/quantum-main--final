"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal, TiltCard, TextReveal } from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";
import { Stethoscope, ScanLine, BadgeCheck, Check } from "lucide-react";

const ICONS = [ScanLine, Stethoscope, BadgeCheck];

export default function HowWeWork() {
  const { language, t, isRTL } = useLanguage();

  const steps = language === "ar" ? [
    {
      step: "01",
      title: "المسح والتقييم الرقمي",
      points: ["مسح ضوئي 3D عالي الدقة", "تحليل المشي والتوزيع الحركي", "بدون قوالب جبس مزعجة"],
    },
    {
      step: "02",
      title: "التصميم والتصنيع المخبري",
      points: ["نمذجة ثلاثية الأبعاد ببرامج CAD/CAM", "طباعة طبية 3D وتفريز رقمي", "ألياف كربون وبوليمرات معتمدة"],
    },
    {
      step: "03",
      title: "التجربة الإكلينيكية والمتابعة",
      points: ["اختبار الملاءمة الحركية للمريض", "تعديل فوري في نفس الجلسة", "رعاية مستمرة وضمان كامل"],
    },
  ] : [
    {
      step: "01",
      title: "3D Scan & Digital Assessment",
      points: ["High-speed optical scanning", "Dynamic gait analysis", "Zero messy plaster casts"],
    },
    {
      step: "02",
      title: "CAD/CAM & In-House Fabrication",
      points: ["Precision digital anatomical modeling", "Medical 3D printing & CNC carving", "High-performance carbon composites"],
    },
    {
      step: "03",
      title: "Clinical Delivery & Support",
      points: ["Real-world gait verification", "Same-session fine tuning", "Continuous clinical aftercare"],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-24" data-testid="how-we-work">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 text-start">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0284C7] font-semibold">
            {language === "ar" ? "منهجية العمل" : "How We Work"}
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">
            <TextReveal text={language === "ar" ? "ثلاث مراحل متكاملة من الوصفة إلى الدقة." : "Three chapters from prescription to precision."} />
          </h2>
        </Reveal>

        <Stagger className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="gradient-divider absolute left-0 right-0 top-10 hidden md:block" />
          {steps.map((p, i) => {
            const Icon = ICONS[i] || Stethoscope;
            return (
              <motion.div key={p.step} variants={itemVariants} className="relative">
                <TiltCard className="relative h-full rounded-3xl border border-white/80 bg-white/75 p-7 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-[#0284C7]/40 hover:bg-white/90 hover:shadow-xl hover:shadow-[#0284C7]/10 text-start">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B121C] to-[#0B4D95] text-white shadow-md">
                      <Icon size={22} />
                    </span>
                    <span className="font-display text-5xl font-extrabold text-slate-200/80">{p.step}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#0B121C]">{p.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-[#4A5568]">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#0284C7]" /> {pt}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </motion.div>
            );
          })}
        </Stagger>
      </div>

      <div className="gradient-divider mt-24 mx-auto max-w-7xl" />
    </section>
  );
}
