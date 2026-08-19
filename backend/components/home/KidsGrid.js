"use client";

import { Reveal } from "@/components/Reveal";
import { Baby } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

const KIDS_SOLUTIONS = [
  {
    id: "scoliosis-bracing",
    title: "Scoliosis Bracing",
    subtitle: "Custom 3D Correction",
    category: "Spinal Care",
    desc: "Ultra-lightweight 3D CAD/CAM scoliosis braces for progressive spinal curve correction in growing children.",
    highlights: ["Night & Day Wear", "3D Digital Scan"],
    img: "/scoliosis-bracing.png",
    to: "/scoliosis-bracing",
  },
  {
    id: "cranial-helmet",
    title: "Cranial Helmet",
    subtitle: "Remolding Orthoses",
    category: "Head & Skull",
    desc: "Gentle remolding cranial orthoses correcting infant plagiocephaly with continuous digital progress tracking.",
    highlights: ["Infant-Safe Polymer", "Digital Tracking"],
    img: "/cranial-helmet.png",
    to: "/cranial-orthoses",
  },
  {
    id: "pediatric-prosthetics",
    title: "Pediatric Prosthetics",
    subtitle: "Adaptive Bionic",
    category: "Prosthetics",
    desc: "Playful, durable bionic & lower-limb prosthetics designed for child activity and rapid growth adjustments.",
    highlights: ["Growth Expansion", "Ultra-Light Carbon"],
    img: "/pediatric-prosthetics.png",
    to: "/pediatric-prosthetics",
  },
  {
    id: "afo-orthosis",
    title: "AFO (Ankle-Foot)",
    subtitle: "Alignment & Gait",
    category: "Lower Limb",
    desc: "Ankle-foot orthoses providing gentle alignment, drop-foot correction, and stability during play.",
    highlights: ["Custom Articulated", "Playful Graphics"],
    img: "/afo-ankle-foot.png",
    imgPosition: "center bottom",
    to: "/lower-limb-orthotics#afo",
  },
  {
    id: "nocturnal-braces",
    title: "Nocturnal Braces",
    subtitle: "Night Correction",
    category: "Spinal Care",
    desc: "Comfortable night-wear scoliosis braces providing high-rigidity corrective alignment during sleep.",
    highlights: ["Over-Corrective Alignment", "Breathable Foam"],
    img: "/nocturnal-braces.png",
    imgFit: "contain",
    imgBg: "#ffffff",
    to: "/scoliosis-bracing#nocturnal",
  },
  {
    id: "pediatric-insoles",
    title: "Pediatric Insoles",
    subtitle: "Heel & Flatfoot",
    category: "Foot Orthotics",
    desc: "Dynamic arch & heel support insoles helping correct pediatric flatfoot and in-toeing gait patterns.",
    highlights: ["Flexible Arch Support", "Multi-Density Core"],
    img: "/custom-insoles.webp",
    to: "/custom-orthotic-insoles-footwear",
  },
  {
    id: "smo-orthosis",
    title: "Supramalleolar (SMO)",
    subtitle: "Ankle & Medial",
    category: "Lower Limb",
    desc: "Flexible ankle control orthoses stabilizing pediatric foot pronation while preserving natural movement.",
    highlights: ["Medial Stabilizer", "Fits Standard Shoes"],
    img: "/supramalleolar-orthosis.png",
    imgFit: "contain",
    imgBg: "#ffffff",
    to: "/lower-limb-orthotics#supramalleolar-orthosis",
  },
  {
    id: "ucbl-orthosis",
    title: "UCBL Foot Orthosis",
    subtitle: "Deep Heel Cup",
    category: "Foot Orthotics",
    desc: "Deep calcanean heel cup orthoses offering rigid triplanar control for severe flexible flatfoot.",
    highlights: ["Triplanar Control", "Rigid Calcanean Cup"],
    img: "/custom-insoles.webp",
    to: "/lower-limb-orthotics#ucbl",
  },
  {
    id: "ctev-boots",
    title: "CTEV Boots & Bars",
    subtitle: "Ponseti Protocol",
    category: "Lower Limb",
    desc: "Ponseti method boots & abduction bars treating clubfoot correction in infants and toddlers.",
    highlights: ["Ponseti Protocol", "Adjustable Abduction"],
    img: "/ctev-boots.png",
    imgFit: "contain",
    imgBg: "#ffffff",
    to: "/lower-limb-orthotics#ctev",
  },
];

export default function KidsGrid() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0B4D95] via-[#083A72] to-[#0B121C] py-24 text-white"
      data-testid="kids-section"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#0284C7]/25 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Baby size={14} /> Pediatric Excellence
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              For <span className="text-[#0284C7]">Kids</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/90 sm:text-2xl">
              Care That Grows With Every Child
            </p>
          </div>
        </Reveal>

        {/* Feature Carousel */}
        <Reveal delay={0.1}>
          <FeatureCarousel features={KIDS_SOLUTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
