import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { cardVariants } from "./card.variants";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}