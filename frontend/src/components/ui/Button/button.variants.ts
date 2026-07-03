import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full",
    "font-medium",
    "transition-all duration-300",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-primary/30",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primaryForeground hover:opacity-90 shadow-lg shadow-primary/20",

        secondary:
          "bg-secondary text-foreground hover:bg-secondary/80",

        outline:
          "border border-border bg-transparent hover:bg-surface",

        ghost:
          "bg-transparent hover:bg-surface",
      },

      size: {
        sm: "h-9 px-4 text-sm",

        md: "h-11 px-6",

        lg: "h-14 px-8 text-lg",

        icon: "h-11 w-11 p-0",
      },

      fullWidth: {
        true: "w-full",

        false: "",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",

      fullWidth: false,
    },
  }
);