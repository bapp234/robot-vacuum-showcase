import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },

  show: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};

export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: .92,
  },

  show: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: .8,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: .15,
      delayChildren: .2,
    },
  },
};

export const floatingRobot = {
  y: [0, -10, 0],
  rotate: [0, 1, 0, -1, 0],
};

export const floatingTransition = {
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut" as const,
};