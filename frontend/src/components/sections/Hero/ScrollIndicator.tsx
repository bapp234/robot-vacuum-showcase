"use client";

import { Mouse } from "lucide-react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const scrollToFeatures = () => {
    document
      .getElementById("features")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <motion.button
      onClick={scrollToFeatures}
      aria-label="Scroll to features"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        opacity: {
          duration: 0.8,
          delay: 1.2,
        },
        y: {
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className="
      hidden
lg:flex
        group
        
        absolute
        bottom-8
        left-1/2
        z-30

        -translate-x-1/2

        
        flex-col
        items-center
        gap-2

        text-muted-foreground

        transition-colors

        hover:text-primary
        
      "
    >
      <span
        className="
          text-xs
          uppercase
          tracking-[0.25em]
        "
      >
        Scroll
      </span>

      <div
        className="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          border
          border-border

          bg-background/60

          backdrop-blur-md

          transition-all

          group-hover:border-primary
          group-hover:bg-primary/10
          
        "
      >
        <Mouse className="h-5 w-5 " />
      </div>
    </motion.button>
  );
}