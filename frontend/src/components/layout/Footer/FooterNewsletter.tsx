"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Button from "@/src/components/ui/Button";

import { FOOTER_NEWSLETTER } from "./footer.constants";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) return;

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setEmail("");
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-xl font-heading font-semibold">
        {FOOTER_NEWSLETTER.title}
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">
        {FOOTER_NEWSLETTER.description}
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3"
      >
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={FOOTER_NEWSLETTER.placeholder}
          className="
            h-12
            rounded-xl
            border
            border-border
            bg-card/40
            px-4
            outline-none
            transition
            focus:border-primary
          "
        />

        <Button type="submit">
          {FOOTER_NEWSLETTER.button}
        </Button>

        {success && (
          <p className="text-sm text-primary">
            ✓ Thanks for subscribing!
          </p>
        )}
      </form>
    </motion.div>
  );
}