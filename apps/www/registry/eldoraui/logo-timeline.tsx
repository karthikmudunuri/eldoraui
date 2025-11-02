"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export interface LogoItem {
  /** The label text displayed next to the icon */
  label: string
  /** The icon name from the Icons object (e.g., "gitHub", "react", "tailwind") */
  icon: keyof typeof Icons
  /** Animation delay in seconds (use negative values for staggered effect) */
  animationDelay: number
  /** Animation duration in seconds */
  animationDuration: number
  /** The row number where this logo should appear (1-based) */
  row: number
}

export interface LogoTimelineProps {
  /** Array of logo items to display */
  items: LogoItem[]
  /** Optional title text to display in the center */
  title?: string
  /** Height of the timeline container */
  height?: string
  /** Additional className for the container */
  className?: string
  /** Icon size in pixels (default: 16) */
  iconSize?: number
  /** Whether to show separator lines between rows (default: true) */
  showRowSeparator?: boolean
  /** Whether to animate logos only on hover (default: false) */
  animateOnHover?: boolean
}

export function LogoTimeline({
  items,
  title,
  height = "h-[400px] sm:h-[800px]",
  className,
  iconSize = 16,
  showRowSeparator = true,
  animateOnHover = false,
}: LogoTimelineProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Group items by row
  const rowsMap = new Map<number, LogoItem[]>()
  items.forEach((item) => {
    if (!rowsMap.has(item.row)) {
      rowsMap.set(item.row, [])
    }
    rowsMap.get(item.row)?.push(item)
  })

  // Convert map to sorted array
  const rows = Array.from(rowsMap.entries())
    .sort(([a], [b]) => a - b)
    .map(([, rowItems]) => rowItems)

  // Determine animation play state
  const animationPlayState = animateOnHover
    ? isHovered
      ? "running"
      : "paused"
    : "running"

  const getIconComponent = (iconName: keyof typeof Icons) => {
    const Icon = Icons[iconName]
    if (!Icon) {
      return null
    }
    return (
      <Icon
        className="shrink-0"
        style={{ width: iconSize, height: iconSize }}
        aria-hidden="true"
      />
    )
  }

  return (
    <section className={cn("w-full", height, className)}>
      <motion.div
        aria-hidden="true"
        className="bg-background relative h-full w-full overflow-hidden py-24 ring-inset sm:py-32"
        onMouseEnter={() => animateOnHover && setIsHovered(true)}
        onMouseLeave={() => animateOnHover && setIsHovered(false)}
      >
        {title && (
          <div className="absolute top-1/2 left-1/2 mx-auto w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="relative z-10">
              <p className="text-foreground/10 mx-auto mt-2 max-w-3xl text-4xl font-semibold tracking-tight text-pretty sm:text-5xl md:text-6xl">
                {title}
              </p>
            </div>
          </div>
        )}
        <div
          className="[container-type:inline-size] absolute inset-0 grid"
          style={{ gridTemplateRows: `repeat(${rows.length}, 1fr)` }}
        >
          {rows.map((rowItems, index) => (
            <div className="group relative flex items-center" key={index}>
              <div className="from-foreground/15 dark:from-foreground/15 absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-[2px] to-[2px] bg-[length:12px_100%]" />
              {showRowSeparator && (
                <div className="from-foreground/5 dark:from-foreground/5 absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
              )}
              {rowItems.map((logo) => {
                const IconComponent = getIconComponent(logo.icon)
                if (!IconComponent) {
                  return null
                }
                return (
                  <div
                    key={`${logo.row}-${logo.label}`}
                    className={cn(
                      "absolute top-1/2 flex -translate-y-1/2 items-center gap-2 px-3 py-1.5 whitespace-nowrap",
                      "from-secondary/50 to-secondary/50 ring-background/10 dark:ring-foreground/10 rounded-full bg-gradient-to-t from-50% ring-1 backdrop-blur-sm ring-inset",
                      "[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-timing-function:linear]",
                      "shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-none"
                    )}
                    style={{
                      animationDelay: `${logo.animationDelay}s`,
                      animationDuration: `${logo.animationDuration}s`,
                      animationPlayState: animationPlayState,
                    }}
                  >
                    {IconComponent}
                    <span className="text-foreground text-sm/6 font-medium">
                      {logo.label}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
