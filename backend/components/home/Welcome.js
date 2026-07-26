"use client";

import { Reveal, FloatingElement, TiltCard, TextReveal } from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { IMAGES, waLink } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { v: "5–10", l: "Day turnaround", isNum: false },
  { v: "100%", l: "In-house fabrication", isNum: true },
  { v: "3D", l: "Scanned & printed", isNum: false },
  { v: "100%", l: "Fit guarantee", isNum: true },
];

export default function Welcome() {
  const { open } = useLeadModal();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-16 sm:py-24" data-testid="welcome">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        
        {/* Content (Text First on Mobile, Right Column on Desktop) */}
        <Reveal delay={0.05} className="order-1 lg:order-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold">Welcome</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#0B121C] sm:text-4xl lg:text-5xl">
            <TextReveal text="A B2B partner built for hospitals, clinics & rehab teams." />
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#4A5568] sm:text-base">
            We supply the healthcare ecosystem with truly custom prosthetic and orthotic devices — designed for both children and adults. Every device begins with gait analysis and a 3D scan, is engineered with CAD/CAM, and is fabricated in-house using advanced 3D printing.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#4A5568] sm:text-base">
            The result: faster turnarounds, repeatable fit quality, and a single accountable partner for your clinical supply chain.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {STATS.map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/80 bg-white/75 p-3.5 backdrop-blur-md shadow-sm transition-transform duration-300 hover:scale-105">
                <p className="font-display text-2xl font-extrabold text-[#0B4D95] sm:text-3xl">
                  {s.isNum ? <AnimatedCounter value={s.v} /> : s.v}
                </p>
                <p className="mt-0.5 text-xs text-[#4A5568] font-medium">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button onClick={() => open("partner")} data-testid="welcome-connect-btn" className="btn-gradient-coral group flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-xs font-semibold text-white shadow-lg shadow-[#FF6B4A]/30 sm:text-sm">
              Connect with Us <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="welcome-whatsapp-btn" className="btn-gradient-glass flex items-center justify-center rounded-full px-6 py-3.5 font-display text-xs font-semibold text-[#0B121C] transition-colors hover:border-[#25D366] hover:text-[#25D366] sm:text-sm">
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Image with 3D Tilt & Floating Badge */}
        <Reveal delay={0.1} className="order-2 lg:order-1">
          <TiltCard className="relative">
            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-2xl border border-[#FF6B4A]/30 sm:-left-4 sm:-top-4 sm:h-24 sm:w-24" />
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={IMAGES.team}
                alt="Clinical team at work"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]"
              />
            </div>

            <FloatingElement distance={8} className="absolute -bottom-4 -right-2 rounded-2xl border border-white/90 bg-white/85 p-4 backdrop-blur-xl shadow-2xl sm:-bottom-6 sm:-right-4 sm:p-5">
              <p className="font-mono text-[10px] uppercase tracking-widest text-[#FF6B4A] sm:text-xs font-bold">Since day one</p>
              <p className="mt-0.5 font-display text-lg font-extrabold text-[#0B121C] sm:text-2xl">Precision, in-house.</p>
            </FloatingElement>
          </TiltCard>
        </Reveal>

      </div>

      <div className="gradient-divider mt-20 mx-auto max-w-7xl" />
    </section>
  );
}
