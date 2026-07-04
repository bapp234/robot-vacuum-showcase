"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import type { FAQItem as FAQItemType } from "./faq.types";

interface FAQItemProps {
  item: FAQItemType;
  open: boolean;
  onToggle: () => void;
}

export default function FAQItem({
  item,
  open,
  onToggle,
}: FAQItemProps) {
  return (
    <motion.div
      layout
      className="
        overflow-hidden
        rounded-2xl
        border
        border-border/60
        bg-card/40
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-primary/40
        hover:shadow-lg
      "
    >
      <button
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          p-6
          text-left
        "
      >
        <h3 className="text-lg font-semibold">
          {item.question}
        </h3>

        <motion.div
          animate={{
            rotate: open ? 180 : 0,
          }}
          transition={{
            duration: 0.25,
          }}
        >
          <ChevronDown
            className="text-primary"
            size={22}
          />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <div className="px-6 pb-6">
              <div className="mb-5 h-px bg-border/50" />

              <p className="leading-8 text-muted-foreground">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}