"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Sparkles, Activity, ShieldCheck } from "lucide-react";

const ADULT_SOLUTIONS = [
  {
    id: "back-braces",
    title: "Back Braces",
    subtitle: "Spinal Support",
    category: "Orthotics",
    desc: "Precision spinal orthoses providing targeted stabilization, posture realignment, and post-operative protection.",
    highlights: ["3D Scan Alignment", "Radiolucent Shells"],
    img: "/spine-back-braces.png",
    to: "/spine-back-braces",
  },
  {
    id: "silicone-restoration",
    title: "Silicone Restoration",
    subtitle: "Anatomic Cosmesis",
    category: "Prosthetics",
    desc: "Custom-molded aesthetic silicone prosthetics matching patient skin tone, texture, and individual anatomy.",
    highlights: ["Skin-Tone Matched", "Flexible Silicone"],
    img: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=format&fit=crop&w=800&q=80",
    to: "/silicone-restoration",
  },
  {
    id: "lower-limb-prosthetics",
    title: "Lower Limb Prosthetics",
    subtitle: "Microprocessor Knees",
    category: "Prosthetics",
    desc: "Advanced microprocessor knees and energy-storing carbon fiber feet engineered for active adult gait.",
    highlights: ["Microprocessor Knee", "Carbon Energy Return"],
    img: "/lower-limb-prosthetics.png",
    to: "/lower-limb-prosthetics",
  },
  {
    id: "upper-limb-orthosis",
    title: "Upper Limb Orthosis",
    subtitle: "Arm & Shoulder",
    category: "Orthotics",
    desc: "Bionic and mechanical arm orthoses restoring hand grip, wrist stability, and shoulder function.",
    highlights: ["Myoelectric Sensors", "Precision Grip Control"],
    img: "/upper-limb-prosthetics.png",
    to: "/upper-limb-orthotics",
  },
  {
    id: "hip-braces",
    title: "Hip Braces",
    subtitle: "Joint Stabilization",
    category: "Orthotics",
    desc: "Dynamic hip joint stabilization reducing joint strain, supporting post-surgical recovery, and aiding OA management.",
    highlights: ["Range of Motion Lock", "Lightweight Frame"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    to: "/lower-limb-orthotics#hip-braces",
  },
  {
    id: "knee-braces",
    title: "Knee Braces",
    subtitle: "Ligament & OA Support",
    category: "Orthotics",
    desc: "Custom OA and ligament braces providing unweighting relief, tracking correction, and high stability.",
    highlights: ["OA Unloader Tech", "Custom Molded Fit"],
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    to: "/lower-limb-orthotics#knee-braces",
  },
  {
    id: "chest-braces",
    title: "Chest Braces",
    subtitle: "Thoracic Correction",
    category: "Orthotics",
    desc: "Thoracic correction braces engineered for chest wall deformities and post-trauma spinal support.",
    highlights: ["Pectus Correction", "Low-Profile Design"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    to: "/spine-back-braces#chest",
  },
  {
    id: "custom-insoles",
    title: "Custom Insoles",
    subtitle: "GAIT 3D Footwear",
    category: "Foot Orthotics",
    desc: "3D GAIT-scanned orthotic insoles designed for biomechanical foot correction and arch distribution.",
    highlights: ["3D Pressure Mapping", "Multi-Density Foam"],
    img: "/custom-insoles.png",
    to: "/custom-orthotic-insoles-footwear",
  },
  {
    id: "socket-liners",
    title: "Socket & Liners",
    subtitle: "Vacuum Suspension",
    category: "Prosthetics",
    desc: "CAD/CAM customized vacuum sockets and medical-grade silicone liners for total contact comfort.",
    highlights: ["Vacuum Lock System", "Pressure Relief Zones"],
    img: "/sockets-liners.png",
    to: "/sockets-liners",
  },
  {
    id: "custom-seating",
    title: "Custom Seating",
    subtitle: "Postural Cushions",
    category: "Mobility",
    desc: "Ergonomic 3D-molded postural seating cushions preventing pressure sores and enhancing alignment.",
    highlights: ["Pressure Relief Matrix", "CAD/CAM Carved"],
    img: "https://images.unsplash.com/photo-1772566022500-353de883e9e4?auto=format&fit=crop&w=800&q=80",
    to: "/custom-seating",
  },
];

export default function AdultsGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1B2D] to-[#0B121C] py-24 text-white" data-testid="adults-section">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(11,77,149,0.35),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0284C7]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#0B4D95]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Activity size={13} /> Comprehensive Portfolio
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              For <span className="text-[#0284C7]">Adults</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/80 sm:text-2xl">
              Mobility Solutions
            </p>
            <p className="mt-2 text-xs font-mono text-white/50">Hover over any card to flip — Click to view device details</p>
          </div>
        </Reveal>

        {/* 3D Flip Card Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence>
            {ADULT_SOLUTIONS.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.02 }}
                className="w-full"
              >
                <Link
                  href={item.to}
                  data-testid={`adult-card-${item.id}`}
                  className="group block [perspective:1000px] relative h-64 w-full cursor-pointer"
                >
                  <div
                    className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-in-out transform-3d group-hover:[transform:rotateY(180deg)] group-hover:[--webkit-transform:rotateY(180deg)] shadow-md group-hover:shadow-xl group-hover:shadow-[#0284C7]/20"
                    style={{ transformStyle: "preserve-3d", WebkitTransformStyle: "preserve-3d" }}
                  >
                    
                    {/* FRONT SIDE */}
                    <div
                      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#121B28] p-4 backface-hidden transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none"
                      style={{ WebkitBackfaceVisibility: "hidden", backfaceVisibility: "hidden" }}
                    >
                      {/* Background Image */}
                      <div className="absolute inset-0 overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C] via-[#0B121C]/50 to-transparent" />
                      </div>

                      {/* Top Badge & Hint */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="rounded-full border border-white/15 bg-[#0B121C]/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/90 backdrop-blur-md">
                          {item.category}
                        </span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white/70 backdrop-blur-md">
                          <Sparkles size={11} className="text-[#0284C7]" />
                        </span>
                      </div>

                      {/* Bottom Title Overlay */}
                      <div className="relative z-10">
                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#0284C7]">
                          {item.subtitle}
                        </p>
                        <h3 className="font-display text-base font-bold tracking-tight text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 flex items-center gap-1 text-[10px] font-mono text-white/60">
                          <span>Hover to flip</span> →
                        </p>
                      </div>
                    </div>

                    {/* BACK SIDE (Flipped) */}
                    <div
                      className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0284C7]/50 bg-[#0B121C] p-4 backface-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-xl shadow-[#0284C7]/10"
                      style={{
                        WebkitBackfaceVisibility: "hidden",
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        WebkitTransform: "rotateY(180deg)",
                      }}
                    >
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0284C7]">
                            {item.category}
                          </span>
                          <span className="font-mono text-[9px] text-white/50">Clinical Spec</span>
                        </div>

                        <h4 className="mt-2 font-display text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/75">
                          {item.desc}
                        </p>

                        <div className="mt-2 space-y-1">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-1.5 text-[10px] font-medium text-white/80">
                              <ShieldCheck size={12} className="text-[#0284C7]" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <span className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#0284C7] py-2 font-display text-[11px] font-semibold text-white shadow-md transition-colors group-hover:bg-[#0052CC]">
                          Explore Device <ArrowUpRight size={13} />
                        </span>
                      </div>
                    </div>

                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
