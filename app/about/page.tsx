"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Zap, Target, Award, Globe, Rocket } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { aboutLang } from "./about-lang";

const AboutPage = () => {
  const { language } = useLanguage();
  const t = (key: string) => aboutLang[language][key] || key;

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Mike Johnson",
      role: "Design Director",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sarah Lee",
      role: "Marketing Manager",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  const milestones = [
    { year: 2018, event: "Statprove founded" },
    { year: 2019, event: "Launched first major client project" },
    { year: 2020, event: "Expanded team to 10 members" },
    { year: 2021, event: "Opened international office" },
    { year: 2022, event: "Reached 100 client milestone" },
    { year: 2023, event: "Launched innovative AI-powered web solutions" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {t("subtitle")}
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("values.title")}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("values.clientFocused")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("values.clientFocusedDesc")}
            </p>
          </div>
          <div className="text-center">
            <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("values.innovation")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("values.innovationDesc")}
            </p>
          </div>
          <div className="text-center">
            <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("values.resultsDriven")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("values.resultsDrivenDesc")}
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("team.title")}
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="text-center"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          {t("journey.title")}
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          {milestones.map((milestone, index) => (
            <div key={milestone.year} className="relative mb-8">
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">
                      {milestone.year}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-8">{t("whyChoose.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Award className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("whyChoose.expertise")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("whyChoose.expertiseDesc")}
            </p>
          </div>
          <div>
            <Globe className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("whyChoose.globalReach")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("whyChoose.globalReachDesc")}
            </p>
          </div>
          <div>
            <Rocket className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">
              {t("whyChoose.technology")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("whyChoose.technologyDesc")}
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
