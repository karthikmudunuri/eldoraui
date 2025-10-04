"use client"

import React, { useMemo, type JSX } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export type TextShimmerProps = {
  children: string
  as?: React.ElementType
  className?: string
  duration?: number
  spread?: number
  delay?: number
  repeatDelay?: number
}

const TextShimmer = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
  delay = 0,
  repeatDelay = 0,
}: TextShimmerProps) => {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  )

  const dynamicSpread = useMemo(() => {
    return children.length * spread
  }, [children, spread])

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className
      )}
      initial={{ backgroundPosition: "105% center" }}
      animate={{ backgroundPosition: "-5% center" }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
        delay,
        repeatDelay,
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  )
}

export default React.memo(TextShimmer)
