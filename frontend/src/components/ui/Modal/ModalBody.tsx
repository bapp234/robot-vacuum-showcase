import { cn } from "@/src/utils";

import type { ModalBodyProps } from "./modal.types";

export default function ModalBody({
  children,
  className,
}: ModalBodyProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        className
      )}
    >
      {children}
    </div>
  );
}