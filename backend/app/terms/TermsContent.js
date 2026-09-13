"use client";

import PageHero from "@/components/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsContent() {
  const { t } = useLanguage();

  return (
    <div>
      <PageHero
        label={t("termsPage.heroLabel")}
        title={t("termsPage.heroTitle")}
        subtitle={t("termsPage.heroSubtitle")}
      />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8 text-start">
        <div className="space-y-6 text-[15px] leading-relaxed text-[#4A5568]">
          <p>{t("termsPage.intro")}</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">{t("termsPage.contentTitle")}</h2>
          <p>{t("termsPage.contentDesc")}</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">{t("termsPage.dataTitle")}</h2>
          <p>{t("termsPage.dataDesc")}</p>
          <h2 className="font-display text-xl font-bold text-[#0B121C]">{t("termsPage.disclaimerTitle")}</h2>
          <p>{t("termsPage.disclaimerDesc")}</p>
        </div>
      </section>
    </div>
  );
}
