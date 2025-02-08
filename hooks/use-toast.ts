"use client"

import { useState, useCallback } from "react"

interface ToastState {
  message: string
  type: "success" | "error"
}

export function useToast() {
  const [toast, setToast] = useState<ToastState | null>(null)

  const showToast = useCallback((type: "success" | "error", message: string) => {
    setToast({ type, message })
  }, [])

  const hideToast = useCallback(() => {
    setToast(null)
  }, [])

  return { toast, showToast, hideToast }
}
