"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import {
  CalendarCheck,
  Stethoscope,
  Scan,
  Printer,
  SlidersHorizontal,
  HeartPulse,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { useLeadModal } from "@/context/LeadModalContext";

const STEPS = [
  {
    num: "01",
    title: "Book Consultation",
    icon: CalendarCheck,
    tagline: "Getting Started",
    desc: "Schedule your initial clinical consultation with our Prosthetics & Orthotics specialists online, via WhatsApp, or by calling our clinical hub.",
    highlight: "Fast booking in under 2 minutes",
    gradient: "from-orange-500/20 via-rose-500/10 to-transparent",
    accentColor: "#FF6B4A",
    cta: true,
    details: ["Flexible appointment slots", "Virtual or in-clinic options", "Direct specialist review"],
  },
  {
    num: "02",
    title: "Assessment",
    icon: Stethoscope,
    tagline: "Clinical Evaluation",
    desc: "In-depth clinical evaluation including computerized GAIT analysis, posture alignment, muscle testing, and joint mobility diagnostics.",
    highlight: "Computerized GAIT & posture analysis",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#0B4D95",
    details: ["Biomechanics mapping", "Pathology identification", "Custom treatment strategy"],
  },
  {
    num: "03",
    title: "3D Scanning",
    icon: Scan,
    tagline: "Digital Capture",
    desc: "Fast, non-contact sub-millimeter 3D volumetric scanning of your anatomy — eliminating the discomfort of traditional plaster casting.",
    highlight: "Sub-millimeter 3D scanning accuracy",
    gradient: "from-cyan-500/20 via-teal-500/10 to-transparent",
    accentColor: "#06B6D4",
    details: ["100% plaster-free capture", "Sub-millimeter accuracy", "Instant 3D digital model"],
  },
  {
    num: "04",
    title: "Manufacturing",
    icon: Printer,
    tagline: "Precision C-Fab",
    desc: "In-house CAD/CAM digital engineering and industrial 3D printing using carbon composites and biocompatible medical-grade polymers.",
    tag: "Precision C-Fab",
    highlight: "Industrial 3D printing & CAD/CAM",
    gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
    accentColor: "#8B5CF6",
    details: ["Additive 3D manufacturing", "Carbon fiber reinforcement", "Medical-grade polymers"],
  },
  {
    num: "05",
    title: "Fitting",
    icon: SlidersHorizontal,
    tagline: "Fit Verification",
    desc: "Precision trial fitting session with real-time pressure distribution tuning, dynamic alignment checks, and anatomical verification for optimal comfort.",
    highlight: "Pressure-mapped dynamic alignment",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentColor: "#10B981",
    details: ["Real-time pressure mapping", "Dynamic gait tuning", "Anatomical comfort check"],
  },
  {
    num: "06",
    title: "Rehabilitation",
    icon: HeartPulse,
    tagline: "Long-Term Care",
    desc: "Comprehensive gait retraining, mobility milestone tracking, digital file retention for instant adjustments, and continuous long-term care.",
    highlight: "Continuous care & lifetime file retention",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "#F59E0B",
    details: ["Gait retraining guidance", "Lifetime digital file saving", "Same-week fit adjustments"],
  },
];

export default function PatientJourney() {
  const containerRef = useRef(null);
  const { open } = useLeadModal();
  const [activeStep, setActiveStep] = useState(0);

  // Scroll Progress across 350vh sticky track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const stepIndex = Math.min(STEPS.length - 1, Math.floor(v * STEPS.length));
      if (stepIndex !== activeStep) {
        setActiveStep(stepIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeStep]);

  const currentStep = STEPS[activeStep];
  const StepIcon = currentStep.icon;

  return (
    <section
      ref={containerRef}
      className="relative h-[380vh] w-full bg-[#0B121C] text-white"
      data-testid="patient-journey"
    >
      {/* Sticky Fullscreen 3D Stage */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 py-8 sm:px-8 sm:py-12">
        {/* Background Ambient Glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[450px] w-[450px] rounded-full bg-[#FF6B4A]/15 blur-[140px] transition-all duration-700 sm:h-[600px] sm:w-[600px]" />
          <div className="h-[350px] w-[350px] rounded-full bg-[#0B4D95]/20 blur-[130px] transition-all duration-700" />
        </div>

        {/* Top Header Bar */}
        <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#FF6B4A] font-semibold">
              Interactive Patient Care Pathway
            </p>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-4xl">
              Your Clinical <span className="text-[#FF6B4A]">Patient Journey</span>
            </h2>
          </div>

          {/* Overall Scroll Step Indicator */}
          <div className="flex items-center gap-2 self-start sm:self-auto rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="font-mono text-xs font-bold text-[#FF6B4A]">
              STEP {currentStep.num}
            </span>
            <span className="text-white/40">/</span>
            <span className="font-mono text-xs text-white/70">06</span>
            <div className="ml-2 h-1.5 w-20 overflow-hidden rounded-full bg-white/20">
              <motion.div
                className="h-full bg-[#FF6B4A] rounded-full"
                style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main 3D Card Stage Area */}
        <div className="relative z-10 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Left Side: Step Navigation Progress Rail */}
          <div className="hidden lg:col-span-5 lg:flex flex-col space-y-3">
            {STEPS.map((s, idx) => {
              const isActive = idx === activeStep;
              const Icon = s.icon;

              return (
                <button
                  key={s.num}
                  onClick={() => {
                    if (containerRef.current) {
                      const containerTop = containerRef.current.offsetTop;
                      const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
                      const targetScroll = containerTop + (idx / (STEPS.length - 1)) * containerHeight;
                      window.scrollTo({ top: targetScroll, behavior: "smooth" });
                    }
                  }}
                  className={`group relative flex items-center justify-between rounded-2xl p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border border-[#FF6B4A]/50 bg-white/15 shadow-lg shadow-[#FF6B4A]/10 backdrop-blur-xl translate-x-2"
                      : "border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-all ${
                        isActive
                          ? "bg-[#FF6B4A] text-white shadow-md shadow-[#FF6B4A]/30"
                          : "bg-white/10 text-white/70 group-hover:text-white"
                      }`}
                    >
                      {s.num}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-[#FF6B4A]">
                        {s.tagline}
                      </p>
                      <h4 className="font-display text-sm font-bold text-white">
                        {s.title}
                      </h4>
                    </div>
                  </div>

                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      isActive ? "translate-x-1 text-[#FF6B4A]" : "text-white/30 group-hover:text-white/70"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side: 3D Interactive Card Deck */}
          <div className="col-span-1 lg:col-span-7 flex justify-center [perspective:1200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{
                  rotateY: 65,
                  rotateX: 12,
                  z: -180,
                  opacity: 0,
                  scale: 0.88,
                }}
                animate={{
                  rotateY: 0,
                  rotateX: 0,
                  z: 0,
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  rotateY: -65,
                  rotateX: -12,
                  z: -180,
                  opacity: 0,
                  scale: 0.88,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.23, 1, 0.32, 1],
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="group relative w-full max-w-xl rounded-[32px] border border-white/20 bg-gradient-to-br from-white/15 via-white/10 to-white/5 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl"
              >
                {/* 3D Giant Watermark Number */}
                <div className="pointer-events-none absolute right-6 top-4 select-none font-display text-7xl font-black text-white/10 sm:text-9xl">
                  {currentStep.num}
                </div>

                {/* Card Top Tag */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6B4A]/40 bg-[#FF6B4A]/15 px-3.5 py-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#FF6B4A]">
                    <Sparkles size={13} />
                    {currentStep.tagline}
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    PHASE {currentStep.num} OF 06
                  </span>
                </div>

                {/* 3D Icon Box & Title */}
                <div className="relative z-10 mt-6 flex items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FF6B4A] text-white shadow-lg shadow-[#FF6B4A]/40 sm:h-16 sm:w-16"
                  >
                    <StepIcon size={28} />
                  </motion.div>
                  <div>
                    <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                      {currentStep.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70 font-mono">
                      {currentStep.highlight}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-6 text-sm sm:text-base leading-relaxed text-white/85">
                  {currentStep.desc}
                </p>

                {/* Detailed Clinical Bullet Points */}
                <div className="relative z-10 mt-6 space-y-2.5 rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-md">
                  {currentStep.details.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 size={16} className="text-[#FF6B4A] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Area */}
                <div className="relative z-10 mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                  {currentStep.cta ? (
                    <button
                      onClick={() => open("general")}
                      data-testid="3d-journey-book-btn"
                      className="group flex items-center justify-center gap-2 rounded-full bg-[#FF6B4A] px-6 py-3.5 font-display text-xs font-semibold text-white transition-all hover:bg-[#e8532f] active:scale-95 shadow-lg shadow-[#FF6B4A]/30 w-full sm:w-auto"
                    >
                      Book Your Consultation Now
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
                      <span>Scroll to proceed to Step {STEPS[Math.min(5, activeStep + 1)].num}</span>
                    </div>
                  )}

                  {/* Scroll Down Cue */}
                  <div className="flex items-center gap-1.5 text-xs text-white/40 font-mono self-end sm:self-auto">
                    <span>SCROLL TO FLIP</span>
                    <span className="inline-block animate-bounce">↓</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="relative z-10 mx-auto flex items-center gap-2 lg:hidden">
          {STEPS.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => {
                if (containerRef.current) {
                  const containerTop = containerRef.current.offsetTop;
                  const containerHeight = containerRef.current.offsetHeight - window.innerHeight;
                  const targetScroll = containerTop + (idx / (STEPS.length - 1)) * containerHeight;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeStep ? "w-8 bg-[#FF6B4A]" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
