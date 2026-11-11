"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { messages, type Language, type Messages } from "./messages";

const STORAGE_KEY = "himalayan-horizon-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function readStoredLanguage(): Language {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "hi") return stored;
  } catch {
    // Storage can be blocked, for example in some private modes. Fall back to English.
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start in English so the server render and the first client render match.
  // The saved choice is applied after mount to avoid a hydration mismatch.
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // The choice still applies for this visit even if it can't be saved.
    }
  }, []);

  useEffect(() => {
    const saved = readStoredLanguage();
    if (saved !== "en") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: messages[language] }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
