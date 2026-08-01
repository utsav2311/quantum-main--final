import Hero from "@/components/home/Hero";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import VisionMission from "@/components/home/VisionMission";
import Welcome from "@/components/home/Welcome";
import AdultsGrid from "@/components/home/AdultsGrid";
import KidsGrid from "@/components/home/KidsGrid";
import Studio3D from "@/components/home/Studio3D";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
import { COMPANY } from "@/lib/site";

export const metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description: "Tailored prosthetic & orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Quantum Medical",
  "image": "https://quantumuae.ae/logo.webp",
  "@id": "https://quantumuae.ae",
  "url": "https://quantumuae.ae",
  "telephone": "+971501354607",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Danah, Zone 1",
    "addressLocality": "Abu Dhabi",
    "addressCountry": "AE"
  },
  "description": "Leading prosthetic & orthotic provider in Abu Dhabi, UAE — custom artificial limbs, 3D printed orthotics, GAIT analysis, and device repair."
};

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <EditorialMarquee />
      <VisionMission />
      <Welcome />
      <AdultsGrid />
      <KidsGrid />
      <Studio3D />
      <HowWeWork />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
