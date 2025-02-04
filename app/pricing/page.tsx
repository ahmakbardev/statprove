"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    features: ["5 pages website", "Basic SEO", "Mobile responsive", "1 month support"],
  },
  {
    name: "Pro",
    price: "$199",
    features: ["10 pages website", "Advanced SEO", "Mobile responsive", "E-commerce integration", "3 months support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Unlimited pages",
      "Full SEO package",
      "Mobile responsive",
      "E-commerce integration",
      "Custom features",
      "1 year support",
    ],
  },
]

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        Pricing Plans
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.name}</h2>
            <p className="text-4xl font-bold mb-6">{plan.price}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-primary-foreground py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Choose Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

