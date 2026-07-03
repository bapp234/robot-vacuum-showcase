import { cn } from "@/src/utils";

import { dividerVariants } from "./divider.variants";
import type { DividerProps } from "./divider.types";

export default function Divider({
  className,
  orientation,
  variant,
  spacing,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden="true"
      className={cn(
        dividerVariants({
          orientation,
          variant,
          spacing,
        }),
        className
      )}
      {...props}
    />
  );
}