"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const NavigationProgress = () => {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isNavigating ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
    />
  );
};

export default NavigationProgress;
