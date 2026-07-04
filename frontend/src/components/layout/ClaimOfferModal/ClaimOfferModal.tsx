"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

import { cn } from "@/src/utils";
import Button from "@/src/components/ui/Button";

import type { ClaimOfferModalProps } from "./claim-offer-modal.types";


export default function ClaimOfferModal({
    open,
    onClose,
    className,
    ...props
}: ClaimOfferModalProps) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1200);
    };

    if (!open) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999]",
                className
            )}
            {...props}
        >
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="flex h-screen items-center justify-center">

                {/* Modal */}
                <div className="relative z-[10000] w-[92%] max-w-md rounded-2xl bg-background border border-border p-6 shadow-2xl">
                    {/* Header */}
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-lg font-semibold">
                            Claim Your Offer
                        </h2>

                        <button
                            onClick={onClose}
                            className="rounded-lg p-2 hover:bg-secondary"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Content */}
                    {success ? (
                        <div className="py-10 text-center">
                            <p className="text-lg font-medium text-primary">
                                🎉 Offer Sent!
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                                required
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                                required
                            />

                            {/* Submit */}
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Get My Offer"}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}