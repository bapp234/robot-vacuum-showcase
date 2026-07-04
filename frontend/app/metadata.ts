import type { Metadata } from "next";
import { BRAND } from "@/src/constants/brand";

const url = "https://robot-vacuum-showcase.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title: {
    default: BRAND.fullName,
    template: `%s | ${BRAND.fullName}`,
  },
  manifest: "/site.webmanifest",
  description: BRAND.description,

  applicationName: BRAND.fullName,

  category: "Technology",

  keywords: [
    "Xiaomi",
    "Robot Vacuum",
    "X20+",
    "Robot Cleaner",
    "Smart Home",
    "AI Cleaning",
    "Landing Page",
    "Next.js",
    "Tailwind CSS",
  ],

  authors: [
    {
      name: "Hoang Sang",
    },
  ],

  creator: "Hoang Sang",

  publisher: "Hoang Sang",

  alternates: {
    canonical: "/",
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    url,

    title: BRAND.fullName,

    description: BRAND.description,

    siteName: BRAND.fullName,

    locale: "en_US",

    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: BRAND.fullName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: BRAND.fullName,

    description: BRAND.description,

    images: ["/images/og-cover.jpg"],
  },

  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/apple-touch-icon.png",
  },

  appleWebApp: {
    capable: true,
    title: BRAND.fullName,
    statusBarStyle: "black-translucent",
  },
};