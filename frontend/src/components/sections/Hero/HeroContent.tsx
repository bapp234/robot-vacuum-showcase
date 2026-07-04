"use client";

import Button from "@/src/components/ui/Button";
import { useModal } from "@/src/providers/ModalProvider";
import HeroBadge from "./HeroBadge";
import HeroStats from "./HeroStats";
import { HERO_CONTENT } from "./hero.constants";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import {
  fadeUp,
} from "@/src/animations/hero";

export default function HeroContent() {
  const { openClaimOffer } = useModal();

  return (
    <div className="max-w-2xl">
      <HeroBadge>
        {HERO_CONTENT.badge}
      </HeroBadge>

      <motion.h1
        className="mt-6 text-5xl font-heading font-bold leading-tight tracking-tight md:text-7xl"
        variants={fadeUp}
        initial="hidden"
        animate="show"
      >
        {HERO_CONTENT.title}

        <span className="mt-2 block text-primary">
          {HERO_CONTENT.highlight}
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
        {HERO_CONTENT.description}
      </motion.p>

      <motion.div
        variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
        <Button
          size="lg"
          onClick={openClaimOffer}
          className="
    group
    relative
    overflow-hidden

    transition-all
    duration-300

    hover:scale-[1.03]
    hover:-translate-y-1

    hover:shadow-[0_18px_45px_rgba(249,115,22,.35)]

    active:scale-95
  "
        >
          <span className="relative z-10">
            {HERO_CONTENT.primaryCTA}
          </span>
          <ArrowRight
            className="
            h-5
            w-5

            transition-transform
            duration-300

            group-hover:translate-x-1
        "
          />
          <span
            className="
      absolute
      inset-0

      bg-gradient-to-r
      from-orange-500
      via-orange-400
      to-orange-500

      opacity-0

      transition-opacity
      duration-300

      group-hover:opacity-15
    "
          />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="
    transition-all
    duration-300

    hover:-translate-y-1

    hover:bg-secondary

    hover:border-primary/40

    hover:shadow-lg
  "
        >
          {HERO_CONTENT.secondaryCTA}

        </Button>

      </motion.div>

      <HeroStats />
    </div>
  );
}