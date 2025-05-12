"use client"

import { useLanguage } from "./language-context"
import { translations, type TranslationKey } from "./translations"

export function useTranslation() {
  // 在钩子顶层调用 useLanguage，而不是在 useEffect 内部
  const { language } = useLanguage()

  const t = (key: TranslationKey) => {
    try {
      return translations[language][key] || key
    } catch (error) {
      console.error(`Translation error for key ${key}:`, error)
      return key
    }
  }

  return { t, language }
}
