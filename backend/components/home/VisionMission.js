"use client";

import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site";
import { Target, Compass } from "lucide-react";

export default function VisionMission() {
  const blocks = [
    {
      no: "01", tag: "Our Vision", icon: Compass, img: IMAGES.tools,
      title: "A world where every patient moves without limits.",
      body: "We envision prosthetics and orthotics as precision-engineered instruments — as advanced as the human body they serve. By fusing clinical expertise with digital manufacturing, we set a new standard for what custom devices can achieve.",
    },
    {
      no: "02", tag: "Our Mission", icon: Target, img: IMAGES.printing,
      title: "Deliver outcome-driven devices, faster and more precisely.",
      body: "We partner with hospitals, clinics and rehab centres to deliver truly custom devices through gait analysis, CAD/CAM design and in-house 3D printing — measured not by units shipped, but by patient outcomes restored.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" data-testid="vision-mission">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.no} delay={i * 0.1}>
            <div className="group flex flex-col relative h-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm transition-all hover:shadow-md">
              {/* Content First on Mobile */}
              <div className="p-6 sm:p-8 order-1 sm:order-2">
                <div className="flex items-center gap-2 mb-3">
                  <b.icon size={18} className="text-[#FF6B4A]" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#0B4D95]">{b.tag}</span>
                  <span className="ml-auto font-mono text-xs text-[#94A3B8]">{b.no}</span>
                </div>
                <h3 className="font-display text-xl font-bold leading-tight text-[#0B121C] sm:text-2xl">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4A5568] sm:text-base">{b.body}</p>
              </div>

              {/* Image After Content on Mobile */}
              <div className="relative h-48 sm:h-52 overflow-hidden order-2 sm:order-1">
                <img
                  src={b.img}
                  alt={b.tag}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C]/40 to-transparent" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
