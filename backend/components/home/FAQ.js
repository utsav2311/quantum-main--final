"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Reveal, TextReveal, TiltCard } from "@/components/Reveal";
import { FAQS } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Plus, Minus, PhoneCall, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const { open } = useLeadModal();
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);

  // Parallax Scroll Effect on Ambient Background Layers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxGlow1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const parallaxGlow2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/25 to-slate-50 py-24 sm:py-32"
      data-testid="faq"
    >
      {/* Layered Background Spheres with Parallax Motion */}
      <motion.div
        style={{ y: parallaxGlow1 }}
        className="pointer-events-none absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-[#0B4D95]/15 via-[#FF6B4A]/10 to-transparent blur-3xl opacity-70"
      />
      <motion.div
        style={{ y: parallaxGlow2 }}
        className="pointer-events-none absolute -right-20 bottom-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#FF6B4A]/15 via-[#0B4D95]/10 to-transparent blur-3xl opacity-70"
      />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6B4A]/30 bg-[#FF6B4A]/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#FF6B4A] backdrop-blur-md">
              <HelpCircle size={14} className="text-[#FF6B4A]" /> Questions & Answers
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold text-[#0B121C] sm:text-5xl lg:text-6xl tracking-tight">
              <TextReveal text="Questions, answered." />
            </h2>
            <p className="mt-3 max-w-lg text-base text-slate-600 leading-relaxed">
              Everything you need to know about our clinical assessments, custom fabrication, and hospital partnership models.
            </p>
          </div>
        </Reveal>

        {/* Interactive Glassmorphism Accordion List */}
        <div className="mt-14 space-y-4" data-testid="faq-accordion">
          {FAQS.map((f, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <TiltCard tiltMax={6} className="w-full">
                  <motion.div
                    initial={false}
                    animate={{
                      borderColor: isOpen ? "#FF6B4A" : "rgba(255, 255, 255, 0.8)",
                    }}
                    className={`group overflow-hidden rounded-2xl border bg-white/75 backdrop-blur-xl transition-all duration-300 ${
                      isOpen
                        ? "shadow-xl shadow-[#FF6B4A]/10 border-l-4 border-l-[#FF6B4A] bg-white/90"
                        : "hover:border-[#FF6B4A]/40 hover:bg-white/85 hover:shadow-lg"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      data-testid={`faq-trigger-${i}`}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-all duration-300 ${
                            isOpen
                              ? "bg-gradient-to-br from-[#FF6B4A] to-[#e8532f] text-white shadow-md shadow-[#FF6B4A]/30"
                              : "bg-slate-100 text-[#0B121C] group-hover:bg-[#FF6B4A]/10 group-hover:text-[#FF6B4A]"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-lg font-bold transition-colors duration-300 ${
                            isOpen ? "text-[#FF6B4A]" : "text-[#0B121C] group-hover:text-[#FF6B4A]"
                          }`}
                        >
                          {f.q}
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? "bg-gradient-to-br from-[#FF6B4A] to-[#e8532f] text-white shadow-sm"
                            : "bg-slate-100 text-[#4A5568] group-hover:bg-[#FF6B4A]/10 group-hover:text-[#FF6B4A]"
                        }`}
                      >
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        >
                          <div className="border-t border-slate-100/80 px-6 pb-6 pt-4">
                            <p className="text-[15px] leading-relaxed text-slate-600">{f.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {/* Layered Glassmorphism CTA Box */}
        <Reveal delay={0.3}>
          <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0B121C] via-[#0D1929] to-[#0B121C] p-8 text-center sm:p-12 border border-white/15 shadow-2xl">
            {/* Ambient Inner Glows */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#FF6B4A]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#0B4D95]/35 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs font-medium text-[#FF6B4A] border border-white/15 backdrop-blur-md">
                <Sparkles size={13} /> Direct Support
              </span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">Still have questions?</h3>
              <p className="mt-2 max-w-md text-sm text-white/80 sm:text-base">
                Book a consultation call with our clinical team and we'll guide you through custom specifications.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => open("consultation")}
                data-testid="faq-schedule-btn"
                className="btn-gradient-coral mt-6 flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-semibold text-white shadow-xl shadow-[#FF6B4A]/30"
              >
                <PhoneCall size={17} /> Schedule a Call
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="gradient-divider mt-24 mx-auto max-w-7xl" />
    </section>
  );
}
