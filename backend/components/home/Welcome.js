"use client";

import { Reveal, FloatingElement, TiltCard, TextReveal } from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IMAGES, waLink } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight } from "lucide-react";

export default function Welcome() {
  const { open } = useLeadModal();
  const { language, t, isRTL } = useLanguage();

  const stats = [
    { v: "5–10", l: language === "ar" ? "أيام للتسليم" : "Day turnaround", isNum: false },
    { v: "100%", l: language === "ar" ? "تصنيع محلي متكامل" : "In-house fabrication", isNum: true },
    { v: "3D", l: language === "ar" ? "مسح وطباعة ثلاثية الأبعاد" : "Scanned & printed", isNum: false },
    { v: "100%", l: language === "ar" ? "ضمان الملاءمة والراحة" : "Fit guarantee", isNum: true },
  ];

  const title = language === "ar"
    ? "شريك B2B مصمم للمستشفيات، العيادات، وفرق التأهيل الطبي."
    : "A B2B partner built for hospitals, clinics & rehab teams.";

  const desc1 = language === "ar"
    ? "نزود منظومة الرعاية الصحية بأجهزة أطراف اصطناعية وتقويمية مخصصة بدقة فائقة — مصممة لكل من الأطفال والبالغين. تبدأ كل مرحلة بتحليل المشي والمسح الضوئي ثلاثي الأبعاد، ثم الهندسة عبر CAD/CAM، والتصنيع المخبري المباشر بتقنيات الطباعة ثلاثية الأبعاد المتقدمة."
    : "We supply the healthcare ecosystem with truly custom prosthetic and orthotic devices — designed for both children and adults. Every device begins with gait analysis and a 3D scan, is engineered with CAD/CAM, and is fabricated in-house using advanced 3D printing.";

  const desc2 = language === "ar"
    ? "النتيجة: أوقات تسليم أسرع، جودة ملاءمة موثوقة ومكررة، وشريك واحد مسؤول وموثوق لسلسلة التوريد الإكلينيكية الخاصة بك."
    : "The result: faster turnarounds, repeatable fit quality, and a single accountable partner for your clinical supply chain.";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-16 sm:py-24" data-testid="welcome">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        
        {/* Content (Text First on Mobile, Right Column on Desktop) */}
        <Reveal delay={0.05} className="order-1 lg:order-2 text-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0284C7] font-semibold">
            {language === "ar" ? "مرحباً بكم في كوانتوم" : "Welcome"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#0B121C] sm:text-4xl lg:text-5xl">
            <TextReveal text={title} />
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#4A5568] sm:text-base">
            {desc1}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4A5568] sm:text-base">
            {desc2}
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {stats.map((s, idx) => (
              <div key={idx} className="rounded-2xl border border-white/80 bg-white/75 p-3.5 backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105 text-start">
                <p className="font-display text-2xl font-extrabold text-[#0B4D95] sm:text-3xl">
                  {s.isNum ? <AnimatedCounter value={s.v} /> : s.v}
                </p>
                <p className="mt-0.5 text-xs text-[#4A5568] font-medium">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button onClick={() => open("partner")} data-testid="welcome-connect-btn" className="btn-gradient-coral group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-xs font-semibold text-white shadow-lg shadow-[#0284C7]/30 sm:text-sm cursor-pointer">
              {language === "ar" ? "تواصل معنا" : "Connect with Us"}
              <ArrowUpRight size={17} className={`transition-transform ${isRTL ? "rotate-270 group-hover:-translate-x-0.5" : "group-hover:translate-x-0.5"}`} />
            </button>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="welcome-whatsapp-btn" className="btn-gradient-glass flex items-center justify-center rounded-full px-6 py-3.5 font-display text-xs font-semibold text-[#0B121C] transition-colors hover:border-[#25D366] hover:text-[#25D366] sm:text-sm cursor-pointer">
              {language === "ar" ? "محادثة عبر واتساب" : "Chat on WhatsApp"}
            </a>
          </div>
        </Reveal>

        {/* Image with 3D Tilt & Floating Badge */}
        <Reveal delay={0.1} className="order-2 lg:order-1">
          <TiltCard className="relative">
            <div className={`absolute ${isRTL ? "-right-3 sm:-right-4" : "-left-3 sm:-left-4"} -top-3 sm:-top-4 h-20 w-20 sm:h-24 sm:w-24 rounded-2xl border border-[#0284C7]/30`} />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={IMAGES.team}
                alt="Quantum Medical Clinical Team & Health Professionals in Abu Dhabi UAE"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
            </div>

            <FloatingElement distance={8} className={`absolute bottom-2 ${isRTL ? "left-2 sm:left-4" : "right-2 sm:right-4"} rounded-2xl border border-white/90 bg-white/85 p-3.5 backdrop-blur-xl shadow-2xl sm:bottom-4 sm:p-5 text-start`}>
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#0284C7] sm:text-xs font-bold">
                {language === "ar" ? "منذ اليوم الأول" : "Since day one"}
              </p>
              <p className="mt-0.5 font-display text-base font-extrabold text-[#0B121C] sm:text-2xl">
                {language === "ar" ? "دقة إكلينيكية متكاملة." : "Precision, in-house."}
              </p>
            </FloatingElement>
          </TiltCard>
        </Reveal>

      </div>

      <div className="gradient-divider mt-20 mx-auto max-w-7xl" />
    </section>
  );
}
