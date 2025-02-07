"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "./language-provider";
import { Home, Briefcase, ImageIcon, Mail, Info, X } from "lucide-react";
import { services } from "@/lib/services-data";

export default function BottomNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const menuItems = [
    { icon: Home, label: t("nav.home"), href: "/" },
    {
      icon: Briefcase,
      label: t("nav.services"),
      href: "#",
      onClick: () => setIsOpen((prev) => !prev),
    },
    { icon: ImageIcon, label: t("nav.portfolio"), href: "/portfolio" },
    { icon: Mail, label: t("nav.contact"), href: "/contact" },
    { icon: Info, label: t("nav.about"), href: "/about" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <nav className="bg-background border-t px-4 py-2 flex justify-around items-center">
        {menuItems.map((item) => (
          <div key={item.label}>
            {item.onClick ? (
              <button
                onClick={item.onClick}
                className="flex flex-col items-center gap-1 p-2"
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs">{item.label}</span>
              </button>
            ) : (
              <Link
                href={item.href}
                className="flex flex-col items-center gap-1 p-2"
              >
                <item.icon className="h-6 w-6" />
                <span className="text-xs">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="bg-background border-t absolute bottom-full left-0 right-0 overflow-hidden"
          >
            <div className="container mx-auto p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{t("nav.services")}</h2>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {Object.entries(services).map(([key, service]) => (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="p-3 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <h3 className="font-medium">{service.en.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.en.shortDesc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
