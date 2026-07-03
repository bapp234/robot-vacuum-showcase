"use client";

import type { ReactNode } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({
  children,
}: ModalProviderProps) {
  return <>{children}</>;
}