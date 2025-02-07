"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { pricingLang } from "./pricing-lang";

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    period: "monthly",
    description: "Perfect for small businesses",
    features: [
      { name: "5 pages website", included: true },
      { name: "Responsive design", included: true },
      { name: "Basic SEO optimization", included: true },
      { name: "Contact form", included: true },
      { name: "1 month of support", included: true },
      { name: "Custom domain", included: false },
      { name: "E-commerce functionality", included: false },
      { name: "Advanced analytics", included: false },
    ],
  },
  {
    name: "Professional",
    price: "$199",
    period: "monthly",
    description: "Great for growing businesses",
    features: [
      { name: "10 pages website", included: true },
      { name: "Responsive design", included: true },
      { name: "Advanced SEO optimization", included: true },
      { name: "Contact form", included: true },
      { name: "3 months of support", included: true },
      { name: "Custom domain", included: true },
      { name: "Basic e-commerce (up to 20 products)", included: true },
      { name: "Advanced analytics", included: true },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organizations",
    features: [
      { name: "Unlimited pages", included: true },
      { name: "Responsive design", included: true },
      { name: "Advanced SEO optimization", included: true },
      { name: "Advanced forms and integrations", included: true },
      { name: "1 year of priority support", included: true },
      { name: "Custom domain with SSL", included: true },
      { name: "Full e-commerce solution", included: true },
      { name: "Custom analytics and reporting", included: true },
    ],
  },
];

export default function Pricing() {
  const { language } = useLanguage();
  const t = (key: string) => pricingLang[language][key] || key;

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-8 text-center"
      >
        {t("title")}
      </motion.h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
        {t("subtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl p-8 ${
              plan.popular
                ? "bg-primary text-primary-foreground shadow-xl"
                : "bg-card text-card-foreground border"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                {t("mostPopular")}
              </span>
            )}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{plan.name}</h2>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm ml-2 opacity-80">
                  {plan.period ? t(plan.period) : ""}
                </span>
              </div>
              <p className="text-sm opacity-80">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center">
                    {feature.included ? (
                      <Check className="w-5 h-5 mr-2 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 mr-2 text-red-500" />
                    )}
                    <span
                      className={`text-sm ${!feature.included && "opacity-50"}`}
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 rounded-full ${
                  plan.popular
                    ? "bg-white text-primary"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {t("getStarted")}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
