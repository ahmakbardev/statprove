"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  duration?: number;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    if (!onClose) return; // Guard clause for when onClose is undefined

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!message || !type || !onClose) return null; // Don't render if required props are missing

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={`fixed bottom-4 right-4 flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white z-50`}
    >
      {type === "success" ? (
        <CheckCircle className="w-5 h-5" />
      ) : (
        <XCircle className="w-5 h-5" />
      )}
      <span>{message}</span>
    </motion.div>
  );
}
