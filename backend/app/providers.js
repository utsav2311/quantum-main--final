"use client";

import { LeadModalProvider } from "@/context/LeadModalContext";
import { LanguageProvider } from "@/context/LanguageContext";

export function Providers({ children }) {
  return (
    <LanguageProvider>
      <LeadModalProvider>
        {children}
      </LeadModalProvider>
    </LanguageProvider>
  );
}
