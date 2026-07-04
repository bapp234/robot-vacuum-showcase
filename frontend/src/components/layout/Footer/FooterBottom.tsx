"use client";

import { ArrowUp } from "lucide-react";

export default function FooterBottom() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <div
      className="
        mt-16
        flex
        flex-col
        items-center
        justify-between
        gap-5

        border-t
        border-border/50

        pt-8

        text-sm
        text-muted-foreground

        md:flex-row
      "
    >
      <p>
        © {new Date().getFullYear()} Xiaomi Robot Vacuum X20+ Showcase.
        All rights reserved.
      </p>

      <button
        onClick={scrollTop}
        className="
          flex
          items-center
          gap-2

          rounded-full

          border
          border-border

          px-4
          py-2

          transition-all

          hover:border-primary
          hover:text-primary
        "
      >
        <ArrowUp size={16} />

        Back to top
      </button>
    </div>
  );
}