import PageHero from "@/components/PageHero";
import EditorialMarquee from "@/components/home/EditorialMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { Reveal } from "@/components/Reveal";
import { IMAGES, COMPANY } from "@/lib/site";
import AboutContent from "./AboutContent";

export const metadata = {
  title: `About Us | ${COMPANY.name}`,
  description: `Precision care, engineered by ${COMPANY.shortName}. A B2B prosthetics & orthotics company uniting clinical expertise with digital manufacturing.`,
};

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <PageHero label="About Us" title={`Precision care, engineered by ${COMPANY.shortName}.`} subtitle="A B2B prosthetics & orthotics company uniting clinical expertise with digital manufacturing — serving hospitals, clinics and rehabilitation partners." image={IMAGES.team} />
      <AboutContent />
      <EditorialMarquee dark />
      <WhyChooseUs />
    </div>
  );
}
