"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import FAQItem from "./FAQItem";
import type { FAQItem as FAQItemType } from "./faq.types";

interface FAQAccordionProps {
  items: FAQItemType[];
}

export default function FAQAccordion({
  items,
}: FAQAccordionProps) {
  const [openId, setOpenId] = useState(
    items[0]?.id ?? ""
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
      className="flex flex-col gap-4"
    >
      {items.map((item) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 24,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
        >
          <FAQItem
            item={item}
            open={openId === item.id}
            onToggle={() =>
              setOpenId(
                openId === item.id
                  ? ""
                  : item.id
              )
            }
          />
        </motion.div>
      ))}
    </motion.div>
  );
}