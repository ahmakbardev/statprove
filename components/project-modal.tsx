"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

interface Technology {
  name: string;
  color?: string;
}

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: Technology[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-background rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        >
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors z-10"
            >
              <X size={20} />
            </button>
            <div className="aspect-video relative">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="text-muted-foreground">{project.category}</p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech.name}
                  className="px-3 py-1 rounded-full text-sm bg-secondary"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
