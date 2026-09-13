"use client";

import { Reveal } from "@/components/Reveal";
import { Baby } from "lucide-react";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { useLanguage } from "@/context/LanguageContext";
import { TRANSLATIONS } from "@/lib/translations";

const KIDS_IMAGE_MAP = {
  "scoliosis-bracing": { img: "/scoliosis-bracing.png", to: "/scoliosis-bracing" },
  "cranial-helmet": { img: "/cranial-helmet.png", to: "/cranial-orthoses" },
  "pediatric-prosthetics": { img: "/pediatric-prosthetics.png", to: "/pediatric-prosthetics" },
  "afo-orthosis": { img: "/afo-ankle-foot.png", imgPosition: "center bottom", to: "/lower-limb-orthotics#afo" },
  "nocturnal-braces": { img: "/nocturnal-braces.png", imgFit: "contain", imgBg: "#ffffff", to: "/scoliosis-bracing#nocturnal" },
  "pediatric-insoles": { img: "/custom-insoles.webp", to: "/custom-orthotic-insoles-footwear" },
  "smo-orthosis": { img: "/supramalleolar-orthosis.png", imgFit: "contain", imgBg: "#ffffff", to: "/lower-limb-orthotics#supramalleolar-orthosis" },
  "ucbl-orthosis": { img: "/custom-insoles.webp", to: "/lower-limb-orthotics#ucbl" },
  "ctev-boots": { img: "/ctev-boots.png", imgFit: "contain", imgBg: "#ffffff", to: "/lower-limb-orthotics#ctev" },
};

export default function KidsGrid() {
  const { language, t } = useLanguage();

  const localizedSolutions = (TRANSLATIONS[language]?.kids?.solutions || TRANSLATIONS.en.kids.solutions).map((item) => ({
    ...item,
    ...(KIDS_IMAGE_MAP[item.id] || {}),
  }));

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#0B4D95] via-[#083A72] to-[#0B121C] py-24 text-white"
      data-testid="kids-section"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#0284C7]/25 blur-[140px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0284C7] backdrop-blur-md">
              <Baby size={14} /> {t("kids.badge", "Pediatric Excellence")}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              {t("kids.title", "For")} <span className="text-[#0284C7]">{t("kids.titleHighlight", "Kids")}</span>
            </h2>
            <p className="mt-1 font-display text-xl font-light text-white/90 sm:text-2xl">
              {t("kids.subtitle", "Care That Grows With Every Child")}
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
