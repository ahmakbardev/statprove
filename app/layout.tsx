import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BottomNav from "@/components/bottom-nav";
import { LanguageProvider } from "@/components/language-provider";
import ContactButton from "@/components/contact-button";
import NavigationProgress from "@/components/navigation-progress";
import PageTransition from "@/components/page-transition";
import ScrollToTop from "@/components/scroll-to-top";
import ContentLoader from "@/components/content-loader";
import Toast from "@/components/toast";
import { useToast } from "@/hooks/use-toast";
import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Statprove - Digital Service Provider",
  description:
    "Professional digital services including web development, UI/UX design, and branding.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
