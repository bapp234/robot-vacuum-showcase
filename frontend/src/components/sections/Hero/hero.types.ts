import type { ReactNode } from "react";

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroBadgeProps {
  children: ReactNode;
  className?: string;
}

export interface HeroContentData {
  badge: string;
  title: string;
  highlight: string;
  description: string;

  primaryCTA: string;
  secondaryCTA: string;

  stats: HeroStat[];
}

export type FloatingSpecPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface FloatingSpec {
  title: string;
  value: string;
  position: FloatingSpecPosition;
    delay: number;

}

export interface FloatingSpecProps {
  title: string;
  value: string;
  className?: string;
  delay?: number;
}