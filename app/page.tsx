"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/language-provider";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import ProjectModal from "@/components/project-modal";
import { homeLang } from "./home-lang";

const MotionImage = motion(Image);

const featuredProjects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    description:
      "A modern e-commerce platform built with Next.js and Shopify. Features include product management, cart functionality, secure checkout, and responsive design.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      { name: "Next.js" },
      { name: "Shopify" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Healthcare Dashboard",
    category: "Web Application",
    description:
      "A comprehensive healthcare dashboard for managing patient data, appointments, and medical records. Built with modern web technologies for optimal performance.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Material UI" },
    ],
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    description:
      "A modern corporate website with dynamic content management, blog functionality, and integrated analytics for tracking user engagement.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: [
      { name: "Next.js" },
      { name: "Prisma" },
      { name: "Tailwind CSS" },
    ],
  },
];

export default function Home() {
  const { language } = useLanguage();
  const t = (key: keyof (typeof homeLang)[typeof language]) =>
    homeLang[language][key] || key;

  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: { name: string }[];
  } | null>(null);

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

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites built with modern technologies and best practices.",
      link: "/services/web-development",
    },
    {
      title: "E-commerce Solutions",
      description:
        "Online stores with secure payment processing and inventory management.",
      link: "/services/ecommerce",
    },
    {
      title: "Web Applications",
      description: "Complex web applications tailored to your business needs.",
      link: "/services/web-apps",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that convert visitors into customers.",
      link: "/services/design",
    },
    {
      title: "Maintenance",
      description:
        "Regular updates and maintenance to keep your website running smoothly.",
      link: "/services/maintenance",
    },
    {
      title: "SEO Optimization",
      description: "Improve your search engine rankings and online visibility.",
      link: "/services/seo",
    },
  ];

  const featuredProjectsOld = [
    {
      title: "E-commerce Platform",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ot85dsMvpHDo9dFBxIMxarKmblofqT.png",
      link: "/portfolio/ecommerce",
    },
    {
      title: "Business Website",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ot85dsMvpHDo9dFBxIMxarKmblofqT.png",
      link: "/portfolio/business",
    },
    {
      title: "Mobile App",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ot85dsMvpHDo9dFBxIMxarKmblofqT.png",
      link: "/portfolio/mobile",
    },
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Single Page Website",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
      ],
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      description: "Great for growing businesses",
      features: [
        "Up to 5 Pages",
        "Responsive Design",
        "Contact Form",
        "Advanced SEO",
        "Analytics Integration",
      ],
    },
    {
      name: "Business",
      price: "$299",
      period: "/month",
      description: "Best for established businesses",
      features: [
        "Up to 10 Pages",
        "Responsive Design",
        "Advanced Forms",
        "Premium SEO",
        "Analytics Integration",
        "E-commerce Ready",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "/month",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "Advanced Features",
        "Priority Support",
        "Custom Integration",
        "E-commerce Ready",
      ],
    },
    {
      name: "Custom",
      price: "Contact Us",
      period: "",
      description: "Tailored solutions for unique requirements",
      features: [
        "Fully Customized Solution",
        "Dedicated Project Manager",
        "Bespoke Design and Development",
        "Advanced Security Features",
        "24/7 Priority Support",
        "Scalable Infrastructure",
      ],
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />

        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 0, 180],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium"
            >
              Welcome to Statprove
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              {t("hero.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium inline-flex items-center gap-2 hover:gap-4 transition-all"
              >
                {t("hero.cta")}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <Link
                href="/portfolio"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {t("featured.title")}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("featured.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("featured.subtitle")}
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm opacity-80">{project.category}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("services.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-block text-primary hover:text-primary/90 font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("pricing.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("pricing.subtitle")}
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-primary text-primary-foreground shadow-xl"
                    : "bg-card text-card-foreground border"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm opacity-80">{plan.period}</span>
                  </div>
                  <p className="text-sm opacity-80">{plan.description}</p>
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="w-5 h-5 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2 rounded-full ${
                      plan.popular
                        ? "bg-background text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
