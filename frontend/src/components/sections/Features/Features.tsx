"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import FeatureCard from "./FeatureCard";
import BackgroundEffects from "./BackgroundEffects";
import BackgroundGlow from "./BackgroundGlow";
import {
  FEATURES_HEADER,
  FEATURES_CONTENT,
  FEATURES_IMAGE,
} from "./features.constants";
import {
  containerVariants,
  itemVariants,
  imageVariants,
} from "@/src/animations/features";

const FIRST_GROUP = FEATURES_CONTENT.slice(0, 4);
const SECOND_GROUP = FEATURES_CONTENT.slice(4);

export default function Features() {
  return (
    <Section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      <BackgroundEffects />
      <BackgroundGlow />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {FEATURES_HEADER.title}
          </h2>
          <p className="mt-4 text-muted text-sm md:text-base">
            {FEATURES_HEADER.description}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FIRST_GROUP.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative z-10 order-[var(--order-mobile)] lg:order-[var(--order-desktop)]"
              style={
                {
                  "--order-mobile": i + 1,
                  "--order-desktop": i + 1,
                } as React.CSSProperties
              }
            >
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
          <motion.div
            variants={imageVariants}
            className="
              flex items-center justify-center relative z-20
              order-[var(--order-mobile)] lg:order-[var(--order-desktop)]
              my-4 lg:-my-20
            "
            style={
              {
                "--order-mobile": FIRST_GROUP.length + SECOND_GROUP.length + 1,
                "--order-desktop": FIRST_GROUP.length + 1,
              } as React.CSSProperties
            }
          >
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute
                h-[220px] w-[220px]
                lg:h-[280px] lg:w-[280px]
                rounded-full
                bg-gradient-to-br
                from-primary/30
                via-orange-400/20
                to-amber-300/20
                blur-[60px]
                -z-10
              "
            />
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 1.5, 0, -1.5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9,
              }}
            >
              <Image
                src={FEATURES_IMAGE}
                alt="Xiaomi X20+ Center View"
                width={360}
                height={360}
                priority
                className="
                  w-72
                  max-w-[260px]
                  lg:max-w-[340px]
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-110
                  hover:-rotate-2
                  drop-shadow-[0_30px_60px_rgba(0,0,0,.22)]
                  dark:drop-shadow-[0_40px_80px_rgba(0,0,0,.55)]
                "
              />
            </motion.div>
          </motion.div>
          {SECOND_GROUP.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative z-10 order-[var(--order-mobile)] lg:order-[var(--order-desktop)]"
              style={
                {
                  "--order-mobile": FIRST_GROUP.length + 1 + i,
                  "--order-desktop": FIRST_GROUP.length + 2 + i,
                } as React.CSSProperties
              }
            >
              <FeatureCard
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}