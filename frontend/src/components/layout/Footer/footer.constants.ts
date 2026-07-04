import type {
  FooterBrandContent,
  FooterNewsletterContent,
  FooterSection,
} from "./footer.types";

export const FOOTER_BRAND: FooterBrandContent = {
  title: "Xiaomi Robot Vacuum X20+",
  description:
    "Smarter cleaning for every home. Powerful suction, intelligent navigation, and effortless automation designed for modern living.",
};

export const FOOTER_LINKS: FooterSection[] = [
  {
    title: "Product",
    links: [
      {
        label: "Features",
        href: "#features",
      },
      {
        label: "Specifications",
        href: "#specifications",
      },
      {
        label: "FAQ",
        href: "#faq",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        label: "Help Center",
        href: "#",
      },
      {
        label: "Privacy Policy",
        href: "#",
      },
      {
        label: "Terms of Service",
        href: "#",
      },
    ],
  },

  {
    title: "Company",
    links: [
      {
        label: "About",
        href: "#",
      },
      {
        label: "Contact",
        href: "#",
      },
      {
        label: "GitHub",
        href: "https://github.com",
      },
    ],
  },
];

export const FOOTER_NEWSLETTER: FooterNewsletterContent = {
  title: "Stay Updated",
  description:
    "Get product news, exclusive offers, and smart cleaning tips delivered to your inbox.",
  placeholder: "Enter your email",
  button: "Subscribe",
};