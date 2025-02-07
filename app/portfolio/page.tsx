"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { portfolioLang } from "./portfolio-lang";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    category: "web",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Mobile App UI",
    category: "design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Brand Identity",
    category: "branding",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Web Application",
    category: "web",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Product Design",
    category: "design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Logo Design",
    category: "branding",
    image: "/placeholder.svg?height=300&width=400",
  },
];

const categories = ["all", "web", "design", "branding"];

export default function Portfolio() {
  const { language } = useLanguage();
  const t = (key: string) => portfolioLang[language][key] || key;

  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

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
      <div className="flex justify-center mb-8">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {t(category)}
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {t(project.category)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
