import type { Metadata } from "next";
import { BRAND } from "@/src/constants/brand";

const url = "https://robot-vacuum-showcase.vercel.app";

const previewImage = "/images/og-cover.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title: BRAND.fullName,

  description: BRAND.description,

  keywords: [
    "Xiaomi",
    "Robot Vacuum",
    "X20+",
    "Robot Cleaner",
    "Smart Home",
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

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url,

    siteName: BRAND.fullName,

    title: BRAND.fullName,

    description: BRAND.description,

    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Xiaomi Robot Vacuum X20+",
      },
    ],
  },
};