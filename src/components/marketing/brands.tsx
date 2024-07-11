import React from "react";
import { cn } from "@/lib/utils/classes";
import { AdobeLogo } from "@/assets/images/brands/adobe";
import { FramerLogo } from "@/assets/images/brands/framer";
import { NextjsLogo } from "@/assets/images/brands/nextjs";
import { ReactIcon } from "@/assets/images/brands/reactjs";
import { TailwindLogo } from "@/assets/images/brands/tailwind";

export const Brands = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 sm:gap-8 [&_svg]:h-4 [&_svg]:fill-fg-muted md:[&_svg]:h-6",
        className
      )}
    >
      <AdobeLogo />
      <TailwindLogo />
      <ReactIcon />
      <NextjsLogo />
      <FramerLogo />
    </div>
  );
};
