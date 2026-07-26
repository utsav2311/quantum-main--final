import { Reveal } from "@/components/Reveal";
import { IMAGES, waLink } from "@/data/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { ArrowUpRight } from "lucide-react";

const STATS = [
  { v: "5–10", l: "Day turnaround" },
  { v: "100%", l: "In-house fabrication" },
  { v: "3D", l: "Scanned & printed" },
  { v: "All ages", l: "Kids & adults" },
];

export default function Welcome() {
  const { open } = useLeadModal();
  return (
    <section className="relative overflow-hidden bg-white py-24" data-testid="welcome">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl border border-[#FF6B4A]/30" />
            <div className="relative overflow-hidden rounded-3xl">
              <img src={IMAGES.team} alt="Clinical team at work" loading="lazy" className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]" />
            </div>

            <div className="absolute -bottom-6 -right-4 rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-[#FF6B4A]">Since day one</p>
              <p className="mt-1 font-display text-2xl font-extrabold text-[#0B121C]">Precision, in-house.</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Welcome</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[#0B121C] sm:text-5xl">
            A B2B partner built for hospitals, clinics &amp; rehab teams.
          </h2>
          <p className="mt-6 leading-relaxed text-[#4A5568]">
            We supply the healthcare ecosystem with truly custom prosthetic and orthotic devices — designed for both children and adults. Every device begins with gait analysis and a 3D scan, is engineered with CAD/CAM, and is fabricated in-house using advanced 3D printing.
          </p>
          <p className="mt-4 leading-relaxed text-[#4A5568]">
            The result: faster turnarounds, repeatable fit quality, and a single accountable partner for your clinical supply chain.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-extrabold text-[#0B4D95]">{s.v}</p>
                <p className="mt-1 text-xs text-[#4A5568]">{s.l}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={() => open("partner")} data-testid="welcome-connect-btn" className="group flex items-center gap-2 rounded-full bg-[#0B4D95] px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#083a72]">
              Connect with Us <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" data-testid="welcome-whatsapp-btn" className="rounded-full border border-[#E2E8F0] px-6 py-3.5 font-display text-sm font-semibold text-[#0B121C] transition-colors hover:border-[#25D366] hover:text-[#25D366]">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
