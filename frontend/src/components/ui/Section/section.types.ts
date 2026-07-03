import type { HTMLAttributes, ReactNode } from "react";

export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

export interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  spacing?: SectionSpacing;
}