"use client";

import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { IMAGES } from "@/lib/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Award, Microscope, HeartPulse, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const CREDS = [
  { icon: Award, t: "Accredited Practice", d: "Certified prosthetists & orthotists working to international standards." },
  { icon: Microscope, t: "Research-Led", d: "Continuous R&D into materials, geometry and additive manufacturing." },
  { icon: HeartPulse, t: "Patient-First", d: "Outcomes over units — every device is measured by function restored." },
  { icon: ShieldCheck, t: "Quality Assured", d: "Structural and material validation on every single build." },
];

const HIGHLIGHTS = [
  { t: "Sub-Millimetre Digital Accuracy", d: "3D GAIT & CAD/CAM scanning captures anatomical contours with high precision." },
  { t: "In-House 3D Printing Facility", d: "Eliminates third-party supply chain delays for faster patient turnaround." },
  { t: "Comprehensive Fit Guarantee", d: "Clinical alignment assurance tailored for both pediatric and adult care." },
];

export default function AboutContent() {
  const { open } = useLeadModal();
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 items-center lg:grid-cols-2 lg:gap-14">
          <Reveal className="order-1">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#0B121C] sm:text-4xl">Where clinical intent meets manufacturing precision.</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#4A5568] sm:text-base">
              We were founded on a simple conviction: that custom prosthetic and orthotic devices deserve the same engineering rigour as any precision instrument. By bringing scanning, CAD/CAM design and 3D printing in-house, we removed the delays and variability of traditional fabrication.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5568] sm:text-base">
              Today we partner with healthcare providers to deliver devices for both children and adults — faster, more consistently, and with a level of customisation that off-the-shelf supply simply can't match.
            </p>

            <div className="mt-6 space-y-3.5 border-t border-[#E2E8F0] pt-6">
              {HIGHLIGHTS.map((h) => (
                <div key={h.t} className="flex items-start gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0284C7]/15 text-[#0284C7] mt-0.5">
                    <CheckCircle2 size={14} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0B121C]">{h.t}</h4>
                    <p className="mt-0.5 text-xs text-[#4A5568] leading-relaxed">{h.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/products" className="btn-gradient-coral inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-xs font-semibold text-white shadow-md sm:text-sm">
                Explore Our Products <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] shadow-sm">
                <img
                  src={IMAGES.pediatric}
                  alt="Patient care"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full max-h-[480px] object-cover sm:aspect-[4/3] lg:max-h-[520px]"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {CREDS.map((c) => (
            <Reveal key={c.t}>
              <div className="h-full rounded-3xl border border-[#E2E8F0] bg-white p-6 sm:p-7">
                <c.icon size={26} className="text-[#0B4D95]" />
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0B121C] p-7 sm:p-10 sm:flex-row sm:items-center">
          <h3 className="max-w-lg font-display text-xl font-bold text-white sm:text-2xl">Interested in partnering with our team?</h3>
          <button onClick={() => open("partner")} data-testid="about-partner-btn" className="w-full shrink-0 rounded-full bg-[#0284C7] px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#0052CC] sm:w-auto">Partner With Us</button>
        </div>
      </section>
    </>
  );
}
