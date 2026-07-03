"use client";

import { X } from "lucide-react";

import Button from "../Button";
// import { cn } from "@/src/utils";

import type { ModalHeaderProps } from "./modal.types";

export default function ModalHeader({
  title,
  description,
  showCloseButton = true,
  onClose,
}: ModalHeaderProps) {
  return (
    <div className="relative mb-8">
      {showCloseButton && (
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 rounded-full"
          onClick={onClose}
        >
          <X size={18} />
        </Button>
      )}

      <h2 className="text-3xl font-heading font-bold">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}