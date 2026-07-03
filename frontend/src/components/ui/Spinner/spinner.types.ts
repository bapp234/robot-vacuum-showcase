import type { HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";

import { spinnerVariants } from "./spinner.variants";

export interface SpinnerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}