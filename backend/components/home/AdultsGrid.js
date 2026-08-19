"use client";

import { Reveal } from "@/components/Reveal";
import { Activity } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";

const ADULT_SOLUTIONS = [
  {
    id: "back-braces",
    title: "Back Braces",
    subtitle: "Spinal Support",
    category: "Orthotics",
    desc: "Precision spinal orthoses providing targeted stabilization, posture realignment, and post-operative protection.",
    highlights: ["3D Scan Alignment", "Radiolucent Shells"],
    img: "/spine-back-braces.webp",
    to: "/spine-back-braces",
  },
  {
    id: "silicone-restoration",
    title: "Silicone Restoration",
    subtitle: "Anatomic Cosmesis",
    category: "Prosthetics",
    desc: "Custom-molded aesthetic silicone prosthetics matching patient skin tone, texture, and individual anatomy.",
    highlights: ["Skin-Tone Matched", "Flexible Silicone"],
    img: "/silicone-restoration.webp",
    to: "/silicone-restoration",
  },
  {
    id: "lower-limb-prosthetics",
    title: "Lower Limb Prosthetics",
    subtitle: "Microprocessor Knees",
    category: "Prosthetics",
    desc: "Advanced microprocessor knees and energy-storing carbon fiber feet engineered for active adult gait.",
    highlights: ["Microprocessor Knee", "Carbon Energy Return"],
    img: "/lower-limb-prosthetics.webp",
    to: "/lower-limb-prosthetics",
  },
  {
    id: "upper-limb-orthosis",
    title: "Upper Limb Orthosis",
    subtitle: "Arm & Shoulder",
    category: "Orthotics",
    desc: "Bionic and mechanical arm orthoses restoring hand grip, wrist stability, and shoulder function.",
    highlights: ["Myoelectric Sensors", "Precision Grip Control"],
    img: "/upper-limb-prosthetics.webp",
    to: "/upper-limb-orthotics",
  },
  {
    id: "hip-braces",
    title: "Hip Braces",
    subtitle: "Joint Stabilization",
    category: "Orthotics",
    desc: "Dynamic hip joint stabilization reducing joint strain, supporting post-surgical recovery, and aiding OA management.",
    highlights: ["Range of Motion Lock", "Lightweight Frame"],
    img: "/hip-braces.webp",
    to: "/lower-limb-orthotics#hip-braces",
  },
  {
    id: "knee-braces",
    title: "Knee Braces",
    subtitle: "Ligament & OA Support",
    category: "Orthotics",
    desc: "Custom OA and ligament braces providing unweighting relief, tracking correction, and high stability.",
    highlights: ["OA Unloader Tech", "Custom Molded Fit"],
    img: "/knee-braces.webp",
    to: "/lower-limb-orthotics#knee-braces",
  },
  {
    id: "chest-braces",
    title: "Chest Braces",
    subtitle: "Thoracic Correction",
    category: "Orthotics",
    desc: "Thoracic correction braces engineered for chest wall deformities and post-trauma spinal support.",
    highlights: ["Pectus Correction", "Low-Profile Design"],
    img: "/chest-braces.webp",
    to: "/spine-back-braces#chest",
  },
  {
    id: "custom-insoles",
    title: "Custom Insoles",
    subtitle: "GAIT 3D Footwear",
    category: "Foot Orthotics",
    desc: "3D GAIT-scanned orthotic insoles designed for biomechanical foot correction and arch distribution.",
    highlights: ["3D Pressure Mapping", "Multi-Density Foam"],
    img: "/custom-insoles.webp",
    to: "/custom-orthotic-insoles-footwear",
  },
  {
    id: "socket-liners",
    title: "Socket & Liners",
    subtitle: "Vacuum Suspension",
    category: "Prosthetics",
    desc: "CAD/CAM customized vacuum sockets and medical-grade silicone liners for total contact comfort.",
    highlights: ["Vacuum Lock System", "Pressure Relief Zones"],
    img: "/sockets-liners.webp",
    to: "/sockets-liners",
  },
  {
    id: "custom-seating",
    title: "Custom Seating",
    subtitle: "Postural Cushions",
    category: "Mobility",
    desc: "Ergonomic 3D-molded postural seating cushions preventing pressure sores and enhancing alignment.",
    highlights: ["Pressure Relief Matrix", "CAD/CAM Carved"],
    img: "/images/3d_printing.webp",
    to: "/custom-seating",
  },
];

export default function AdultsGrid() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1B2D] to-[#0B121C] py-24 text-white"
      data-testid="adults-section"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(11,77,149,0.35),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0284C7]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#0B4D95]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Activity size={13} /> Comprehensive Portfolio
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              For <span className="text-[#0284C7]">Adults</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/80 sm:text-2xl">
              Mobility Solutions
            </p>
          </div>
        </Reveal>

        {/* Feature Carousel */}
        <Reveal delay={0.1}>
          <FeatureCarousel features={ADULT_SOLUTIONS} />
        </Reveal>
      </div>
    </section>
  );
}
