"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import ClaimOfferModal from "@/src/components/layout/ClaimOfferModal";

interface ModalContextValue {
  openClaimOffer: () => void;
  closeClaimOffer: () => void;
}

const ModalContext = createContext<ModalContextValue | null>(null);

interface ModalProviderProps {
  children: ReactNode;
}

export default function ModalProvider({
  children,
}: ModalProviderProps) {
  const [open, setOpen] = useState(false);

  const openClaimOffer = () => {
    console.log("[Analytics] Hero CTA Click");
    setOpen(true);
  };

  const closeClaimOffer = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openClaimOffer,
        closeClaimOffer,
      }}
    >
      {children}

      <ClaimOfferModal
        open={open}
        onClose={closeClaimOffer}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }

  return context;
}