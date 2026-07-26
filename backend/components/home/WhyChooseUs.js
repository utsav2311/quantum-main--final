"use client";

import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal } from "@/components/Reveal";
import { WHY } from "@/lib/site";
import { Cpu, Factory, Ruler, Printer, ShieldCheck, Sparkles } from "lucide-react";


const ICONS = { cpu: Cpu, factory: Factory, ruler: Ruler, printer: Printer, "shield-check": ShieldCheck, sparkles: Sparkles };

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-blue-50/25 to-slate-50 py-24 overflow-hidden" data-testid="why-choose-us">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#FF6B4A]/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-[#0B4D95]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold">Why Choose Us</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">Six reasons partners choose our studio.</h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => {
            const Icon = ICONS[w.icon];
            return (
              <motion.div key={w.title} variants={itemVariants} className="group rounded-3xl border border-white/80 bg-white/70 p-7 backdrop-blur-xl shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6B4A]/50 hover:bg-white/90 hover:shadow-xl hover:shadow-[#FF6B4A]/10">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0B121C] to-[#0B4D95] text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:from-[#FF6B4A] group-hover:to-[#e8532f]">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-[#0B121C]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{w.desc}</p>
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
