"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Cpu, Box, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { IMAGES } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { useLanguage } from "@/context/LanguageContext";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({ y: 0, transition: { duration: 0.85, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const calloutIcons = [Cpu, Box, Users];

export default function Hero() {
  const router = useRouter();
  const { open } = useLeadModal();
  const { language, t, isRTL } = useLanguage();
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 600], [0, 120]);
  const imgScale = useTransform(scrollY, [0, 600], [1, 1.12]);

  const callouts = [
    t("hero.callouts.0", "In-House 3D Scan to Fabrication Studio"),
    t("hero.callouts.1", "Clinical Partnerships with Top Hospitals"),
    t("hero.callouts.2", "Custom Pediatric & Adult Orthotics"),
  ];

  useEffect(() => {
    const tTimer = setInterval(() => setActive((a) => (a + 1) % callouts.length), 3200);
    return () => clearInterval(tTimer);
  }, [callouts.length]);

  const lines = [
    { text: t("hero.line1", "Transforming") },
    { text: t("hero.line2", "Healthcare —") },
    { pre: t("hero.preB2B", "Join the "), hl: t("hero.hlB2B", "B2B"), post: t("hero.postB2B", " Revolution.") },
  ];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0B121C]" data-testid="hero">
      {/* Background Video & Fallback Image Container */}
      <motion.div className="absolute inset-0 h-full w-full" style={{ y: imgY, scale: imgScale }}>
        {IMAGES.heroVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={IMAGES.hero}
            className="h-full w-full object-cover object-[center_35%] sm:object-center brightness-90 contrast-[1.05] pointer-events-none select-none"
          >
            {IMAGES.heroVideoMobile && (
              <source src={IMAGES.heroVideoMobile} media="(max-width: 767px)" type="video/mp4" />
            )}
            <source src={IMAGES.heroVideo} media="(min-width: 768px)" type="video/mp4" />
            <source src={IMAGES.heroVideo} type="video/mp4" />
            <img
              src={IMAGES.hero}
              alt="Quantum Medical — Advanced Prosthetics and Orthotics Engineering in Abu Dhabi UAE"
              className="h-full w-full object-cover object-[center_35%] sm:object-center brightness-90 contrast-[1.05]"
            />
          </video>
        ) : (
          <img
            src={IMAGES.hero}
            alt="Quantum Medical — Advanced Prosthetics and Orthotics Engineering in Abu Dhabi UAE"
            decoding="async"
            fetchpriority="high"
            className="h-full w-full object-cover object-center brightness-90 contrast-[1.05]"
          />
        )}
        {/* Mobile & Desktop Responsive Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B121C]/90 via-[#0B121C]/70 to-[#0B121C]/30 sm:from-[#0B121C]/85 sm:via-[#0B121C]/60 sm:to-[#0B121C]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B121C]/80 via-transparent to-[#0B121C]/75 sm:to-[#0B121C]/50" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col justify-center px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] sm:mb-6 sm:text-xs sm:tracking-[0.3em]"
        >
          <span className="h-px w-5 bg-[#0284C7] sm:w-8" /> {t("hero.tag", "Prosthetics & Orthotics · B2B")}
        </motion.p>

        <h1 className="max-w-4xl font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
          {lines.map((line, i) => (
            <span key={i} className="line-mask">
              <motion.span custom={i} variants={lineReveal} initial="hidden" animate="show" className="block">
                {line.hl ? (
                  <span>
                    {line.pre}
                    <span className="text-[#0284C7]">{line.hl}</span>
                    {line.post || ""}
                  </span>
                ) : (
                  line.text
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:mt-7 sm:text-lg"
        >
          {t("hero.desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-6 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4"
        >
          <button
            onClick={() => open("partner")}
            data-testid="hero-partner-btn"
            className="btn-gradient-coral group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-xs font-semibold text-white active:scale-[0.98] shadow-xl shadow-[#0284C7]/35 sm:w-auto sm:px-7 sm:py-4 sm:text-sm cursor-pointer"
          >
            {t("hero.partnerBtn", "Partner With Us")}
            <ArrowUpRight size={17} className={`transition-transform ${isRTL ? "group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 rotate-270" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`} />
          </button>
          <button
            onClick={() => router.push("/products")}
            data-testid="hero-products-btn"
            className="flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 font-display text-xs font-semibold text-white transition-all hover:bg-white/20 active:scale-[0.98] backdrop-blur-xl sm:w-auto sm:px-7 sm:py-4 sm:text-sm shadow-md cursor-pointer"
          >
            {t("hero.exploreBtn", "Explore Devices")}
          </button>
        </motion.div>

        {/* Rotating callouts */}
        <div className="mt-8 max-w-2xl sm:mt-14">
          <div className="flex gap-2">
            {callouts.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-[#0284C7] sm:w-10" : "w-4 bg-white/30 sm:w-5"}`}
              />
            ))}
          </div>
          <div className="relative mt-3 h-14 sm:mt-4 sm:h-14">
            {callouts.map((c, i) => {
              const Icon = calloutIcons[i];
              return (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center gap-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: i === active ? 1 : 0, y: i === active ? 0 : -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#0284C7] backdrop-blur-md shadow-sm sm:h-10 sm:w-10">
                    <Icon size={18} />
                  </span>
                  <span className="font-display text-xs font-semibold text-white/95 sm:text-sm">{c}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
