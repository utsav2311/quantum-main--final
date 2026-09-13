"use client";

import { Reveal } from "@/components/Reveal";
import { Activity } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/translations";

const ADULT_IMAGE_MAP = {
  "back-braces": { img: "/spine-back-braces.webp", to: "/spine-back-braces" },
  "silicone-restoration": { img: "/silicone-restoration.webp", to: "/silicone-restoration" },
  "lower-limb-prosthetics": { img: "/lower-limb-prosthetics.webp", to: "/lower-limb-prosthetics" },
  "upper-limb-orthosis": { img: "/upper-limb-prosthetics.webp", to: "/upper-limb-orthotics" },
  "hip-braces": { img: "/hip-braces.webp", to: "/lower-limb-orthotics#hip-braces" },
  "knee-braces": { img: "/knee-braces.webp", to: "/lower-limb-orthotics#knee-braces" },
  "chest-braces": { img: "/chest-braces.webp", to: "/spine-back-braces#chest" },
  "custom-insoles": { img: "/custom-insoles.webp", to: "/custom-orthotic-insoles-footwear" },
  "socket-liners": { img: "/sockets-liners.webp", to: "/sockets-liners" },
  "custom-seating": { img: "/images/3d_printing.webp", to: "/custom-seating" },
};

export default function AdultsGrid() {
  const { language, t } = useLanguage();

  const localizedSolutions = (TRANSLATIONS[language]?.adults?.solutions || TRANSLATIONS.en.adults.solutions).map((item) => ({
    ...item,
    ...(ADULT_IMAGE_MAP[item.id] || {}),
  }));

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#0B121C] via-[#0D1B2D] to-[#0B121C] py-24 text-white"
      data-testid="adults-section"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(11,77,149,0.35),rgba(255,255,255,0))]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#0284C7]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-[#0B4D95]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Activity size={13} /> {t("adults.badge", "Comprehensive Portfolio")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              {t("adults.title", "For")} <span className="text-[#0284C7]">{t("adults.titleHighlight", "Adults")}</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/80 sm:text-2xl">
              {t("adults.subtitle", "Mobility Solutions")}
            </p>
          </div>
        </Reveal>

        {/* Feature Carousel */}
        <Reveal delay={0.1}>
          <FeatureCarousel features={localizedSolutions} />
        </Reveal>
      </div>
    </section>
  );
}
