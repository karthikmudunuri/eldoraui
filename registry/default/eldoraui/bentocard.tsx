"use client";

import { clsx } from "clsx";
import { motion } from "framer-motion";
import { Subheading } from "../ui/text";

export function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-white dark:bg-gray-950 shadow-sm ring-1 ring-black/5 dark:ring-white/5",
        "data-[dark]:bg-gray-950 data-[dark]:ring-white/5",
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-950 group-data-[dark]:from-[-25%]" />
        )}
        {fade.includes("bottom") && (
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-950 group-data-[dark]:from-[-25%]" />
        )}
      </div>
      <div className="relative p-10">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-gray-950 group-data-[dark]:text-white dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-[dark]:text-gray-400 dark:text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
