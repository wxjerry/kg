"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { Button } from "@/components/ui/button"
import type { Language } from "@/lib/i18n/translations"

const languageNames: Record<Language, string> = {
  zh: "中文",
  en: "English",
  kg: "Қырғыз",
}

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex gap-2">
      {Object.entries(languageNames).map(([code, name]) => (
        <Button
          key={code}
          variant={language === code ? "default" : "outline"}
          size="sm"
          onClick={() => setLanguage(code as Language)}
        >
          {name}
        </Button>
      ))}
    </div>
  )
}
