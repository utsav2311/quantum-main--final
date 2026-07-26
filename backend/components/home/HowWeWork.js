"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal, TiltCard, TextReveal } from "@/components/Reveal";
import { PROCESS } from "@/lib/site";
import { Stethoscope, ScanLine, BadgeCheck, Check } from "lucide-react";


const ICONS = { stethoscope: Stethoscope, scan: ScanLine, "badge-check": BadgeCheck };

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50 py-24" data-testid="how-we-work">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold">How We Work</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">
            <TextReveal text="Three chapters from prescription to precision." />
          </h2>
        </Reveal>

        <Stagger className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="gradient-divider absolute left-0 right-0 top-10 hidden md:block" />
          {PROCESS.map((p) => {
            const Icon = ICONS[p.icon];
            return (
              <motion.div key={p.step} variants={itemVariants} className="relative">
                <TiltCard className="relative h-full rounded-3xl border border-white/80 bg-white/75 p-7 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-[#FF6B4A]/40 hover:bg-white/90 hover:shadow-xl hover:shadow-[#FF6B4A]/10">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B121C] to-[#0B4D95] text-white shadow-md"><Icon size={22} /></span>
                    <span className="font-display text-5xl font-extrabold text-slate-200/80">{p.step}</span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#0B121C]">{p.title}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-[#4A5568]">
                        <Check size={16} className="mt-0.5 shrink-0 text-[#FF6B4A]" /> {pt}
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
