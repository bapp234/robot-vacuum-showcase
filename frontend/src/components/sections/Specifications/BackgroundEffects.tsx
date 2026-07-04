"use client";

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
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-orange-300/90
          via-orange-200/70
          to-orange-400/80
          dark:from-orange-600/40
          dark:via-orange-950/40
          dark:to-[#090b14]
        "
      />

      <div
        className="
          absolute
          inset-0
          opacity-100
          [background-image:linear-gradient(to_right,rgba(234,88,12,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,88,12,0.25)_1px,transparent_1px)]
          dark:[background-image:linear-gradient(to_right,rgba(249,115,22,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.15)_1px,transparent_1px)]
          [background-size:56px_56px]
        "
      />
    </div>
  );
}