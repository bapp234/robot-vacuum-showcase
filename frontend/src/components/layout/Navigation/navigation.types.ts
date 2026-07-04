import type { HTMLAttributes } from "react";
import type { ComponentPropsWithoutRef } from "react";


export type NavigationVariant = "desktop" | "mobile";

export interface NavigationItemProps
  extends ComponentPropsWithoutRef<"a"> {

  label: string;
  href: string;
  active?: boolean;
  variant?: NavigationVariant;
}

export interface NavigationProps
  extends HTMLAttributes<HTMLElement> {
  variant?: NavigationVariant;
  activeHref?: string;
}