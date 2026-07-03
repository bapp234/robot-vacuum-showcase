import { cn } from "@/src/utils";
import type { SectionProps } from "./section.types";
// import { p } from "framer-motion/client";

const spacingVariants = {
    none: "",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-20",
    lg: "py-20 md:py-24",
    xl: "py-24 md:py-32",
};

export default function Section({
    children,
    spacing = "xl",
    className,
    ...props
}: SectionProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden",
                spacingVariants[spacing],
                className
            )}
            {...props}
        >
            {children}
        </section>
    );
}