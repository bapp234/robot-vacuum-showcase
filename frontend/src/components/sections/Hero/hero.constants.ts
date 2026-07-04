import type { FloatingSpec, HeroContentData } from "./hero.types";

export const HERO_CONTENT: HeroContentData = {
  badge: "Save your Time and Energy with Our Smart Robot Vacuum",

  title: "Smarter Home Cleaning",

  highlight: "More Life",

  description:
    "Let intelligent automation take care of everyday floor cleaning while you focus on what matters most. Powerful suction, smart navigation, and effortless operation designed for modern homes, apartments, and family living.",

  primaryCTA: "Claim Exclusive Offer",

  secondaryCTA: "Watch Demo",

  stats: [
    {
      value: "70L",
      label: "Clean Water Tank",
    },
    {
      value: "6,5h",
      label: "Max Runtime",
    },
    {
      value: "anti-drop",
      label: "anti-drop and anti-collision sensors",
    },
  ],
};

export const FLOATING_SPECS: FloatingSpec[] = [
  {
    title: "Navigation",
    value: "LDS Laser",
    position: "top-left",
    delay: 0,
  },
  {
    title: "Battery",
    value: "5000mAh",
    position: "top-right",
    delay: 0.8,
  },
  {
    title: "Cleaning",
    value: "4-in-1",
    position: "bottom-left",
        delay: 1.6,

  },
  {
    title: "Suction",
    value: "6000Pa",
    position: "bottom-right",
        delay: 2.4,

  },
] as const;

export const HERO_IMAGE = "/images/hero/robot.webp";