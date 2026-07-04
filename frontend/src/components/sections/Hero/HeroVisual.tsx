"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import {
  scaleIn,
  floatingRobot,
  floatingTransition,
} from "@/src/animations/hero";



import BackgroundGlow from "./BackgroundGlow";
import FloatingSpec from "./FloatingSpec";
import {
  FLOATING_SPECS,
  HERO_IMAGE,
} from "./hero.constants";

const positions = {
  "top-left": `
    absolute
    top-8
    left-0
    lg:-left-6
  `,

  "top-right": `
    absolute
    top-16
    right-0
    lg:-right-6
  `,

  "bottom-left": `
    absolute
    bottom-20
    left-2
    lg:-left-4
  `,

  "bottom-right": `
    absolute
    bottom-16
    right-2
    lg:-right-4
  `,
} as const;

export default function HeroVisual() {
  return (
    <div
      className="
      relative
      mx-auto
      flex
      w-full
      max-w-[640px]
      items-center
      justify-center
      lg:max-w-[700px]
    "
    >
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BackgroundGlow />
      </motion.div>
      <motion.div variants={scaleIn}
        animate={floatingRobot}
        transition={floatingTransition}
      >

        <Image
          src={HERO_IMAGE}
          alt="Robot Vacuum"
          width={620}
          height={620}
          priority
          className="
          relative
          z-20
          h-[500px]
          w-full
          max-w-[180px]
          xl:max-w-[580px]
          object-contain
          lg:-translate-x-8
          lg:translate-y-0
          xl:-translate-x-8
          -translate-x-7
          -translate-y-7
          drop-shadow-[0_30px_60px_rgba(0,0,0,.22)]
          dark:drop-shadow-[0_40px_80px_rgba(0,0,0,.55)]
      "
        />
      </motion.div>

      {FLOATING_SPECS.map((item) => (
        <FloatingSpec
          key={item.title}
          title={item.title}
          value={item.value}
          delay={item.delay}
          className={positions[item.position]}
        />
      ))}
    </div>
  );
}