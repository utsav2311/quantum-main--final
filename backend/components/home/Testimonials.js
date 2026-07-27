"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Award, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal, TextReveal } from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/site";

const CLINICAL_STATS = [
  { val: "99.4%", label: "Clinical Fit Satisfaction" },
  { val: "5-10 Days", label: "Average Delivery Time" },
  { val: "100+", label: "Partner Hospitals & Clinics" },
  { val: "100%", label: "In-House Digital Fabrication" },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const containerRef = useRef(null);
  const count = TESTIMONIALS.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxTop = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const parallaxBottom = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const navigate = useCallback((dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  const current = TESTIMONIALS[index];

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1929] to-[#0B121C] py-20 sm:py-28" data-testid="testimonials">
      {/* Background Ambient Glow Effects with Parallax */}
      <motion.div style={{ y: parallaxTop }} className="pointer-events-none absolute -top-40 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#0B4D95]/35 via-[#0284C7]/15 to-transparent blur-3xl opacity-60" />
      <motion.div style={{ y: parallaxBottom }} className="pointer-events-none absolute -bottom-40 right-10 h-[450px] w-[450px] rounded-full bg-[#0284C7]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#0284C7]">
              <Sparkles size={13} /> Verified Clinical Partners
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Trusted by Surgeons &amp; Rehab Leads.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              See how our digital CAD/CAM workflow and in-house 3D fabrication empower leading hospital teams across the region.
            </p>
          </div>
        </Reveal>



        {/* Testimonial Spotlight Showcase */}
        <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12">
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12"
              data-testid="testimonial-card"
            >
              {/* Left Column: Clinician Profile & Verified Badges */}
              <div className="flex flex-col items-center text-center lg:col-span-4 lg:items-start lg:text-left">
                <div className="flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3.5 py-1 text-xs font-mono font-semibold text-[#25D366]">
                  <CheckCircle2 size={14} /> Verified Partner
                </div>

                <h3 className="mt-3 font-display text-xl font-bold text-white sm:text-2xl">{current.name}</h3>
                <p className="text-sm font-semibold text-[#0284C7]">{current.role}</p>

                <div className="mt-3 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
                  <Building2 size={13} className="text-[#0B4D95]" />
                  <span className="truncate">{current.facility}</span>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} className="fill-[#0284C7] text-[#0284C7]" />
                  ))}
                  <span className="ml-2 font-mono text-xs font-bold text-white/90">5.0 / 5.0</span>
                </div>
              </div>

              {/* Right Column: Quote & Outcome Impact Metric */}
              <div className="relative flex flex-col justify-between border-t border-white/10 pt-6 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <Quote size={48} className="absolute -top-3 right-0 text-white/10 sm:text-white/15" />

                {/* Clinical Impact Metric Tag */}
                <div className="mb-4 inline-flex items-center gap-2 self-start rounded-full border border-[#0284C7]/30 bg-[#0284C7]/15 px-3.5 py-1.5 font-mono text-xs font-semibold text-[#0284C7]">
                  <Award size={14} /> Measured Impact: {current.metric}
                </div>

                {/* Quote Body */}
                <blockquote className="font-display text-lg font-medium leading-relaxed text-white/90 sm:text-2xl lg:text-2xl">
                  “{current.quote}”
                </blockquote>

                {/* Discipline Tag */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-mono text-white/60">
                  <span>Specialty: <strong className="text-white/90">{current.discipline}</strong></span>
                  <span className="flex items-center gap-1 text-[#0284C7]"><ShieldCheck size={14} /> Certified Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
            
            {/* Direct Clinician Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setDirection(idx > index ? 1 : -1);
                    setIndex(idx);
                  }}
                  className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-semibold transition-all ${
                    idx === index
                      ? "bg-[#0284C7] text-white shadow-lg shadow-[#0284C7]/30"
                      : "border border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Prev / Next Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                data-testid="testimonial-prev"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#0284C7] hover:bg-[#0284C7] hover:text-white"
                aria-label="Previous clinical review"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => navigate(1)}
                data-testid="testimonial-next"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-all hover:border-[#0284C7] hover:bg-[#0284C7] hover:text-white"
                aria-label="Next clinical review"
              >
                <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
