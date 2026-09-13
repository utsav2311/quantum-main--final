import { COMPANY } from "@/lib/site";
import TermsContent from "./TermsContent";

export const metadata = {
  title: `Terms & Conditions | ${COMPANY.name}`,
  description: `Terms and conditions governing the use of ${COMPANY.name} website and clinical services.`,
};

export default function TermsPage() {
  return (
    <div data-testid="terms-page">
      <TermsContent />
    </div>
  );
}
