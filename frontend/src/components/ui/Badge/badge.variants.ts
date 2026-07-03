import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "rounded-full",
    "px-3 py-1",
    "text-xs font-semibold uppercase tracking-wider",
    "transition-colors",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary/10 text-primary border border-primary/20",

        secondary:
          "bg-secondary text-foreground",

        outline:
          "border border-border bg-transparent text-foreground",

        success:
          "bg-green-100 text-green-700",

        warning:
          "bg-yellow-100 text-yellow-700",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);