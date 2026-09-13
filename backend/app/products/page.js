import { COMPANY } from "@/lib/site";
import ProductsContent from "./ProductsContent";
import { Suspense } from "react";

export const metadata = {
  title: `Products & Clinical Solutions | ${COMPANY.name}`,
  description: "Explore our complete clinical portfolio of custom orthotics, prosthetics, pediatric care, and mobility systems engineered with 3D precision.",
};

export default function ProductsPage() {
  return (
    <div data-testid="products-page">
      <Suspense fallback={<div className="py-20 text-center text-sm text-[#4A5568]">Loading portfolio...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
