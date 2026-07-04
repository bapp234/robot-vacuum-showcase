import type { HTMLAttributes } from "react";

export interface ClaimOfferModalProps
  extends HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}