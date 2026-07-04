"use client";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";
import BackgroundEffects from "./BackgroundEffects";
import SpecificationsLeft from "./SpecificationsLeft";
import SpecificationsRight from "./SpecificationsRight";

export default function Specifications() {
  return (
    <Section
      id="specifications"
      className="relative py-24 lg:py-32 border-t border-border/50"
    >
      <BackgroundEffects />

      <Container>
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <SpecificationsLeft />
          <SpecificationsRight />
        </div>
      </Container>
    </Section>
  );
}