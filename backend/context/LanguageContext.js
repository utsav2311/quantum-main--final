"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TRANSLATIONS } from "@/lib/translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  isRTL: false,
  t: () => "",
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("quantum_language");
      if (savedLang === "ar" || savedLang === "en") {
        setLanguageState(savedLang);
        applyLanguageToDocument(savedLang);
      } else {
        applyLanguageToDocument("en");
      }
    } catch (e) {
      applyLanguageToDocument("en");
    }
  }, []);

  const applyLanguageToDocument = (lang) => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      if (lang === "ar") {
        document.documentElement.classList.add("rtl-mode");
      } else {
        document.documentElement.classList.remove("rtl-mode");
      }
    }
  };

  const setLanguage = (newLang) => {
    if (newLang !== "en" && newLang !== "ar") return;
    setLanguageState(newLang);
    try {
      localStorage.setItem("quantum_language", newLang);
    } catch (e) {}
    applyLanguageToDocument(newLang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const t = (path, fallback = "") => {
    if (!path) return fallback;
    const keys = path.split(".");
    let current = TRANSLATIONS[language];
    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key missing in current language
        let enCurrent = TRANSLATIONS.en;
        for (const enKey of keys) {
          if (enCurrent && typeof enCurrent === "object" && enKey in enCurrent) {
            enCurrent = enCurrent[enKey];
          } else {
            return fallback || path;
          }
        }
        return enCurrent || fallback || path;
      }
    }
    return current || fallback || path;
  };

  const isRTL = language === "ar";

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
