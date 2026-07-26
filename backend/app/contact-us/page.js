import PageHero from "@/components/PageHero";
import { IMAGES, COMPANY } from "@/lib/site";
import ContactUsContent from "./ContactUsContent";

export const metadata = {
  title: `Contact Us | ${COMPANY.name}`,
  description: `Get in touch with ${COMPANY.name} for clinical consultations, device inquiries, or B2B facility partnerships.`,
};

export default function ContactUsPage() {
  return (
    <div data-testid="contact-page">
      <PageHero label="Get in Touch" title="We're here to answer clinical and partner inquiries." subtitle="Whether you're a patient seeking a consultation or a clinical leader building a P&O program — reach out to our team." image={IMAGES.lab} />
      <ContactUsContent />
    </div>
  );
}
