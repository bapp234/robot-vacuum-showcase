"use client";

import * as Dialog from "@radix-ui/react-dialog";

import { cn } from "@/src/utils";

import { MODAL_SIZES } from "./modal.constants";
import type { ModalProps } from "./modal.types";

export default function Modal({
  open,
  onOpenChange,
  children,
  size = "md",
}: ModalProps) {
  return (
    <Dialog.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed inset-0 z-50
            bg-black/40
            backdrop-blur-sm
            data-[state=open]:animate-in
            data-[state=closed]:animate-out
          "
        />

        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50",
            "-translate-x-1/2 -translate-y-1/2",

            MODAL_SIZES[size],

            "w-[92%]",

            "rounded-[32px]",

            "border border-border",

            "bg-card/95",

            "backdrop-blur-2xl",

            "p-8",

            "shadow-[0_20px_80px_rgba(0,0,0,.15)]",

            "outline-none",

            "data-[state=open]:animate-in",

            "data-[state=open]:zoom-in-95",

            "data-[state=open]:fade-in-0",

            "data-[state=open]:slide-in-from-bottom-5"
          )}
        >
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}