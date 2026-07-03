import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex h-11 w-full rounded-xl border",
    "bg-card",
    "px-4",
    "text-sm",
    "text-foreground",
    "placeholder:text-muted",
    "transition-all duration-300",

    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-primary/20",
    "focus:border-primary",

    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
  ],
  {
    variants: {
      error: {
        true: "border-destructive focus:ring-destructive/20",
        false: "border-border",
      },
    },

    defaultVariants: {
      error: false,
    },
  }
);