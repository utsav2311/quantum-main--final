"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal } from "@/components/Reveal";
import { PROCESS } from "@/lib/site";
import { Stethoscope, ScanLine, BadgeCheck, Check } from "lucide-react";


const ICONS = { stethoscope: Stethoscope, scan: ScanLine, "badge-check": BadgeCheck };

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" data-testid="how-we-work">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">How We Work</p>
        <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">
          Three chapters from prescription to precision.
        </h2>
      </Reveal>

      <Stagger className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-[#E2E8F0] md:block" />
        {PROCESS.map((p) => {
          const Icon = ICONS[p.icon];
          return (
            <motion.div key={p.step} variants={itemVariants} className="relative">
              <div className="relative rounded-3xl border border-[#E2E8F0] bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B4D95] text-white"><Icon size={22} /></span>
                  <span className="font-display text-5xl font-extrabold text-[#F1F5F9]">{p.step}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-[#0B121C]">{p.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-[#4A5568]">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#FF6B4A]" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </Stagger>
    </section>
  );
}
