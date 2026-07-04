"use client";

import { useState } from "react";
import Logo from "@/src/components/layout/Logo";
import Navigation from "@/src/components/layout/Navigation";
import ThemeToggle from "@/src/components/layout/ThemeToggle";
import MobileMenu from "@/src/components/layout/MobileMenu";
import ClaimOfferModal from "@/src/components/layout/ClaimOfferModal";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/ui/Container";
import { cn } from "@/src/utils";
import type { HeaderProps } from "./header.types";

export default function Header({
  className,
  ...props
}: HeaderProps) {
  const [open, setOpen] = useState(false);

  const handleLogoClick = () => {
     window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "border-b border-border",
        "bg-background/80 backdrop-blur-xl",
        className
      )}
      {...props}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div onClick={handleLogoClick} className="cursor-pointer transition-transform hover:scale-105">
            <Logo />
          </div>

          <Navigation />

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <Button onClick={() => setOpen(true)}>
              Claim Offer
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <MobileMenu />
          </div>
        </div>
      </Container>
      <ClaimOfferModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}