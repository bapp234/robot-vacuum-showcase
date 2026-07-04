"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

import Logo from "@/src/components/layout/Logo";

import { FOOTER_BRAND } from "./footer.constants";

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
];

export default function FooterBrand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col"
    >
      {/* Logo */}

      <Logo />

      {/* Brand */}

      <h3 className="mt-6 text-xl font-heading font-semibold">
        {FOOTER_BRAND.title}
      </h3>

      <p className="mt-4 max-w-sm leading-7 text-white/70">
        {FOOTER_BRAND.description}
      </p>

      {/* Social */}

      <div className="mt-8 flex items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={social.label}
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <Link
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-border

                  bg-card/40

                  backdrop-blur

                  transition-all
                  duration-300

                  hover:border-primary/40
                  hover:bg-primary/10
                  hover:text-primary
                "
              >
                <Icon size={18} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}