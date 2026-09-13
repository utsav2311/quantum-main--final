import EditorialMarquee from "@/components/home/EditorialMarquee";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { COMPANY } from "@/lib/site";
import AboutContent from "./AboutContent";

export const metadata = {
  title: `About Us | ${COMPANY.name} — Abu Dhabi, UAE`,
  description: `Precision prosthetic & orthotic clinical facility in Abu Dhabi, UAE. Uniting certified prosthetists, orthotists, and digital CAD/CAM 3D manufacturing.`,
  alternates: {
    canonical: "https://quantumuae.ae/about",
  },
  openGraph: {
    title: `About ${COMPANY.name} — Prosthetics & Orthotics Clinical Excellence`,
    description: `Leading B2B clinical partner for hospitals and rehabilitation centers in the UAE. Advanced 3D printing and digital orthotic fabrication.`,
    url: "https://quantumuae.ae/about",
    siteName: COMPANY.name,
    images: [{ url: "/images/clinical_team.webp", width: 1200, height: 630, alt: "Quantum Medical Clinical Team in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${COMPANY.name} UAE`,
    description: `Clinical expertise and digital manufacturing in Abu Dhabi.`,
    images: ["/images/clinical_team.webp"],
  },
};

export default function AboutPage() {
  return (
    <div data-testid="about-page">
      <AboutContent />
      <EditorialMarquee dark />
      <WhyChooseUs />
    </div>
  );
}
