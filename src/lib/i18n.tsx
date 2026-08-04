import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dictionaries, type Lang } from './translations'

interface I18nContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function getInitialLang(): Lang {
  if (typeof document === 'undefined') return 'es'
  try {
    const stored = localStorage.getItem('auron-lang')
    if (stored === 'es' || stored === 'en') return stored
  } catch {}
  const nav = (navigator.language || '').toLowerCase()
  return nav.startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem('auron-lang', next)
    } catch {}
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (key: string, vars?: Record<string, string | number>) => {
    let value = dictionaries[lang][key] ?? dictionaries.es[key] ?? key
    if (vars) {
      for (const [k, v] of Object.entries(vars)) {
        value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return value
  }

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
}

export function useLang() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de <LanguageProvider>')
  return ctx
}

export function useTranslation() {
  return useLang()
}
