"use client";

import { HERO_CONTENT } from "./hero.constants";
import { motion } from "framer-motion";

import {
  fadeUp,
} from "@/src/animations/hero";
export default function HeroStats() {
  return (
    <motion.div
    variants={fadeUp} className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
      {HERO_CONTENT.stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-2xl font-bold md:text-3xl">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}