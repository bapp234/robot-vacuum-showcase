"use client";

import { motion } from "framer-motion";

import { cn } from "@/src/utils";

import type { FloatingSpecProps } from "./hero.types";

export default function FloatingSpec({
  title,
  value,
  className,
}: FloatingSpecProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.05,
      }}
      className={cn(
        `
        z-30

        rounded-2xl

        border
        border-border/70

        bg-background/80

        backdrop-blur-xl

        px-5
        py-4

        shadow-lg

        transition-all
        duration-300

        hover:border-primary/40

        hover:shadow-[0_20px_50px_rgba(0,0,0,.15)]

        dark:hover:shadow-[0_20px_50px_rgba(0,0,0,.5)]
        `,
        className
      )}
    >
      <p
        className="
          text-xs
          uppercase
          tracking-wider
          text-muted-foreground
        "
      >
        {title}
      </p>

      <h4
        className="
          mt-2
          text-lg
          font-semibold
        "
      >
        {value}
      </h4>
    </motion.div>
  );
}