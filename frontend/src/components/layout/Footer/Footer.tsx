"use client";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <Section
  className="
    relative

    bg-[#09090b]

    text-white

    border-t

    border-white/10

    py-24

    overflow-hidden
  "
>
  <div
  className="
absolute
inset-0
pointer-events-none

bg-[radial-gradient(circle_at_top,rgba(249,115,22,.12),transparent_60%)]
"
/>
<Container className="relative z-10">        <div
  className="
    grid
    gap-20

    lg:grid-cols-[360px_1fr]
  "
>
  <FooterBrand />

  <div
    className="
      grid
      gap-16

      lg:grid-cols-[1fr_320px]
      items-start
    "
  >
    <FooterLinks />

    <FooterNewsletter />
  </div>
</div>

        <FooterBottom />
      </Container>
    </Section>
  );
}