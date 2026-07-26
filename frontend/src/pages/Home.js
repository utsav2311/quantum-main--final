import { Helmet } from "react-helmet-async";
import { COMPANY } from "@/data/site";
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

export default function Home() {
  return (
    <div data-testid="home-page">
      <Helmet>
        <title>{`${COMPANY.name} | ${COMPANY.tagline}`}</title>
        <meta name="description" content="Tailored prosthetic & orthotic solutions for hospitals and clinics — engineered with GAIT analysis, CAD/CAM design and in-house 3D printing." />
      </Helmet>
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

