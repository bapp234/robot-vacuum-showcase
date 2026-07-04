import type {
  FAQHeaderContent,
  FAQItem,
} from "./faq.types";

export const FAQ_HEADER: FAQHeaderContent = {
  badge: "Support",
  title: "Frequently Asked Questions",
  description:
    "Find answers to the most common questions about the Xiaomi Robot Vacuum X20+, from cleaning performance to smart home integration.",
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "battery",
    question: "How long does the battery last?",
    answer:
      "The Xiaomi Robot Vacuum X20+ provides up to 180 minutes of cleaning on a single charge, depending on the selected cleaning mode and floor type.",
  },
  {
    id: "carpet",
    question: "Can it clean carpets automatically?",
    answer:
      "Yes. The robot detects carpets in real time and automatically increases suction power for deeper cleaning while lifting the mop pads when necessary.",
  },
  {
    id: "navigation",
    question: "Does it avoid obstacles?",
    answer:
      "Absolutely. With LDS laser navigation and AI-powered obstacle avoidance, it intelligently moves around furniture, cables, shoes, and other everyday objects.",
  },
  {
    id: "remote",
    question: "Can I control the robot remotely?",
    answer:
      "Yes. Using the Xiaomi Home App, you can start cleaning, schedule tasks, select rooms, create no-go zones, and monitor progress from anywhere.",
  },
  {
    id: "voice",
    question: "Does it support voice assistants?",
    answer:
      "Yes. The X20+ is compatible with Google Assistant and Amazon Alexa for convenient hands-free voice control.",
  },
  {
    id: "maintenance",
    question: "How often should I replace the filter?",
    answer:
      "For optimal performance, replace the HEPA filter every 3–6 months, depending on usage frequency and your home environment.",
  },
];