import { cn } from "@/src/utils";

import { inputVariants } from "./input.variants";
import type { InputProps } from "./input.types";

export default function Input({
  label,
  helperText,
  errorMessage,
  error,
  className,
  id,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={cn(
          inputVariants({
            error,
          }),
          className
        )}
        {...props}
      />

      {errorMessage ? (
        <p className="text-sm text-destructive">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p className="text-sm text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}