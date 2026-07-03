import { cva } from "class-variance-authority";

export const dividerVariants = cva("w-full shrink-0", {
  variants: {
    orientation: {
      horizontal: "h-px",
      vertical: "h-full w-px",
    },

    variant: {
      solid: "bg-border",

      subtle: "bg-border/40",

      gradient:
        "bg-gradient-to-r from-transparent via-border to-transparent",

      primary:
        "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
    },

    spacing: {
      none: "",

      sm: "my-4",

      md: "my-8",

      lg: "my-12",

      xl: "my-20",
    },
  },

  defaultVariants: {
    orientation: "horizontal",
    variant: "gradient",
    spacing: "md",
  },
});