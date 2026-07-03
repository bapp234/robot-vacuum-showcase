import type { ReactNode } from "react";
import type { ModalSize } from "./modal.constants";

export interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  children: ReactNode;

  size?: ModalSize;
}

export interface ModalHeaderProps {
  title: ReactNode;

  description?: ReactNode;

  showCloseButton?: boolean;

  onClose?: () => void;
}

export interface ModalBodyProps {
  children: ReactNode;

  className?: string;
}