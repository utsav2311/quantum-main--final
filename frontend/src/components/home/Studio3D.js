import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/data/site";
import { ScanLine, PenTool, Printer } from "lucide-react";

const POINTS = [
  { icon: ScanLine, t: "3D Scanners", d: "Sub-millimetre capture of anatomy — no plaster, no guesswork." },
  { icon: PenTool, t: "CAD/CAM Systems", d: "Engineer geometry, alignment and material zones digitally." },
  { icon: Printer, t: "Industrial 3D Printers", d: "Lighter, stronger devices fabricated in-house, fast." },
];

export default function Studio3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0B121C] py-24" data-testid="studio-3d">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A]">3D Studio</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            A digital manufacturing workspace.
          </h2>
          <p className="mt-6 leading-relaxed text-white/70">
            Our studio is where clinical intent becomes a physical device. Scanners, CAD/CAM design systems and industrial 3D printers work in concert — compressing weeks of traditional fabrication into days, without compromising craftsmanship.
          </p>
          <div className="mt-9 space-y-4">
            {POINTS.map((p) => (
              <div key={p.t} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6B4A]/15"><p.icon size={20} className="text-[#FF6B4A]" /></span>
                <div>
                  <p className="font-display font-semibold text-white">{p.t}</p>
                  <p className="mt-0.5 text-sm text-white/60">{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <motion.div style={{ y }} className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <img src={IMAGES.printing} alt="3D printing manufacturing facility" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>

          <div className="absolute -left-5 bottom-8 w-44 rounded-2xl border border-white/10 bg-[#0B121C]/90 p-4 backdrop-blur">
            <p className="font-mono text-xs text-[#FF6B4A]">SPEED · PRECISION</p>
            <p className="mt-1 font-display text-lg font-bold text-white">Craft, digitised.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
