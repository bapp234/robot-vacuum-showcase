"use client";

import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid nền, mờ dần ra rìa bằng mask radial */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          dark:opacity-[0.04]
          [background-image:linear-gradient(to_right,rgba(0,0,0,.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.15)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)]
          [background-size:48px_48px]
          [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_40%,transparent_100%)]
        "
      />

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, -25, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -left-24 top-[10%]
          h-[380px] w-[380px]
          rounded-full
          bg-orange-500/15
          dark:bg-primary/10
          blur-[130px]
        "
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute -right-16 bottom-[10%]
          h-[420px] w-[420px]
          rounded-full
          bg-amber-500/15
          dark:bg-orange-500/8
          blur-[140px]
        "
      />

      {/* Blob 3 – tạo điểm nhấn ở trung tâm, rất nhẹ */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute left-1/2 top-1/2
          h-[300px] w-[300px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-yellow-400/10
          dark:bg-amber-400/6
          blur-[110px]
        "
      />

      {/* Fade top/bottom để hoà vào section trên/dưới */}
      <div className="absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}