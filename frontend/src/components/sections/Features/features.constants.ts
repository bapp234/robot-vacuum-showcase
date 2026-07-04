import type { FeatureItem } from "./features.types";

import {
  Zap,
  Home,
  Waves,
  Radar,
  Brain,
  Trash2,
  Smartphone,
  Battery,
} from "lucide-react";
import type { FeaturesHeaderData } from "./features.types";

export const FEATURES_CONTENT: FeatureItem[] = [
  {
    title: "6000Pa Powerful Suction",
    description:
      "High-performance fan blower delivers up to 6000Pa suction power for deep cleaning of dust, hair and debris.",
    icon: Zap,
  },
  {
    title: "All-in-One Smart Station",
    description:
      "Automated dust collection, mop washing and hot air drying for fully hands-free operation.",
    icon: Home,
  },
  {
    title: "LDS Laser Navigation",
    description:
      "360° laser mapping ensures precise navigation and efficient cleaning paths.",
    icon: Radar,
  },
  {
    title: "Large Water Tank System",
    description:
      "Supports extended mopping sessions with optimized water distribution system.",
    icon: Waves,
  },
  {
    title: "AI Obstacle Avoidance",
    description:
      "Smart sensors detect and avoid obstacles even in low-light conditions.",
    icon: Brain,
  },
  {
    title: "Auto Dust Collection",
    description:
      "Dustbin is automatically emptied into the base station within seconds.",
    icon: Trash2,
  },
  {
    title: "Smart App Control",
    description:
      "Control schedules, zones, and cleaning modes via mobile app.",
    icon: Smartphone,
  },
  {
    title: "Long Battery Life",
    description:
      "High-capacity battery supports extended cleaning cycles for large homes.",
    icon: Battery,
  },
] as const;

export const FEATURES_HEADER: FeaturesHeaderData = {
  title: "Intelligent Features",
  description:
    "Advanced AI-powered Xiaomi X20+ system for autonomous cleaning, precision mapping and smart automation.",
};
export const FEATURES_IMAGE = "/images/features/robot.webp";