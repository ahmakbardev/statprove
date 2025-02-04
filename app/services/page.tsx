"use client"

import { motion } from "framer-motion"
import { Code, Palette, Briefcase } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: Code,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    icon: Palette,
  },
  {
    title: "Branding",
    description: "Comprehensive branding solutions to establish a strong market presence.",
    icon: Briefcase,
  },
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <service.icon className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

