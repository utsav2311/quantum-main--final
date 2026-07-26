"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site";
import { ScanLine, PenTool, Printer } from "lucide-react";

const POINTS = [
  { icon: ScanLine, t: "3D Scanners", d: "Sub-millimetre capture of anatomy — no plaster, no guesswork." },
  { icon: PenTool, t: "CAD/CAM Systems", d: "Engineer geometry, alignment and material zones digitally." },
  { icon: Printer, t: "Industrial 3D Printers", d: "Lighter, stronger devices fabricated in-house, fast." },
];

export default function Studio3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-20, 30]);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1929] to-[#0B121C] py-16 sm:py-24" data-testid="studio-3d">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        
        {/* Text Content First on Mobile */}
        <Reveal className="order-1">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold">3D Studio</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            A digital manufacturing workspace.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80 sm:text-base">
            Our studio is where clinical intent becomes a physical device. Scanners, CAD/CAM design systems and industrial 3D printers work in concert — compressing weeks of traditional fabrication into days, without compromising craftsmanship.
          </p>
          <div className="mt-8 space-y-3 sm:space-y-4">
            {POINTS.map((p) => (
              <div key={p.t} className="flex items-start gap-3.5 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xl sm:p-4 shadow-md">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF6B4A]/20"><p.icon size={19} className="text-[#FF6B4A]" /></span>
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
              alt="3D printing manufacturing facility"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover sm:aspect-[4/5]"
            />
          </div>

          <div className="absolute -left-2 bottom-6 w-40 rounded-2xl border border-white/20 bg-[#0B121C]/80 p-3.5 backdrop-blur-xl shadow-xl sm:-left-5 sm:bottom-8 sm:w-44 sm:p-4">
            <p className="font-mono text-[10px] text-[#FF6B4A] font-bold">SPEED · PRECISION</p>
            <p className="mt-0.5 font-display text-base font-bold text-white sm:text-lg">Craft, digitised.</p>
          </div>
        </motion.div>

      </div>

      <div className="gradient-divider mt-20 mx-auto max-w-7xl" />
    </section>
  );
}
