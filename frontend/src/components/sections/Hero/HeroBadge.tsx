"use client";

import { motion } from "framer-motion";

import { cn } from "@/src/utils";

interface HeroBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroBadge({
  children,
  className,
}: HeroBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      className={cn(
        `
        inline-flex
        items-center
        gap-3

        rounded-full

        border
        border-border/60

        bg-background/70

        px-5
        py-2.5

        backdrop-blur-xl

        shadow-lg

        transition-all
        duration-300
      `,
        className
      )}
    >
      {/* Pulse Dot */}

      <span className="relative flex h-3 w-3">
        {/* Outer pulse */}

        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            bg-orange-500
            opacity-70
            animate-ping
          "
        />

        {/* Inner dot */}

        <span
          className="
            relative
            inline-flex
            h-3
            w-3
            rounded-full
            bg-orange-500
            shadow-[0_0_12px_rgba(245,158,11,.6)]
          "
        />
      </span>

      {/* Text */}

      <span
        className="
          text-sm
          font-medium
          tracking-wide
          text-foreground
        "
      >
        {children}
      </span>
    </motion.div>
  );
}