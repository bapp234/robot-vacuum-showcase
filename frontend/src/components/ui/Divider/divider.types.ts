import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { dividerVariants } from "./divider.variants";

export interface DividerProps
  extends HTMLAttributes<HTMLHRElement>,
    VariantProps<typeof dividerVariants> {}