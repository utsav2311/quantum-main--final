import Hero from "@/components/home/Hero";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import VisionMission from "@/components/home/VisionMission";
import Welcome from "@/components/home/Welcome";
import AdultsGrid from "@/components/home/AdultsGrid";
import KidsGrid from "@/components/home/KidsGrid";
import Studio3D from "@/components/home/Studio3D";
import PatientJourney from "@/components/home/PatientJourney";
import HowWeWork from "@/components/home/HowWeWork";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQ from "@/components/home/FAQ";
import { COMPANY } from "@/lib/site";

export const metadata = {
  title: `${COMPANY.name} | ${COMPANY.tagline}`,
  description: "Tailored prosthetic & orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing.",
};

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <Hero />
      <EditorialMarquee />
      <VisionMission />
      <Welcome />
      <AdultsGrid />
      <KidsGrid />
      <PatientJourney />
      <Studio3D />
      <HowWeWork />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
