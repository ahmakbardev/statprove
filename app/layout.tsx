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
import type React from "react";

export const metadata = {
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
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
        </ThemeProvider>
      </body>
    </html>
  );
}
