import Image from "next/image";
import { BRAND } from "@/src/constants/brand";
import { cn } from "@/src/utils/cn";
import type { LogoProps } from "./logo.types";

const imageSizes = {
  sm: 36,
  md: 44,
  lg: 56,
};

export default function Logo({
  className,
  showText = true,
  size = "md",
}: LogoProps) {
  const imageSize = imageSizes[size];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 select-none",
        className
      )}
    >
      <Image
        src={BRAND.logo}
        alt={BRAND.fullName}
        width={imageSize}
        height={imageSize}
        priority
      />

      {showText && (
        <div className="leading-tight">
          <p className="font-heading text-lg font-bold text-orange-600">
            {BRAND.fullName}
          </p>
        </div>
      )}
    </div>
  );
}