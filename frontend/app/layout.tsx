import type { Viewport } from "next";

import { Inter, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export { metadata } from "./metadata";


import {
  ThemeProvider,
  ModalProvider,
} from "@/src/providers";

import Header from "@/src/components/layout/Header";
import Footer from "@/src/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#09090b",
    },
  ],

  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${manrope.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >

          <ModalProvider>

            <Header />

            <main>
              {children}
            </main>

            <Footer />

          </ModalProvider>

        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}