"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SPECS_CATEGORIES } from "./specifications.constants";

export default function SpecificationsRight() {
  const [activeCategory, setActiveCategory] = useState<string>(
    SPECS_CATEGORIES[0].category
  );

  return (
    <div className="w-full lg:w-7/12 flex flex-col gap-4">
      {SPECS_CATEGORIES.map((section, index) => {
        const isActive = activeCategory === section.category;

        return (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col border border-border/60 bg-card/40 backdrop-blur-md rounded-2xl overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveCategory(isActive ? "" : section.category)
              }
              className="flex items-center justify-between w-full p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <h3 className="text-lg md:text-xl font-semibold text-foreground">
                {section.category}
              </h3>
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-primary flex-shrink-0 ml-4"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <ul className="flex flex-col px-6 pb-6 gap-3">
                    <div className="w-full h-px bg-border/50 mb-3" />
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 group"
                      >
                        <span className="text-muted-foreground sm:w-1/2 mb-1 sm:mb-0 transition-colors group-hover:text-foreground">
                          {item.label}
                        </span>
                        <span className="font-medium sm:w-1/2 sm:text-right text-foreground">
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}