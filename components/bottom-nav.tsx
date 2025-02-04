"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Menu, X, Home, Briefcase, Image, CreditCard, Mail } from "lucide-react"
import { services } from "@/lib/services-data"

export default function BottomNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [showServicesMenu, setShowServicesMenu] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Briefcase, label: "Services", href: "#", onClick: () => setShowServicesMenu(!showServicesMenu) },
    { icon: Image, label: "Portfolio", href: "/portfolio" },
    { icon: CreditCard, label: "Pricing", href: "/pricing" },
    { icon: Mail, label: "Contact", href: "/contact" },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="bg-background border-t"
          >
            <div className="container mx-auto p-4 space-y-4">
              <nav className="grid grid-cols-2 gap-4">
                {menuItems.map((item) => (
                  <div key={item.label}>
                    {item.onClick ? (
                      <button
                        onClick={item.onClick}
                        className="w-full flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <AnimatePresence>
                {showServicesMenu && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    {Object.entries(services).map(([key, service]) => (
                      <Link
                        key={key}
                        href={`/services/${key}`}
                        className="p-3 rounded-lg hover:bg-accent transition-colors"
                        onClick={() => {
                          setShowServicesMenu(false)
                          setIsOpen(false)
                        }}
                      >
                        <h3 className="font-medium">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.shortDesc}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="font-medium">Menu</span>
      </motion.button>
    </div>
  )
}

