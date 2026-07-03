import type { Viewport } from "next";

import { Inter, Manrope } from "next/font/google";

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
  themeColor: "#ff6900",
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
        <ThemeProvider>

          <ModalProvider>

            <Header />

            <main>
              {children}
            </main>

            <Footer />

          </ModalProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}