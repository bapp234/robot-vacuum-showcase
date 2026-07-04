"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

import {
    useForm,
    type SubmitHandler,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
    claimOfferSchema,
    type ClaimOfferInput,
    type ClaimOfferForm,
} from "@/src/lib/validation/claimOffer.schema";

import Button from "@/src/components/ui/Button";
import { cn } from "@/src/utils";

import type { ClaimOfferModalProps } from "./claim-offer-modal.types";

export default function ClaimOfferModal({
    open,
    onClose,
    className,
    ...props
}: ClaimOfferModalProps) {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ClaimOfferInput, unknown, ClaimOfferForm>({
        resolver: zodResolver(claimOfferSchema),
    });

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    const onSubmit = async (data: ClaimOfferForm) => {
    const response = await fetch("/api/claim-offer", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
    });

        const result = await response.json();

        console.log(result);

        await new Promise((resolve) =>
            setTimeout(resolve, 1200)
        );

        setSuccess(true);

        reset();
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="flex h-screen items-center justify-center px-4">

                <div
                    className="
            relative
            z-10
            w-full
            max-w-lg
            rounded-3xl
            border
            border-border
            bg-background
            p-8
            shadow-2xl
          "
                >
                    {/* Header */}

                    <div className="mb-8 flex items-start justify-between">

                        <div>

                            <h2 className="text-2xl font-bold">
                                Claim Your Discount
                            </h2>

                            <p className="mt-2 text-sm text-muted-foreground">
                                Fill in your information to receive an
                                exclusive Xiaomi Robot Vacuum offer.
                            </p>

                        </div>

                        <button
                            onClick={onClose}
                            className="
                rounded-lg
                p-2
                transition-colors
                hover:bg-secondary
              "
                        >
                            <X size={20} />
                        </button>

                    </div>

                    {success ? (

                        <div className="space-y-5 py-6 text-center">


                            <h3 className="text-2xl font-bold">
                                Request Submitted!
                            </h3>

                            <p className="text-sm leading-7 text-muted-foreground">
                                Thank you for your interest.

                                <br />

                                Your request has been received successfully.

                                <br />

                                Our team will contact you soon and send
                                your exclusive discount information.
                            </p>

                            <Button
                                className="w-full"
                                onClick={() => {
                                    setSuccess(false);
                                    onClose();
                                }}
                            >
                                Close
                            </Button>

                        </div>

                    ) : (

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="space-y-5"
                        >
                            {/* Name */}

                            <div>

                                <input
                                    type="text"
                                    placeholder="Full name"
                                    {...register("name")}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                />

                                {errors.name && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.name.message}
                                    </p>
                                )}

                            </div>

                            {/* Email */}

                            <div>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    {...register("email")}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                />

                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}

                            </div>

                            {/* Phone */}

                            <div>

                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    {...register("phone")}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                />

                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.phone.message}
                                    </p>
                                )}

                            </div>

                            {/* Age */}

                            <div>

                                <input
                                    type="number"
                                    placeholder="Age"
                                    {...register("age")}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                />

                                {errors.age && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.age.message}
                                    </p>
                                )}

                            </div>

                            {/* Gender */}

                            <div>

                                <select
                                    defaultValue=""
                                    {...register("gender")}
                                    className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:ring-2 focus:ring-primary"
                                >
                                    <option value="">
                                        Select gender
                                    </option>

                                    <option value="male">
                                        Male
                                    </option>

                                    <option value="female">
                                        Female
                                    </option>

                                    <option value="prefer_not_to_say">
                                        Prefer not to say
                                    </option>

                                </select>

                                {errors.gender && (
                                    <p className="mt-1 text-sm text-red-500">
                                        {errors.gender.message}
                                    </p>
                                )}

                            </div>

                            <div className="rounded-xl bg-primary/5 p-4 text-sm text-muted-foreground">
                                ✓ Exclusive Xiaomi promotion
                                <br />
                                ✓ Your information is kept private
                                <br />
                                ✓ No spam, ever
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting
                                    ? "Sending..."
                                    : "Get My Discount"}
                            </Button>

                        </form>

                    )}
                </div>
            </div>
        </div>
    );
}