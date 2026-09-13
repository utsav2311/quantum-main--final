"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const AUTO_PLAY_INTERVAL = 3200;
const ITEM_HEIGHT = 65;

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel({ features }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { isRTL } = useLanguage();

  const currentIndex = ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  return (
    <div className="w-full mx-auto">
      <div className="relative overflow-hidden rounded-3xl flex flex-col lg:flex-row min-h-[560px] border border-white/10 bg-[#0B121C]">

        {/* LEFT — Scrolling Label List */}
        <div className={`w-full lg:w-[38%] relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 md:px-10 lg:px-12 py-10 lg:py-0 bg-[#0B4D95]/20 border-b lg:border-b-0 ${isRTL ? "lg:border-l" : "lg:border-r"} border-white/10 min-h-[260px] lg:min-h-full`}>
          {/* top fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B121C] to-transparent z-40 pointer-events-none" />
          {/* bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B121C] to-transparent z-40 pointer-events-none" />

          <div className="relative w-full h-full flex items-center justify-start z-20">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(features.length / 2),
                features.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "100%" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.22,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center justify-start w-full"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500 text-start border w-full max-w-xs cursor-pointer",
                      isActive
                        ? "bg-[#0284C7] text-white border-[#0284C7] shadow-lg shadow-[#0284C7]/30 font-bold"
                        : "bg-transparent text-white/50 border-white/15 hover:border-white/30 hover:text-white/80"
                    )}
                  >
                    {/* category dot */}
                    <span className={cn(
                      "h-2 w-2 rounded-full shrink-0 transition-colors duration-300",
                      isActive ? "bg-white" : "bg-white/30"
                    )} />
                    <span className="font-display text-xs uppercase tracking-wider whitespace-nowrap truncate">
                      {feature.title}
                    </span>
                    {isActive && (
                      <span className="ms-auto font-mono text-[9px] text-white/70 uppercase tracking-wider shrink-0">
                        {feature.category}
                      </span>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Image + Info Card */}
        <div className="flex-1 relative flex items-center justify-center p-6 md:p-10 lg:p-12 overflow-hidden min-h-[380px] lg:min-h-full">
          {/* ambient glow behind image */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_60%_50%,rgba(2,132,199,0.08),transparent)]" />

          {features.map((feature, index) => {
            const isActive = index === currentIndex;
            const isPrev = ((index - currentIndex + features.length) % features.length) === features.length - 1;
            const isNext = ((index - currentIndex + features.length) % features.length) === 1;

            return (
              <motion.div
                key={feature.id}
                initial={false}
                animate={{
                  x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                  scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.75,
                  opacity: isActive ? 1 : isPrev || isNext ? 0.3 : 0,
                  rotate: isPrev ? -2 : isNext ? 2 : 0,
                  zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                }}
                transition={{ type: "spring", stiffness: 240, damping: 26, mass: 0.8 }}
                className="absolute w-full max-w-sm md:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 origin-center"
                style={{ pointerEvents: isActive ? "auto" : "none" }}
              >
                <Link href={feature.to} className="block w-full h-full">
                  {/* Image */}
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className={cn(
                      "w-full h-full transition-all duration-700",
                      feature.imgFit === "contain" ? "object-contain p-4" : "object-cover",
                      isActive ? "grayscale-0 brightness-100" : "grayscale brightness-50"
                    )}
                    style={{
                      backgroundColor: feature.imgBg || "transparent",
                      objectPosition: feature.imgPosition || "center",
                    }}
                  />

                  {/* Title only overlay at bottom */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-x-0 bottom-0 px-6 py-5 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-start"
                      >
                        <h3 className="font-display text-2xl font-bold text-white drop-shadow-lg leading-tight">
                          {feature.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Counter dot */}
                  {isActive && (
                    <div className={`absolute top-5 ${isRTL ? "right-5" : "left-5"} flex items-center gap-2`}>
                      <span className="h-2 w-2 rounded-full bg-[#0284C7] shadow-[0_0_8px_#0284C7]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                        {currentIndex + 1} / {features.length}
                      </span>
                    </div>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
