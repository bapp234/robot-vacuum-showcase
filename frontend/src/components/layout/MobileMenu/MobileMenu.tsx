"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "@/src/components/layout/Logo";
import Navigation from "@/src/components/layout/Navigation";

import Button from "@/src/components/ui/Button";
import Divider from "@/src/components/ui/Divider";

import { cn } from "@/src/utils";

import type { MobileMenuProps } from "./mobile-menu.types";

export default function MobileMenu({
  className,
  ...props
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("lg:hidden", className)} {...props}>
      {/* Toggle Button */}

      <button
        type="button"
        aria-label="Toggle mobile menu"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "rounded-xl border border-border bg-card p-2",
          "transition-all duration-300",
          "hover:bg-secondary",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-primary"
        )}
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* Drawer */}

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-screen w-[320px] flex-col",
          "border-l border-border bg-background",
          "px-6 py-5 shadow-2xl",
          "transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-xl p-2 hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <Navigation
          variant="mobile"
          className="flex-1"
        />

        <Divider className="my-6" />

        <Button
          className="mt-6 w-full"
          size="lg"
        >
          Claim Offer
        </Button>
      </aside>
    </div>
  );
}