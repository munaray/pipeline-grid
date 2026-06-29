import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  variant?: "default" | "white";
};

const logoSrc = {
  default: "/pipeline-grid-logo.svg",
  white: "/pipeline-grid-logo-white.svg",
} as const;

export default function BrandLogo({
  className,
  priority = false,
  variant = "white",
}: BrandLogoProps) {
  return (
    <Image
      src={logoSrc[variant]}
      alt="Pipeline Grid"
      width={579}
      height={90}
      className={cn("h-auto w-[10.5rem]", className)}
      priority={priority}
    />
  );
}
