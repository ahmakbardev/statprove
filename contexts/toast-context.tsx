"use client";

import type React from "react";
import { createContext, useContext, useCallback, useState } from "react";
import Toast from "@/components/toast";

type ToastType = "success" | "error";

interface ToastContextType {
  showToast: (type: ToastType, message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<{
    type: ToastType;
    message: string;
  } | null>(null);

  const showToast = useCallback((type: ToastType, message: string) => {
    setToast({ type, message });
  }, []);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
