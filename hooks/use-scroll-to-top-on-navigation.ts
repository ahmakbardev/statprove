"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export const useScrollToTopOnNavigation = () => {
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    handleRouteChange() // Call on initial load

    // Listen for route changes
    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [searchParams])
}

