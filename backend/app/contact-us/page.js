import { COMPANY } from "@/lib/site";
import ContactUsContent from "./ContactUsContent";

export const metadata = {
  title: `Contact Us | ${COMPANY.name} — Abu Dhabi, UAE`,
  description: `Get in touch with ${COMPANY.name} in Abu Dhabi, UAE for clinical P&O consultations, device inquiries, or B2B facility partnerships. Phone: ${COMPANY.phone}`,
  alternates: {
    canonical: "https://quantumuae.ae/contact-us",
  },
  openGraph: {
    title: `Contact ${COMPANY.name} — Prosthetics & Orthotics Facility Abu Dhabi`,
    description: `Clinical consultations, 3D CAD/CAM fabrication, and hospital partnerships in Abu Dhabi, UAE.`,
    url: "https://quantumuae.ae/contact-us",
    siteName: COMPANY.name,
    images: [{ url: "/images/clinical_lab_bg.webp", width: 1200, height: 630, alt: "Quantum Medical Abu Dhabi Location" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${COMPANY.name} UAE`,
    description: `Connect with our certified clinical team in Abu Dhabi.`,
    images: ["/images/clinical_lab_bg.webp"],
  },
};

export default function ContactUsPage() {
  return (
    <div data-testid="contact-page">
      <ContactUsContent />
    </div>
  );
}
