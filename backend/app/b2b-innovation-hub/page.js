import PageHero from "@/components/PageHero";
import { IMAGES, COMPANY } from "@/lib/site";
import B2BHubContent from "./B2BHubContent";

export const metadata = {
  title: `B2B Innovation Hub | ${COMPANY.name}`,
  description: "Partner with Quantum Medical for hospital-grade prosthetics & orthotics digital workflows, fast in-house fabrication, and dedicated clinical support.",
};

export default function B2BHubPage() {
  return (
    <div data-testid="b2b-hub-page">
      <PageHero label="B2B Innovation Hub" title="Partner with a digital P&O manufacturer." subtitle="Give your hospital or clinic a precision fabrication partner — with in-house scanning, CAD/CAM design and 3D printing built for scale." image={IMAGES.lab} />
      <B2BHubContent />
    </div>
  );
}
