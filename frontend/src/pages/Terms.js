import PageHero from "@/components/PageHero";
import { COMPANY } from "@/data/site";

export default function Terms() {
  return (
    <div data-testid="terms-page">
      <PageHero label="Legal" title="Terms & Conditions" subtitle="Please review the terms governing use of this website and our services." />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <div className="space-y-6 text-[15px] leading-relaxed text-[#4A5568]">
          <p>These Terms &amp; Conditions govern your use of the {COMPANY.name} website and services. By accessing this site you agree to these terms. [Replace this placeholder copy with your finalised legal terms before launch.]</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">Use of Content</h2>
          <p>All content, imagery and device descriptions are the property of {COMPANY.name} and are provided for informational purposes. Device suitability is determined only after clinical assessment.</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">Enquiries & Data</h2>
          <p>Information submitted through our forms is used solely to respond to your enquiry and manage our partnership relationship. We do not sell your data.</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">Medical Disclaimer</h2>
          <p>Content on this site does not constitute medical advice. Always consult a qualified clinician for diagnosis and treatment.</p>
        </div>
      </section>
    </div>
  );
}
