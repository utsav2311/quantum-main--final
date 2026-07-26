"use client";

import { motion } from "framer-motion";


export default function PageHero({ label, title, subtitle, image, children }) {
  return (
    <section className="relative overflow-hidden bg-[#0B121C] pt-[70px]" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0">
          <img src={image} alt={title} decoding="async" fetchpriority="high" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B121C] via-[#0B121C]/85 to-[#0B121C]/40" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        {label && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A]">
            <span className="h-px w-8 bg-[#FF6B4A]" /> {label}
          </motion.p>
        )}
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {subtitle}
          </motion.p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
