import Link from "next/link";

import { cn } from "@/src/utils";
import type { NavigationItemProps } from "./navigation.types";

const variants = {
  desktop:
    "group relative inline-flex items-center py-2 text-lg font-bold",

  mobile:
    "block w-full rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300",
};

export default function NavigationItem({
  label,
  href,
  active = false,
  variant = "desktop",
  className,
  ...props
}: NavigationItemProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={cn(
        variants[variant],
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-primary",
        "focus-visible:ring-offset-2",
        variant === "desktop" &&
        (active
          ? "text-primary"
          : "text-foreground/70 transition-colors duration-300 hover:text-foreground"),
        variant === "mobile" &&
        (active
          ? "bg-primary/10 text-primary"
          : "text-foreground/70 hover:bg-secondary hover:text-foreground"),

        className
      )}
      {...props}
    >
      <span>{label}</span>

      {variant === "desktop" && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute bottom-0 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
            active ? "w-full" : "w-0 group-hover:w-full"
          )}
        />
      )}
    </Link>
  );
}