"use client";

import type React from "react";
import { createContext, useState, useContext } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof (typeof translations)["en"]) => string; // <- disesuaikan
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.about": "About",
    "hero.title": "Elevate Your Digital Presence",
    "hero.subtitle":
      "Professional web development, UI/UX design, and branding services.",
    "hero.cta": "Get Started",
    "featured.title": "Featured Work",
    "featured.subtitle":
      "Explore our latest projects and see how we've helped businesses achieve their goals.",
    "services.title": "Our Services",
    "services.subtitle":
      "We offer a comprehensive range of web development services to help you succeed online.",
    "pricing.title": "Simple Pricing",
    "pricing.subtitle":
      "Choose the perfect plan for your needs. All plans include our core features.",
    "about.title": "About Us",
    "about.subtitle": "Learn more about our company and our mission.",
    "contact.title": "Get in Touch",
    "contact.subtitle":
      "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    "footer.quickLinks": "Quick Links",
    "footer.contactUs": "Contact Us",
    "footer.newsletter": "Newsletter",
    "footer.subscribeText": "Stay updated with our latest news and offers.",
    "footer.subscribeButton": "Subscribe",
    "footer.rights": "All rights reserved.",
  },
  id: {
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.portfolio": "Portofolio",
    "nav.pricing": "Harga",
    "nav.contact": "Kontak",
    "nav.about": "Tentang Kami",
    "hero.title": "Tingkatkan Kehadiran Digital Anda",
    "hero.subtitle":
      "Layanan pengembangan web profesional, desain UI/UX, dan branding.",
    "hero.cta": "Mulai Sekarang",
    "featured.title": "Karya Unggulan",
    "featured.subtitle":
      "Jelajahi proyek terbaru kami dan lihat bagaimana kami telah membantu bisnis mencapai tujuan mereka.",
    "services.title": "Layanan Kami",
    "services.subtitle":
      "Kami menawarkan berbagai layanan pengembangan web untuk membantu Anda sukses secara online.",
    "pricing.title": "Harga Sederhana",
    "pricing.subtitle":
      "Pilih paket yang sempurna untuk kebutuhan Anda. Semua paket mencakup fitur inti kami.",
    "about.title": "Tentang Kami",
    "about.subtitle":
      "Pelajari lebih lanjut tentang perusahaan kami dan misi kami.",
    "contact.title": "Hubungi Kami",
    "contact.subtitle":
      "Kami senang mendengar dari Anda. Kirim pesan kepada kami dan kami akan merespons secepat mungkin.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.contactUs": "Hubungi Kami",
    "footer.newsletter": "Buletin",
    "footer.subscribeText":
      "Tetap update dengan berita dan penawaran terbaru kami.",
    "footer.subscribeButton": "Berlangganan",
    "footer.rights": "Hak cipta dilindungi undang-undang.",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: keyof (typeof translations)["en"]): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
