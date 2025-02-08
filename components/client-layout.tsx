"use client";

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
import { ToastProvider } from "@/contexts/toast-context";
import type React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <ToastProvider>
        <LanguageProvider>
          <ScrollToTop />
          <PageTransition>
            <div className="flex flex-col min-h-screen">
              <Header />
              <ContentLoader>
                <main className="flex-grow pb-16 md:pb-0">{children}</main>
                <Footer />
              </ContentLoader>
              <BottomNav />
              <ContactButton />
            </div>
          </PageTransition>
          <NavigationProgress />
        </LanguageProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
