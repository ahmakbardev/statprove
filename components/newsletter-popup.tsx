"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // Show popup after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm"
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X size={20} />
          </button>
          <h3 className="text-xl font-semibold mb-2">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Stay updated with our latest news and offers!
          </p>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full p-2 border rounded"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
