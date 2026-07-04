import { NAVIGATION } from "@/src/constants/navigation";
import { cn } from "@/src/utils";

import NavigationItem from "./NavigationItem";
import type { NavigationProps } from "./navigation.types";

export default function Navigation({
  variant = "desktop",
  activeHref,
  className,
  ...props
}: NavigationProps) {
  return (
    <nav
      aria-label="Primary Navigation"
      className={cn(
        variant === "desktop"
          ? "hidden items-center gap-8 lg:flex"
          : "flex flex-col gap-2",
        className
      )}
      {...props}
    >
      {NAVIGATION.map((item) => (
        <NavigationItem
          key={item.href}
          label={item.label}
          href={item.href}
          variant={variant}
          active={activeHref === item.href}
        />
      ))}
    </nav>
  );
}