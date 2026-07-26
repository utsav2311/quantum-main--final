"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Box, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { IMAGES, HERO_CALLOUTS } from "@/lib/site";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({ y: 0, transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const calloutIcons = [Cpu, Box, Users];

export default function Hero() {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.12]);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % HERO_CALLOUTS.length), 3200);
    return () => clearInterval(t);
  }, []);

  const lines = [
    { text: "Transforming" },
    { text: "Healthcare —" },
    { pre: "Join the ", hl: "B2B" },
    { text: "Revolution." },
  ];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B121C]" data-testid="hero">
      <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
        <img src={IMAGES.lab} alt="Clinical manufacturing laboratory" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B121C] via-[#0B121C]/85 to-[#0B121C]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C] via-transparent to-[#0B121C]/40" />
      </motion.div>

      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-[#FF6B4A] sm:mb-6 sm:text-xs sm:tracking-[0.3em]"
        >
          <span className="h-px w-6 bg-[#FF6B4A] sm:w-8" /> Prosthetics &amp; Orthotics · B2B
        </motion.p>

        <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <motion.span custom={i} variants={lineReveal} initial="hidden" animate="show" className="block">
                {line.hl ? (
                  <span>{line.pre}<span className="text-[#FF6B4A]">{line.hl}</span></span>
                ) : line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:mt-7 sm:text-lg"
        >
          Tailored prosthetic &amp; orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }}
          className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
        >
          <button
            onClick={() => router.push("/b2b-innovation-hub")}
            data-testid="hero-b2b-btn"
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#FF6B4A] px-6 py-3.5 font-display text-xs font-semibold text-white transition-colors hover:bg-[#e8532f] sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
          >
            Discover B2B Innovation Hub
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button
            onClick={() => router.push("/products")}
            data-testid="hero-products-btn"
            className="flex w-full items-center justify-center rounded-full border border-white/25 px-6 py-3.5 font-display text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-sm"
          >
            Explore Devices
          </button>
        </motion.div>

        {/* Rotating callouts */}
        <div className="mt-10 max-w-2xl sm:mt-14">
          <div className="flex gap-2">
            {HERO_CALLOUTS.map((_, i) => (
              <span key={i} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-[#FF6B4A] sm:w-10" : "w-4 bg-white/25 sm:w-5"}`} />
            ))}
          </div>
          <div className="relative mt-4 h-16 sm:h-14">
            {HERO_CALLOUTS.map((c, i) => {
              const Icon = calloutIcons[i];
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[#FF6B4A] backdrop-blur">
                    <Icon size={18} />
                  </span>
                  <span className="font-display text-xs font-semibold text-white/90 sm:text-sm">{c}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
