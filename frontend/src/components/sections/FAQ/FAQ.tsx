"use client";

import { useMemo, useState } from "react";

import Container from "@/src/components/ui/Container";
import Section from "@/src/components/ui/Section";

import FAQHeader from "./FAQHeader";
import FAQSearch from "./FAQSearch";
import FAQAccordion from "./FAQAccordion";

import { FAQ_ITEMS } from "./faq.constants";

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filteredItems = useMemo(() => {
    const keyword = search.toLowerCase();

    return FAQ_ITEMS.filter(
      (item) =>
        item.question
          .toLowerCase()
          .includes(keyword) ||
        item.answer
          .toLowerCase()
          .includes(keyword)
    );
  }, [search]);

  return (
    <Section
      id="faq"
      className="py-24 lg:py-32"
    >
      <Container className="max-w-4xl">
        <FAQHeader />

        <FAQSearch
          value={search}
          onChange={setSearch}
        />

        <FAQAccordion
          items={filteredItems}
        />
      </Container>
    </Section>
  );
}