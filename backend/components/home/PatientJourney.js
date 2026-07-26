"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  CalendarCheck,
  Stethoscope,
  Scan,
  Printer,
  SlidersHorizontal,
  HeartPulse,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

const STEPS = [
  {
    num: "01",
    title: "Book Consultation",
    icon: CalendarCheck,
    desc: "Schedule your initial clinical consultation with our Prosthetics & Orthotics specialists online, via WhatsApp, or phone.",
    tag: "Getting Started",
    highlight: "Book in under 2 minutes",
    cta: true,
  },
  {
    num: "02",
    title: "Assessment",
    icon: Stethoscope,
    desc: "In-depth physical evaluation, computerized GAIT analysis, posture alignment, and clinical prescription tailored to your lifestyle.",
    tag: "Clinical Evaluation",
    highlight: "GAIT & posture analysis",
  },
  {
    num: "03",
    title: "3D Scanning",
    icon: Scan,
    desc: "Fast, non-contact sub-millimeter 3D volumetric scanning of your anatomy — replacing uncomfortable traditional plaster casting.",
    tag: "Digital Capture",
    highlight: "Sub-millimeter accuracy",
  },
  {
    num: "04",
    title: "Manufacturing",
    icon: Printer,
    desc: "In-house CAD/CAM engineering and industrial 3D printing using carbon composites and biocompatible medical-grade polymers.",
    tag: "Precision C-Fab",
    highlight: "In-house 3D printing",
  },
  {
    num: "05",
    title: "Fitting",
    icon: SlidersHorizontal,
    desc: "Precision trial fitting session with real-time pressure distribution tuning and anatomical alignment verification for total comfort.",
    tag: "Fit Verification",
    highlight: "Pressure-mapped tuning",
  },
  {
    num: "06",
    title: "Rehabilitation",
    icon: HeartPulse,
    desc: "Comprehensive gait retraining, milestone tracking, fit guarantee, and continuous long-term clinical care.",
    tag: "Long-Term Mobility",
    highlight: "Continuous care & adjustments",
  },
];

export default function PatientJourney() {
  const containerRef = useRef(null);
  const { open } = useLeadModal();

  // Scroll Progress for glowing connector line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
      data-testid="patient-journey"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold"
        >
          End-to-End Care Pathway
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 font-display text-3xl font-extrabold text-[#0B121C] sm:text-5xl lg:text-6xl tracking-tight"
        >
          Your Clinical <span className="text-[#FF6B4A]">Patient Journey</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed"
        >
          From your first clinical consultation to full mobility restoration — experience our seamless 6-step digital healthcare process.
        </motion.p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative">
        {/* Central Vertical Connector Line (Desktop) */}
        <div className="absolute left-1/2 top-4 bottom-4 hidden -translate-x-1/2 w-1 bg-slate-200 lg:block rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#FF6B4A] via-[#0B4D95] to-[#FF6B4A] rounded-full shadow-[0_0_12px_rgba(255,107,74,0.6)]"
          />
        </div>

        {/* Left Vertical Line (Mobile/Tablet) */}
        <div className="absolute left-6 top-4 bottom-4 block w-1 bg-slate-200 lg:hidden rounded-full overflow-hidden">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-[#FF6B4A] via-[#0B4D95] to-[#FF6B4A] rounded-full shadow-[0_0_12px_rgba(255,107,74,0.6)]"
          />
        </div>

        {/* Timeline Steps */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isEven = idx % 2 === 0;

            return (
              <div key={step.num} className="relative">
                {/* Step Item Grid */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                  {/* Left Column (Desktop) */}
                  <div
                    className={`pl-14 lg:pl-0 ${
                      isEven ? "lg:text-right lg:pr-12" : "lg:order-2 lg:text-left lg:pl-12"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 35, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:border-[#FF6B4A]/40 hover:shadow-xl hover:shadow-[#FF6B4A]/5"
                    >
                      {/* Step Header Badge */}
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isEven ? "lg:justify-end" : "justify-start"
                        }`}
                      >
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FF6B4A] bg-[#FF6B4A]/10 px-3 py-1 rounded-full">
                          {step.tag}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          STEP {step.num}
                        </span>
                      </div>

                      {/* Title & Icon */}
                      <div
                        className={`flex items-center gap-3 ${
                          isEven ? "lg:flex-row-reverse" : "flex-row"
                        }`}
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0B121C] text-white transition-transform group-hover:scale-110 group-hover:bg-[#FF6B4A]">
                          <Icon size={22} />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-[#0B121C] sm:text-3xl">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>

                      {/* Highlight Pill */}
                      <div
                        className={`mt-5 flex items-center gap-2 text-xs font-semibold text-slate-700 ${
                          isEven ? "lg:justify-end" : "justify-start"
                        }`}
                      >
                        <Sparkles size={14} className="text-[#FF6B4A]" />
                        <span>{step.highlight}</span>
                      </div>

                      {/* Interactive Action Button for Consultation */}
                      {step.cta && (
                        <div
                          className={`mt-6 flex ${
                            isEven ? "lg:justify-end" : "justify-start"
                          }`}
                        >
                          <button
                            onClick={() => open("general")}
                            data-testid="journey-book-btn"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF6B4A] px-6 py-3 font-display text-xs font-semibold text-white transition-all hover:bg-[#e8532f] active:scale-95 shadow-md shadow-[#FF6B4A]/25"
                          >
                            Book Your Consultation Now
                          </button>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty Opposite Column for Desktop Alignment */}
                  <div
                    className={`hidden lg:block ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  />
                </div>

                {/* Central Circle Node (Desktop) */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[#0B121C] text-white font-mono text-sm font-bold shadow-md transition-colors duration-300 group-hover:bg-[#FF6B4A]">
                    {step.num}
                  </div>
                </motion.div>

                {/* Mobile Circle Node */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-6 top-8 -translate-x-1/2 lg:hidden flex items-center justify-center"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-[#FF6B4A] text-white font-mono text-xs font-bold shadow-md">
                    {step.num}
                  </div>
                </motion.div>

                {/* Animated Down Arrow Connector between steps */}
                {idx < STEPS.length - 1 && (
                  <div className="relative my-4 flex justify-center lg:justify-center">
                    <motion.div
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-[#FF6B4A] shadow-inner"
                    >
                      <ArrowDown size={16} />
                    </motion.div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
