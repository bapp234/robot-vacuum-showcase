"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        -z-10
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* ---------------- Background Gradient ---------------- */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-slate-50
          via-white
          to-slate-100

          dark:from-[#050816]
          dark:via-[#080b1d]
          dark:to-black
        "
      />

      {/* ---------------- Mesh Gradient ---------------- */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_top,#60a5fa18,transparent_42%),radial-gradient(circle_at_bottom_right,#38bdf818,transparent_35%)]

          dark:bg-[radial-gradient(circle_at_top,#3b82f640,transparent_40%),radial-gradient(circle_at_bottom_right,#06b6d430,transparent_35%)]
        "
      />

      {/* ---------------- Grid Pattern ---------------- */}

      <div
        className="
          absolute
          inset-0

          opacity-[0.04]

          dark:opacity-[0.05]

          [background-image:linear-gradient(to_right,rgba(0,0,0,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.08)_1px,transparent_1px)]

          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]

          [background-size:56px_56px]
        "
      />

      {/* ---------------- Left Orb ---------------- */}

      <motion.div
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-28
          top-0

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-300/30

          dark:bg-primary/20

          blur-[140px]
        "
      />

      {/* ---------------- Right Orb ---------------- */}

      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-32
          bottom-0

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-300/25

          dark:bg-cyan-500/15

          blur-[170px]
        "
      />

      {/* ---------------- Top Highlight ---------------- */}

      <motion.div
        animate={{
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-0

          h-[320px]
          w-[700px]

          -translate-x-1/2

          rounded-full

          bg-blue-200/40

          dark:bg-primary/15

          blur-[130px]
        "
      />

      {/* ---------------- Bottom Fade ---------------- */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0

          h-40

          bg-gradient-to-t

          from-background

          to-transparent
        "
      />
    </div>
  );
}