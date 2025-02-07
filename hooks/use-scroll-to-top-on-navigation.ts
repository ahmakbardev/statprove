"use client";

import { useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "next/navigation";

export const useScrollToTopOnNavigation = () => {
  const searchParams = useSearchParams();
  const hasMounted = useRef(false); // Untuk memastikan tidak error di SSR

  const handleRouteChange = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      setTimeout(handleRouteChange, 0); // Pastikan berjalan setelah hydration
    }

    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, [searchParams, handleRouteChange]);
};
