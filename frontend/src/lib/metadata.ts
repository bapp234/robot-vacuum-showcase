import type { Metadata } from "next";

import { SITE } from "@/src/constants/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`,
  },

  description: SITE.description,

  keywords: [...SITE.keywords],

  authors: [
    {
      name: SITE.author,
    },
  ],

  creator: SITE.author,

  openGraph: {
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    images: [SITE.ogImage],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },

  robots: {
    index: true,
    follow: true,
  },
};