"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface FAQSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function FAQSearch({
  value,
  onChange,
}: FAQSearchProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="
        mx-auto
        mb-12
        w-full
        max-w-2xl
      "
    >
      <div
        className="
          group
          relative
          flex
          items-center

          overflow-hidden

          rounded-2xl

          border
          border-border/60

          bg-card/60

          backdrop-blur-xl

          transition-all
          duration-300

          focus-within:border-primary/60
          focus-within:shadow-lg
          focus-within:shadow-primary/10
        "
      >
        {/* Search Icon */}

        <Search
          className="
            ml-5

            h-5
            w-5

            text-muted-foreground

            transition-colors

            group-focus-within:text-primary
          "
        />

        {/* Input */}

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search a question..."
          className="
            h-14
            w-full

            bg-transparent

            px-4

            text-sm
            text-foreground

            outline-none

            placeholder:text-muted-foreground
          "
        />

      </div>
    </motion.div>
  );
}