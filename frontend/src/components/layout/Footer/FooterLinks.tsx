"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { FOOTER_LINKS } from "./footer.constants";

export default function FooterLinks() {
  return (
    <div className="grid gap-10 sm:grid-cols-3">
      {FOOTER_LINKS.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >
          <h3 className="mb-5 font-heading text-lg font-semibold">
            {section.title}
          </h3>

          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-muted-foreground
                    transition-colors
                    duration-300
                    hover:text-primary
                  "
                >
                  {link.label}

                  <ArrowRight
                    size={15}
                    className="
                      -translate-x-2
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}