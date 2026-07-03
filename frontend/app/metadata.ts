import type { Metadata } from "next";

const siteName = "Xiaomi Robot Vacuum X20+";

const description =
  "Discover Xiaomi Robot Vacuum X20+ with powerful 6000Pa suction, intelligent LDS laser navigation, automatic mop washing, hot air drying, and seamless smart home integration.";

const url = "https://robot-vacuum-showcase.vercel.app";

const previewImage = "/images/og-cover.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },

  description,

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

    siteName,

    title: siteName,

    description,

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