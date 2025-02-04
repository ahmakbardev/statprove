"use client"

import type React from "react"
import { createContext, useState, useContext } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}


const translations: Record<string, Record<string, string>> = {
  en: {
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "hero.title": "Elevate Your Digital Presence",
    "hero.subtitle": "Professional web development, UI/UX design, and branding services.",
    "hero.cta": "Get Started",
    "featured.title": "Featured Work",
    "featured.subtitle": "Explore our latest projects and see how we've helped businesses achieve their goals.",
    "services.title": "Our Services",
    "services.subtitle": "We offer a comprehensive range of web development services to help you succeed online.",
    "pricing.title": "Simple Pricing",
    "pricing.subtitle": "Choose the perfect plan for your needs. All plans include our core features.",
  },
  id: {
    "nav.services": "Layanan",
    "nav.portfolio": "Portofolio",
    "nav.pricing": "Harga",
    "nav.contact": "Kontak",
    "hero.title": "Tingkatkan Kehadiran Digital Anda",
    "hero.subtitle": "Layanan pengembangan web profesional, desain UI/UX, dan branding.",
    "hero.cta": "Mulai Sekarang",
    "featured.title": "Karya Unggulan",
    "featured.subtitle":
      "Jelajahi proyek terbaru kami dan lihat bagaimana kami telah membantu bisnis mencapai tujuan mereka.",
    "services.title": "Layanan Kami",
    "services.subtitle": "Kami menawarkan berbagai layanan pengembangan web untuk membantu Anda sukses secara online.",
    "pricing.title": "Harga Sederhana",
    "pricing.subtitle": "Pilih paket yang sempurna untuk kebutuhan Anda. Semua paket mencakup fitur inti kami.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

