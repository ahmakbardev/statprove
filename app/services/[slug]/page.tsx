"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Check } from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/services-data";
import Link from "next/link";

export default function ServicePage() {
  const params = useParams();

  if (!params || !params.slug) {
    return null; // Bisa diganti dengan loading indicator jika diperlukan
  }

  const slug = params.slug as string;
  const service = services[slug as keyof typeof services];

  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto space-y-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </motion.div>

        {/* Features Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Features</h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex items-center"
                >
                  <Check className="w-5 h-5 text-primary mr-2" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.div
            variants={itemVariants}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Our Process</h2>
          <div className="grid md:grid-cols-5 gap-4">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                variants={itemVariants}
                className="relative"
              >
                <div className="space-y-2 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 -z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Section */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h2 className="text-2xl font-bold text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-card rounded-lg p-6 shadow-lg border"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-4 bg-primary text-primary-foreground py-2 rounded-full"
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="text-center bg-primary text-primary-foreground rounded-lg p-8 space-y-6"
        >
          <h2 className="text-2xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto">
            Contact us today to discuss your project and see how we can help you
            achieve your goals.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/contact"
              className="inline-block bg-background text-foreground px-8 py-3 rounded-full text-lg font-semibold hover:bg-accent transition-colors"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
