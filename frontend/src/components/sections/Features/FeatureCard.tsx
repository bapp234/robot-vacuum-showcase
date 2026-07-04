"use client";

import type { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="group relative p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-xl transition hover:-translate-y-1 hover:border-primary/40">

      {/* glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-primary/5 blur-xl" />

      <div className="relative">
        {/* icon */}
        <div className="mb-4 text-primary transition-transform group-hover:scale-110">
          <Icon size={28} strokeWidth={1.5} />
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        {/* description */}
        <p className="text-sm text-muted leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}