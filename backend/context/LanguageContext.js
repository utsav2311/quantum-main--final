"use client";

import React, { createContext, useContext, useEffect } from "react";
import { TRANSLATIONS } from "@/lib/translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  isRTL: false,
  t: () => "",
});

export function LanguageProvider({ children }) {
  const language = "en";
  const isRTL = false;

  useEffect(() => {
    try {
      localStorage.setItem("quantum_language", "en");
    } catch (e) {}

    if (typeof document !== "undefined") {
      document.documentElement.lang = "en";
      document.documentElement.dir = "ltr";
      document.documentElement.classList.remove("rtl-mode");
    }
  }, []);

  const setLanguage = () => {};
  const toggleLanguage = () => {};

  const t = (path, fallback = "") => {
    if (!path) return fallback;
    const keys = path.split(".");
    let enCurrent = TRANSLATIONS.en;
    for (const key of keys) {
      if (enCurrent && typeof enCurrent === "object" && key in enCurrent) {
        enCurrent = enCurrent[key];
      } else {
        return fallback || path;
      }
    }
    return enCurrent || fallback || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, isRTL, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
