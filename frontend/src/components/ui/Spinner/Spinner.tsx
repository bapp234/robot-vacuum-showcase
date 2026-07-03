import { cn } from "@/src/utils";

import { spinnerVariants } from "./spinner.variants";
import type { SpinnerProps } from "./spinner.types";

export default function Spinner({
  className,
  size,
  variant,
  ...props
}: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        spinnerVariants({
          size,
          variant,
        }),
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}