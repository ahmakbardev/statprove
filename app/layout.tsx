import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import BottomNav from "@/components/bottom-nav"
import { LanguageProvider } from "@/components/language-provider"
import ContactButton from "@/components/contact-button"
import type React from "react"

export const metadata = {
  title: "Statprove - Digital Service Provider",
  description: "Professional digital services including web development, UI/UX design, and branding.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen pb-20 md:pb-0">
              <Header />
              <main className="flex-grow">{children}</main>
              <BottomNav />
              <ContactButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

