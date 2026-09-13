"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site";
import { useLanguage } from "@/context/LanguageContext";
import { ScanLine, PenTool, Printer } from "lucide-react";

export default function Studio3D() {
  const ref = useRef(null);
  const { language, isRTL } = useLanguage();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  const points = language === "ar" ? [
    { icon: ScanLine, t: "ماسحات ثلاثية الأبعاد 3D", d: "التقاط تفاصيل التشريح بدقة متناهية — بدون قوالب جبس وبدون احتمالات خطأ." },
    { icon: PenTool, t: "أنظمة التصميم CAD/CAM", d: "هندسة الأبعاد ومحاور الحركة وتوزيع الضغط رقمياً بأعلى المعايير." },
    { icon: Printer, t: "طابعات ثلاثية الأبعاد صناعية", d: "تصنيع أجهزة أخف وزناً وأكثر متانة في استوديوهاتنا بسرعة فائقة." },
  ] : [
    { icon: ScanLine, t: "3D Scanners", d: "Sub-millimetre capture of anatomy — no plaster, no guesswork." },
    { icon: PenTool, t: "CAD/CAM Systems", d: "Engineer geometry, alignment and material zones digitally." },
    { icon: Printer, t: "Industrial 3D Printers", d: "Lighter, stronger devices fabricated in-house, fast." },
  ];

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1929] to-[#0B121C] py-16 sm:py-24" data-testid="studio-3d">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        
        {/* Text Content First on Mobile */}
        <Reveal className="order-1 text-start">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0284C7] font-semibold">
            {language === "ar" ? "استوديو الطباعة ثلاثية الأبعاد" : "3D Studio"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {language === "ar" ? "مساحة متطورة للتصنيع الرقمي الطبي." : "A digital manufacturing workspace."}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
            {language === "ar"
              ? "استوديونا هو المكان الذي تتحول فيه الرؤية الإكلينيكية إلى جهاز حقيقي. تعمل الماسحات الضوئية وأنظمة CAD/CAM وطابعات 3D الصناعية بتناغم تام — مما يختصر أسابيع التصنيع التقليدي إلى أيام معدودة دون المساومة على الدقة."
              : "Our studio is where clinical intent becomes a physical device. Scanners, CAD/CAM design systems and industrial 3D printers work in concert — compressing weeks of traditional fabrication into days, without compromising craftsmanship."}
          </p>
          <div className="mt-8 space-y-3 sm:space-y-4">
            {points.map((p) => (
              <div key={p.t} className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xl sm:p-4 shadow-md text-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0284C7]/20">
                  <p.icon size={19} className="text-[#0284C7]" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-white sm:text-base">{p.t}</p>
                  <p className="mt-0.5 text-xs text-white/70 sm:text-sm">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image Second on Mobile */}
        <motion.div style={{ y }} className="relative order-2">
          <div className="overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <img
              src={IMAGES.printing}
              alt="Quantum Medical — In-house 3D Printing & CAD/CAM Prosthetic Fabrication Lab in Abu Dhabi"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
            />
          </div>

          <div className={`absolute ${isRTL ? "right-2 sm:right-4" : "left-2 sm:left-4"} bottom-4 w-36 rounded-2xl border border-white/20 bg-[#0B121C]/80 p-3 backdrop-blur-xl shadow-xl sm:bottom-8 sm:w-48 sm:p-4 text-start`}>
            <p className="font-mono text-[9px] sm:text-[10px] text-[#0284C7] font-bold uppercase tracking-wider">
              {language === "ar" ? "سرعة · دقة فائقة" : "SPEED · PRECISION"}
            </p>
            <p className="mt-0.5 font-display text-sm font-bold text-white sm:text-lg">
              {language === "ar" ? "حرفة هندسية رقمية." : "Craft, digitised."}
            </p>
          </div>
        </motion.div>

      </div>

      <div className="gradient-divider mt-20 mx-auto max-w-7xl" />
    </section>
  );
}
