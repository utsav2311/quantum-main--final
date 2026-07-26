import { motion } from "framer-motion";
import { Stagger, itemVariants, Reveal } from "@/components/Reveal";
import { WHY } from "@/data/site";
import { Cpu, Factory, Ruler, Printer, ShieldCheck, Sparkles } from "lucide-react";

const ICONS = { cpu: Cpu, factory: Factory, ruler: Ruler, printer: Printer, "shield-check": ShieldCheck, sparkles: Sparkles };

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24" data-testid="why-choose-us">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Why Choose Us</p>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">Six reasons partners choose our studio.</h2>
        </Reveal>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => {
            const Icon = ICONS[w.icon];
            return (
              <motion.div key={w.title} variants={itemVariants} className="group rounded-3xl border border-[#E2E8F0] bg-[#F8F9FA] p-7 transition-all hover:-translate-y-1 hover:border-[#0B4D95]/30 hover:bg-white hover:shadow-lg">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#0B4D95] shadow-sm transition-colors group-hover:bg-[#0B4D95] group-hover:text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-[#0B121C]">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{w.desc}</p>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
