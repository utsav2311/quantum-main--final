import { COMPANY } from "@/lib/site";
import B2BHubContent from "./B2BHubContent";

export const metadata = {
  title: `B2B Innovation Hub | ${COMPANY.name}`,
  description: "Partner with Quantum Medical for hospital-grade prosthetics & orthotics digital workflows, fast in-house fabrication, and dedicated clinical support.",
};

export default function B2BHubPage() {
  return (
    <div data-testid="b2b-hub-page">
      <B2BHubContent />
    </div>
  );
}
