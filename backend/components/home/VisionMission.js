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
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8" data-testid="vision-mission">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {blocks.map((b, i) => (
          <Reveal key={b.no} delay={i * 0.1}>
            <div className="group relative h-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white">
              <div className="relative h-52 overflow-hidden">
                <img src={b.img} alt={b.tag} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B121C]/70 to-transparent" />

                <span className="absolute left-6 top-6 font-mono text-sm text-white/80">{b.no}</span>
                <div className="absolute bottom-5 left-6 flex items-center gap-2 text-white">
                  <b.icon size={18} className="text-[#FF6B4A]" />
                  <span className="font-display text-sm font-semibold uppercase tracking-widest">{b.tag}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold leading-tight text-[#0B121C]">{b.title}</h3>
                <p className="mt-4 leading-relaxed text-[#4A5568]">{b.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
