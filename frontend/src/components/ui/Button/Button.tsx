import { Loader2 } from "lucide-react";

import { cn } from "@/src/utils";

import { buttonVariants } from "./button.variants";
import type { ButtonProps } from "./button.types";

export default function Button({
  children,
  className,
  variant,
  size,
  fullWidth,
  leftIcon,
  rightIcon,
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          fullWidth,
        }),
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </button>
  );
}