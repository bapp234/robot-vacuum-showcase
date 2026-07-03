import { cn } from "@/src/utils";
import type { HeadingProps } from "./heading.types";

const alignVariants = {
  left: "text-left",
  center: "text-center items-center",
};

export default function Heading({
  badge,
  title,
  description,
  align = "center",
  className,
  ...props
}: HeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 flex flex-col gap-4",
        alignVariants[align],
        className
      )}
      {...props}
    >
      {badge && (
        <span className="inline-flex w-fit rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium uppercase tracking-widest text-primary">
          {badge}
        </span>
      )}

      <h2 className="max-w-3xl text-4xl font-heading font-bold leading-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-muted">
          {description}
        </p>
      )}
    </div>
  );
}