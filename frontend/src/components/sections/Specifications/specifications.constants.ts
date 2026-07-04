export const SPECS_HEADER = {
  title: "Technical Specifications",
  description:
    "Explore every specification designed to deliver smarter, faster, and more effortless cleaning.",
};

export const SPECS_CATEGORIES = [
  {
    category: "Cleaning Performance",
    items: [
      { label: "Maximum Suction Power", value: "6000 Pa" },
      { label: "Cleaning Modes", value: "Vacuum, Mop, Vacuum & Mop, Vacuum before Mop" },
      { label: "Mop Type", value: "Dual rotary mop pads (180 rpm)" },
      { label: "Main Brush", value: "Rubber main brush (Anti-tangle)" },
      { label: "Carpet Detection", value: "Auto mop lift (7mm)" },
      { label: "Obstacle Crossing", value: "Up to 20 mm" },
    ],
  },
  {
    category: "Battery & Capacity",
    items: [
      { label: "Battery Capacity", value: "5200 mAh (Lithium-ion)" },
      { label: "Runtime", value: "Approx. 140 minutes" },
      { label: "Charging Time", value: "Approx. 6.5 hours" },
      { label: "Robot Dust Box", value: "350 ml" },
    ],
  },
  {
    category: "Omni Station Features",
    items: [
      { label: "Clean Water Tank", value: "4.0 L" },
      { label: "Dirty Water Tank", value: "4.0 L" },
      { label: "Dust Bag Capacity", value: "2.5 L (Auto dust collection)" },
      { label: "Auto Mop Washing", value: "Yes" },
      { label: "Auto Mop Drying", value: "Yes (Hot Air Drying)" },
    ],
  },
  {
    category: "Smart Navigation & App",
    items: [
      { label: "Navigation System", value: "LDS Laser + 3D Obstacle Avoidance" },
      { label: "Map Storage", value: "Up to 4 multi-floor maps" },
      { label: "Smart Control", value: "Xiaomi Home App / Mi Home App" },
      { label: "Voice Assistant", value: "Amazon Alexa, Google Assistant" },
    ],
  },
] as const;
export const SPECS_IMAGE = "/images/features/robot.webp";