"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Language, translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.EN;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("EN");
  const [isInitialized, setIsInitialized] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("shanmu-language") as Language;
    if (savedLanguage && (savedLanguage === "EN" || savedLanguage === "CH")) {
      setLanguage(savedLanguage);
    }
    setIsInitialized(true);
  }, []);

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("shanmu-language", language);
    }
  }, [language, isInitialized]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
