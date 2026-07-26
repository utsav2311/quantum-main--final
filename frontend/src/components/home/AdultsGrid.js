import { Link } from "react-router-dom";
import { Stagger, itemVariants, Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ADULT_TAGS } from "@/data/site";
import { ArrowUpRight } from "lucide-react";

export default function AdultsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" data-testid="adults-section">
      <Reveal>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">For Adults</p>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">Mobility solutions, engineered per patient.</h2>
          </div>
          <Link to="/products?cat=Prosthetics" data-testid="adults-viewall" className="font-display text-sm font-semibold text-[#FF6B4A] hover:underline">View all adult devices →</Link>
        </div>
      </Reveal>

      <Stagger className="mt-10 flex flex-wrap gap-3">
        {ADULT_TAGS.map((t) => (
          <motion.div key={t.label} variants={itemVariants}>
            <Link
              to={t.to}
              data-testid={`adult-tag-${t.label.toLowerCase().replace(/[\s&]+/g, "-")}`}
              className="group flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-5 py-3 font-display text-sm font-medium text-[#0B121C] transition-all hover:-translate-y-0.5 hover:border-[#0B4D95] hover:text-[#0B4D95] hover:shadow-md"
            >
              {t.label}
              <ArrowUpRight size={15} className="text-[#94A3B8] transition-colors group-hover:text-[#FF6B4A]" />
            </Link>
          </motion.div>
        ))}
      </Stagger>
    </section>
  );
}
