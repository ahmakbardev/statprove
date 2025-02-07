"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const useScrollToTopOnNavigation = () => {
  const [mounted, setMounted] = useState(false);
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }

    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Panggil scroll ke atas setelah render
    handleRouteChange();

    // Event listener untuk navigasi history
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [searchParams, mounted]);
};
