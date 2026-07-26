import PageHero from "@/components/PageHero";
import { IMAGES, COMPANY } from "@/lib/site";
import ProductsContent from "./ProductsContent";
import { Suspense } from "react";

export const metadata = {
  title: `Products & Clinical Solutions | ${COMPANY.name}`,
  description: "Explore our complete clinical portfolio of custom orthotics, prosthetics, pediatric care, and mobility systems engineered with 3D precision.",
};

export default function ProductsPage() {
  return (
    <div data-testid="products-page">
      <PageHero
        label="Clinical Portfolio"
        title="Digitally engineered devices for every clinical indication."
        subtitle="Explore our full portfolio of custom orthotics, prosthetics, pediatric bracing and mobility solutions — fabricated in-house to CAD/CAM precision."
        image={IMAGES.tools}
      />
      <Suspense fallback={<div className="py-20 text-center text-sm text-[#4A5568]">Loading portfolio...</div>}>
        <ProductsContent />
      </Suspense>
    </div>
  );
}
