import { cn } from "@/src/utils";

import { cardVariants } from "./card.variants";
import type { CardProps } from "./card.types";

export default function Card({
  className,
  variant,
  padding,
  hover,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
          hover,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}