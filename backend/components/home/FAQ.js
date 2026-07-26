"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FAQS } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Plus, Minus, PhoneCall, HelpCircle, Sparkles } from "lucide-react";

export default function FAQ() {
  const { open } = useLeadModal();
  const [openIndex, setOpenIndex] = useState(null); // Collapsed by default

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="relative mx-auto max-w-4xl px-5 py-24 lg:px-8" data-testid="faq">
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0B4D95]/10 via-[#FF6B4A]/5 to-transparent blur-3xl opacity-60" />

      <Reveal>
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0B4D95]/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#0B4D95]">
            <HelpCircle size={14} className="text-[#0B4D95]" /> FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold text-[#0B121C] sm:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-3 max-w-lg text-base text-[#4A5568]">
            Everything you need to know about our clinical assessments, custom fabrication, and partnership models.
          </p>
        </div>
      </Reveal>

      {/* Interactive Animated Accordion List */}
      <div className="mt-12 space-y-4" data-testid="faq-accordion">
        {FAQS.map((f, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={i} delay={i * 0.05}>
              <motion.div
                initial={false}
                animate={{
                  borderColor: isOpen ? "#0B4D95" : "#E2E8F0",
                  backgroundColor: isOpen ? "#FFFFFF" : "#FFFFFF",
                }}
                className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen ? "shadow-lg shadow-[#0B4D95]/5 border-l-4 border-l-[#0B4D95]" : "hover:border-[#0B4D95]/40 hover:shadow-md"
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
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#0B4D95] text-white"
                          : "bg-[#F8F9FA] text-[#0B4D95] group-hover:bg-[#0B4D95]/10"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-lg font-bold transition-colors duration-300 ${
                        isOpen ? "text-[#0B4D95]" : "text-[#0B121C] group-hover:text-[#0B4D95]"
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
                        ? "bg-[#FF6B4A] text-white"
                        : "bg-[#F8F9FA] text-[#4A5568] group-hover:bg-[#0B4D95]/10 group-hover:text-[#0B4D95]"
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
                      <div className="border-t border-[#E2E8F0]/60 px-6 pb-6 pt-4">
                        <p className="text-[15px] leading-relaxed text-[#4A5568]">{f.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Reveal>
          );
        })}
      </div>

      {/* CTA Box with Hover Pulse */}
      <Reveal delay={0.3}>
        <div className="relative mt-14 overflow-hidden rounded-3xl bg-[#0B121C] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#FF6B4A]/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#0B4D95]/30 blur-2xl" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 font-mono text-xs font-medium text-[#FF6B4A]">
              <Sparkles size={13} /> Direct Support
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">Still have questions?</h3>
            <p className="mt-2 max-w-md text-sm text-white/70 sm:text-base">
              Book a consultation call with our clinical team and we'll guide you through custom specifications.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => open("consultation")}
              data-testid="faq-schedule-btn"
              className="mt-6 flex items-center gap-2 rounded-full bg-[#FF6B4A] px-8 py-4 font-display text-sm font-semibold text-white shadow-lg shadow-[#FF6B4A]/25 transition-all hover:bg-[#e8532f]"
            >
              <PhoneCall size={17} /> Schedule a Call
            </motion.button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
