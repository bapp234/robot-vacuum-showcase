import { cn } from "@//src/utils";

import { badgeVariants } from "./badge.variants";
import type { BadgeProps } from "./badge.types";

export default function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
        }),
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}