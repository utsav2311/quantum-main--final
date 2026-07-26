import { Helmet } from "react-helmet-async";
import PageHero from "@/components/PageHero";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Reveal } from "@/components/Reveal";
import { IMAGES, COMPANY } from "@/data/site";
import { useLeadModal } from "@/context/LeadModalContext";
import { Award, Microscope, HeartPulse, ShieldCheck } from "lucide-react";

const CREDS = [
  { icon: Award, t: "Accredited Practice", d: "Certified prosthetists & orthotists working to international standards." },
  { icon: Microscope, t: "Research-Led", d: "Continuous R&D into materials, geometry and additive manufacturing." },
  { icon: HeartPulse, t: "Patient-First", d: "Outcomes over units — every device is measured by function restored." },
  { icon: ShieldCheck, t: "Quality Assured", d: "Structural and material validation on every single build." },
];

export default function About() {
  const { open } = useLeadModal();
  return (
    <div data-testid="about-page">
      <Helmet>
        <title>{`About Us | ${COMPANY.name}`}</title>
        <meta name="description" content={`Precision care, engineered by ${COMPANY.shortName}. A B2B prosthetics & orthotics company uniting clinical expertise with digital manufacturing.`} />
      </Helmet>
      <PageHero label="About Us" title={`Precision care, engineered by ${COMPANY.shortName}.`} subtitle="A B2B prosthetics & orthotics company uniting clinical expertise with digital manufacturing — serving hospitals, clinics and rehabilitation partners." image={IMAGES.team} />


      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#0B4D95]">Our Story</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[#0B121C] sm:text-4xl">Where clinical intent meets manufacturing precision.</h2>
            <p className="mt-6 leading-relaxed text-[#4A5568]">
              We were founded on a simple conviction: that custom prosthetic and orthotic devices deserve the same engineering rigour as any precision instrument. By bringing scanning, CAD/CAM design and 3D printing in-house, we removed the delays and variability of traditional fabrication.
            </p>
            <p className="mt-4 leading-relaxed text-[#4A5568]">
              Today we partner with healthcare providers to deliver devices for both children and adults — faster, more consistently, and with a level of customisation that off-the-shelf supply simply can't match.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-[#E2E8F0]">
                <img src={IMAGES.pediatric} alt="Patient care" loading="lazy" className="aspect-[4/5] w-full object-cover" />
              </div>

            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CREDS.map((c) => (
            <Reveal key={c.t}>
              <div className="h-full rounded-3xl border border-[#E2E8F0] bg-white p-7">
                <c.icon size={26} className="text-[#0B4D95]" />
                <h3 className="mt-4 font-display text-lg font-bold text-[#0B121C]">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5568]">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <EditorialMarquee dark />
      <WhyChooseUs />

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-[#0B121C] p-10 sm:flex-row sm:items-center">
          <h3 className="max-w-lg font-display text-2xl font-bold text-white">Interested in partnering with our team?</h3>
          <button onClick={() => open("partner")} data-testid="about-partner-btn" className="shrink-0 rounded-full bg-[#FF6B4A] px-7 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-[#e8532f]">Partner With Us</button>
        </div>
      </section>
    </div>
  );
}
