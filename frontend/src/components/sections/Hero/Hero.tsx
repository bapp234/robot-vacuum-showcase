"use client";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";

import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import BackgroundEffects from "./BackgroundEffects";
import ScrollIndicator from "./ScrollIndicator";

import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeUp,
} from "@/src/animations/hero";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="
        relative
        overflow-hidden
        pt-28
        lg:pt-16
        pb-16
      "
    >
  <BackgroundEffects />

      <Container>
        <motion.div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
            lg:gap-10
            xl:gap-20
          "
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <HeroContent />

          <HeroVisual />
        </motion.div>
      </Container>
      <ScrollIndicator />
    </Section>
  );
}