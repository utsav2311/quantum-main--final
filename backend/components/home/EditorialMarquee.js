"use client";

import Marquee from "react-fast-marquee";


const ITEMS = ["Moves You Forward", "Clinical Precision", "Tailored P&O Solutions", "3D Printed", "CAD/CAM Designed", "GAIT Analysis", "In-House Fabrication"];

export default function EditorialMarquee({ dark = false }) {
  return (
    <div className={`overflow-hidden w-full max-w-full border-y ${dark ? "border-white/15 bg-gradient-to-r from-[#0B121C] via-[#0D1929] to-[#0B121C] text-white" : "border-white/80 bg-gradient-to-r from-slate-50 via-blue-50/30 to-slate-50 text-[#0B121C] backdrop-blur-md"} py-6 shadow-xs`} data-testid="marquee">
      <Marquee speed={38} gradient={false} autoFill>
        {ITEMS.map((t, i) => (
          <div key={i} className="flex items-center">
            <span className="px-8 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{t}</span>
            <span className="h-2.5 w-2.5 rounded-full bg-[#0284C7] shadow-md shadow-[#0284C7]/40" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
