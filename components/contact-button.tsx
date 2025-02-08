"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Send } from "lucide-react";
import { useLanguage } from "./language-provider";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/+628973968416", "_blank");
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 right-4 bg-primary text-primary-foreground p-4 rounded-full shadow-lg z-50"
      >
        <MessageCircle size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-background shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-accent"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border rounded-md bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border rounded-md bg-background"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 border rounded-md bg-background"
                      required
                    ></textarea>
                  </div>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-md flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Send Message
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={openWhatsApp}
                      className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-md"
                    >
                      <Phone size={18} />
                      WhatsApp
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
