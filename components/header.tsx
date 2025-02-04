"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useLanguage } from "./language-provider";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Globe, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/services-data";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 w-full border-b"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Statprove
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <button
              onMouseEnter={() => setShowServicesMenu(true)}
              onClick={() => setShowServicesMenu(!showServicesMenu)}
              className="flex items-center space-x-1 hover:text-primary transition-colors"
            >
              <span>{t("nav.services")}</span>
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {showServicesMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseLeave={() => setShowServicesMenu(false)}
                  className="absolute top-full left-0 mt-2 w-[600px] bg-background rounded-lg shadow-lg p-6 grid grid-cols-2 gap-6"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={
                        hoveredService
                          ? services[hoveredService as keyof typeof services]
                              ?.image
                          : "/placeholder.svg?height=400&width=400"
                      }
                      alt="Service preview"
                      fill
                      className="object-cover transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-4">
                    {Object.entries(services).map(([key, service]) => (
                      <Link
                        key={key}
                        href={`/services/${key}`}
                        className="block"
                        onMouseEnter={() => setHoveredService(key)}
                        onClick={() => setShowServicesMenu(false)}
                      >
                        <div className="p-3 rounded-lg hover:bg-accent transition-colors">
                          <h3 className="font-medium">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.shortDesc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link
            href="/portfolio"
            className="hover:text-primary transition-colors"
          >
            {t("nav.portfolio")}
          </Link>
          <Link
            href="/pricing"
            className="hover:text-primary transition-colors"
          >
            {t("nav.pricing")}
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            {t("nav.contact")}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed left-1/2 bottom-20 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <Menu size={20} />
          <span className="font-medium">Menu</span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-x-0 bottom-32 p-4 md:hidden"
            >
              <motion.div
                className="bg-background rounded-lg shadow-lg border p-4 space-y-2"
                onClick={() => setShowMobileMenu(false)}
              >
                <Link
                  href="/services"
                  className="block p-2 hover:bg-accent rounded-md"
                >
                  {t("nav.services")}
                </Link>
                <Link
                  href="/portfolio"
                  className="block p-2 hover:bg-accent rounded-md"
                >
                  {t("nav.portfolio")}
                </Link>
                <Link
                  href="/pricing"
                  className="block p-2 hover:bg-accent rounded-md"
                >
                  {t("nav.pricing")}
                </Link>
                <Link
                  href="/contact"
                  className="block p-2 hover:bg-accent rounded-md"
                >
                  {t("nav.contact")}
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-1"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">
                {language.toUpperCase()}
              </span>
            </motion.button>
            <AnimatePresence>
              {showLanguageMenu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 z-10"
                >
                  <button
                    onClick={() => {
                      setLanguage("en");
                      setShowLanguageMenu(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left transition-colors ${
                      language === "en"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("id");
                      setShowLanguageMenu(false);
                    }}
                    className={`block px-4 py-2 text-sm w-full text-left transition-colors ${
                      language === "id"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    Bahasa Indonesia
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
