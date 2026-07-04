"use client";

import { useEffect, useState } from "react";

import { NAVIGATION } from "@/src/constants/navigation";


export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>(
    NAVIGATION[0]?.href ?? "#overview"
  );

  useEffect(() => {
    const sections = NAVIGATION.map((item) =>
      document.querySelector(item.href)
    ).filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setActiveSection(`#${entry.target.id}`);
        });
      },
      {
        root: null,
        threshold: 0.55,
        rootMargin: "-80px 0px -40% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}