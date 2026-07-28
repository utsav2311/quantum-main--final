"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight, Sparkles, Baby, ShieldCheck } from "lucide-react";

const KIDS_SOLUTIONS = [
  {
    id: "scoliosis-bracing",
    title: "Scoliosis Bracing",
    subtitle: "Custom 3D Correction",
    category: "Spinal Care",
    desc: "Ultra-lightweight 3D CAD/CAM scoliosis braces for progressive spinal curve correction in growing children.",
    highlights: ["Night & Day Wear", "3D Digital Scan"],
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    to: "/scoliosis-bracing",
  },
  {
    id: "cranial-helmet",
    title: "Cranial Helmet",
    subtitle: "Remolding Orthoses",
    category: "Head & Skull",
    desc: "Gentle remolding cranial orthoses correcting infant plagiocephaly with continuous digital progress tracking.",
    highlights: ["Infant-Safe Polymer", "Digital Tracking"],
    img: "https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=format&fit=crop&w=800&q=80",
    to: "/cranial-orthoses",
  },
  {
    id: "pediatric-prosthetics",
    title: "Pediatric Prosthetics",
    subtitle: "Adaptive Bionic",
    category: "Prosthetics",
    desc: "Playful, durable bionic & lower-limb prosthetics designed for child activity and rapid growth adjustments.",
    highlights: ["Growth Expansion", "Ultra-Light Carbon"],
    img: "https://images.unsplash.com/photo-1770219287080-9c73532fa878?auto=format&fit=crop&w=800&q=80",
    to: "/pediatric-prosthetics",
  },
  {
    id: "afo-orthosis",
    title: "AFO (Ankle-Foot)",
    subtitle: "Alignment & Gait",
    category: "Lower Limb",
    desc: "Ankle-foot orthoses providing gentle alignment, drop-foot correction, and stability during play.",
    highlights: ["Custom Articulated", "Playful Graphics"],
    img: "/lower-limb-prosthetics.png",
    to: "/lower-limb-orthotics#afo",
  },
  {
    id: "nocturnal-braces",
    title: "Nocturnal Braces",
    subtitle: "Night Correction",
    category: "Spinal Care",
    desc: "Comfortable night-wear scoliosis braces providing high-rigidity corrective alignment during sleep.",
    highlights: ["Over-Corrective Alignment", "Breathable Foam"],
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    to: "/scoliosis-bracing#nocturnal",
  },
  {
    id: "pediatric-insoles",
    title: "Pediatric Insoles",
    subtitle: "Heel & Flatfoot",
    category: "Foot Orthotics",
    desc: "Dynamic arch & heel support insoles helping correct pediatric flatfoot and in-toeing gait patterns.",
    highlights: ["Flexible Arch Support", "Multi-Density Core"],
    img: "/custom-insoles.png",
    to: "/custom-orthotic-insoles-footwear",
  },
  {
    id: "smo-orthosis",
    title: "Supramalleolar (SMO)",
    subtitle: "Ankle & Medial",
    category: "Lower Limb",
    desc: "Flexible ankle control orthoses stabilizing pediatric foot pronation while preserving natural movement.",
    highlights: ["Medial Stabilizer", "Fits Standard Shoes"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    to: "/lower-limb-orthotics#supramalleolar-orthosis",
  },
  {
    id: "ucbl-orthosis",
    title: "UCBL Foot Orthosis",
    subtitle: "Deep Heel Cup",
    category: "Foot Orthotics",
    desc: "Deep calcanean heel cup orthoses offering rigid triplanar control for severe flexible flatfoot.",
    highlights: ["Triplanar Control", "Rigid Calcanean Cup"],
    img: "/sockets-liners.png",
    to: "/lower-limb-orthotics#ucbl",
  },
  {
    id: "ctev-boots",
    title: "CTEV Boots & Bars",
    subtitle: "Ponseti Protocol",
    category: "Lower Limb",
    desc: "Ponseti method boots & abduction bars treating clubfoot correction in infants and toddlers.",
    highlights: ["Ponseti Protocol", "Adjustable Abduction"],
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    to: "/lower-limb-orthotics#ctev",
  },
];

export default function KidsGrid() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B4D95] via-[#083A72] to-[#0B121C] py-24 text-white" data-testid="kids-section">
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#0284C7]/25 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Baby size={14} /> Pediatric Excellence
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              For <span className="text-[#0284C7]">Kids</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/90 sm:text-2xl">
              Care That Grows With Every Child
            </p>
            <p className="mt-2 text-xs font-mono text-white/60">Hover over any card to flip — Click to view device details</p>
          </div>
        </Reveal>

        {/* 3D Flip Card Grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <AnimatePresence>
            {KIDS_SOLUTIONS.map((item, index) => (
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
                  data-testid={`kid-card-${item.id}`}
                  className="group block [perspective:1000px] relative h-64 w-full cursor-pointer"
                >
                  <div className="relative h-full w-full rounded-2xl transition-transform duration-700 ease-in-out preserve-3d group-hover:[transform:rotateY(180deg)] shadow-md group-hover:shadow-xl group-hover:shadow-[#0284C7]/30">
                    
                    {/* FRONT SIDE */}
                    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-white/15 bg-[#083a72] p-4 backface-hidden transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
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
                        <span className="rounded-full border border-white/20 bg-[#0B121C]/80 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/90 backdrop-blur-md">
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
                    <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-[#0284C7]/60 bg-[#083a72] p-4 card-back-flip opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-xl shadow-[#0284C7]/20">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/15 pb-2">
                          <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0284C7]">
                            {item.category}
                          </span>
                          <span className="font-mono text-[9px] text-white/60">Pediatric Spec</span>
                        </div>

                        <h4 className="mt-2 font-display text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-[11px] leading-relaxed text-white/80">
                          {item.desc}
                        </p>

                        <div className="mt-2 space-y-1">
                          {item.highlights.map((h) => (
                            <div key={h} className="flex items-center gap-1.5 text-[10px] font-medium text-white/90">
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
