"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Language } from "./translations"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  // Load language preference from localStorage on client side
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem("language") as Language | null
      if (savedLanguage && ["zh", "en", "kg"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      }
    } catch (error) {
      console.error("Failed to load language from localStorage:", error)
    }
  }, [])

  // Save language preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem("language", language)
    } catch (error) {
      console.error("Failed to save language to localStorage:", error)
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
