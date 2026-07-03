import { cva } from "class-variance-authority";

export const spinnerVariants = cva(
  "animate-spin rounded-full border-current border-t-transparent",
  {
    variants: {
      size: {
        xs: "h-3 w-3 border",
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-[3px]",
        lg: "h-8 w-8 border-4",
        xl: "h-12 w-12 border-4",
      },

      variant: {
        primary: "text-primary",
        white: "text-white",
        muted: "text-muted",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);