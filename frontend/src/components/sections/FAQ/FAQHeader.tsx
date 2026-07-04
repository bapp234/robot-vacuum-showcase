"use client";

import { motion } from "framer-motion";

import { FAQ_HEADER } from "./faq.constants";

export default function FAQHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        mx-auto
        mb-14
        flex
        max-w-3xl
        flex-col
        items-center
        text-center
      "
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-primary/20
          bg-primary/10
          px-4
          py-1.5
          text-sm
          font-medium
          text-primary
        "
      >
        {FAQ_HEADER.badge}
      </span>

      {/* Title */}

      <h2
        className="
          mt-6
          text-3xl
          font-heading
          font-bold
          tracking-tight

          md:text-5xl
        "
      >
        {FAQ_HEADER.title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-5
          max-w-2xl
          text-base
          leading-8
          text-muted-foreground

          md:text-lg
        "
      >
        {FAQ_HEADER.description}
      </p>
    </motion.div>
  );
}