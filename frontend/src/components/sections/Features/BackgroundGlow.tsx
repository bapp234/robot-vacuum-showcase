"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {/* Vòng glow ngoài, xoay nhẹ + đập nhịp */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 8, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute
          h-[260px] w-[80%] max-w-[900px]
          rounded-[100%]
          bg-gradient-to-r
          from-orange-400/15 via-amber-500/8 to-yellow-400/15
          dark:from-primary/15 dark:via-orange-600/6 dark:to-yellow-500/15
          blur-[110px]
        "
      />

      {/* Lõi glow trong, sáng hơn, tạo điểm nhấn */}
      <motion.div
        animate={{
          scaleX: [1, 1.2, 1],
          scaleY: [1, 0.9, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="
          absolute
          h-[140px] w-[45%] max-w-[500px]
          rounded-[100%]
          bg-gradient-to-r
          from-primary/20 via-orange-400/15 to-amber-300/20
          blur-[90px]
        "
      />
    </div>
  );
}