"use client";

import Marquee from "react-fast-marquee";


const ITEMS = ["Moves You Forward", "Clinical Precision", "Tailored P&O Solutions", "3D Printed", "CAD/CAM Designed", "GAIT Analysis", "In-House Fabrication"];

export default function EditorialMarquee({ dark = false }) {
  return (
    <div className={`overflow-hidden w-full max-w-full border-y ${dark ? "border-white/10 bg-[#0B121C] text-white" : "border-[#E2E8F0] bg-white text-[#0B121C]"} py-6`} data-testid="marquee">
      <Marquee speed={38} gradient={false} autoFill>
        {ITEMS.map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-bold tracking-tight sm:text-3xl">{t}</span>
            <span className="h-2 w-2 rounded-full bg-[#FF6B4A]" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
