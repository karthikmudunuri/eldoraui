"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface Logo {
  id: number
  name: string
  src: string
}

const CYCLE_DURATION_MS = 2000
const COLUMN_STAGGER_DELAY_MS = 200
const ENTRANCE_STAGGER_S = 0.1

export type AnimatedLogoColumnVariant = "default" | "compact"

interface AnimatedLogoColumnProps {
  logos: Logo[]
  columnIndex: number
  currentTime: number
  variant?: AnimatedLogoColumnVariant
  className?: string
}

export function AnimatedLogoColumn({
  logos,
  columnIndex,
  currentTime,
  variant = "default",
  className,
}: AnimatedLogoColumnProps) {
  if (logos.length === 0) {
    return (
      <div
        className={cn(
          "bg-muted/30 relative overflow-hidden rounded-lg",
          variant === "compact" ? "h-8 w-28" : "h-14 w-24 md:h-24 md:w-48",
          className
        )}
      />
    )
  }

  const columnDelay = columnIndex * COLUMN_STAGGER_DELAY_MS
  const cycleLength = CYCLE_DURATION_MS * logos.length
  const adjustedTime = (currentTime + columnDelay) % cycleLength
  const currentIndex =
    Math.floor(adjustedTime / CYCLE_DURATION_MS) % logos.length
  const currentLogo = logos.at(currentIndex)

  if (!currentLogo) {
    return null
  }

  const isCompact = variant === "compact"

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-lg",
        isCompact ? "h-8 w-28" : "h-14 w-24 md:h-24 md:w-48",
        className
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: columnIndex * ENTRANCE_STAGGER_S,
        duration: 0.4,
        ease: "easeOut",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={`${currentLogo.id}-${currentIndex}`}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: "15%", opacity: 0 }}
          animate={{
            y: "0%",
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 280,
              damping: 24,
            },
          }}
          exit={{
            y: "-15%",
            opacity: 0,
            transition: { duration: 0.25, ease: "easeIn" },
          }}
        >
          <Image
            src={currentLogo.src}
            alt={currentLogo.name}
            width={isCompact ? 112 : 120}
            height={isCompact ? 32 : 40}
            className={cn(
              "h-auto w-auto object-contain opacity-90 grayscale hover:opacity-100 hover:grayscale-0 dark:brightness-0 dark:invert",
              isCompact
                ? "max-h-[80%] max-w-[80%] px-0.5"
                : "max-h-[80%] max-w-[80%]"
            )}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
