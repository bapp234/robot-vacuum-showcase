import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "rounded-3xl",
    "border",
    "transition-all duration-300",
  ],
  {
    variants: {
      variant: {
        default:
          "border-border bg-card",

        glass:
          "border-white/20 bg-white/70 backdrop-blur-xl",

        outlined:
          "border-border bg-transparent",
      },

      padding: {
        none: "",

        sm: "p-4",

        md: "p-6",

        lg: "p-8",
      },

      hover: {
        true:
          "hover:-translate-y-1 hover:shadow-xl",

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",

      padding: "md",

      hover: true,
    },
  }
);