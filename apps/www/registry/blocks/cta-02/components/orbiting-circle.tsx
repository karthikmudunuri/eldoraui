"use client"

import React, { useEffect, useRef, useState } from "react"
import { cubicBezier, HTMLMotionProps, motion, useInView } from "motion/react"

import { cn } from "@/lib/utils"

export interface OrbitingCirclesProps extends HTMLMotionProps<"div"> {
  className?: string
  children?: React.ReactNode
  reverse?: boolean
  duration?: number
  delay?: number
  radius?: number
  path?: boolean
  iconSize?: number
  speed?: number
  index?: number
  startAnimationDelay?: number
  once?: boolean
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  index = 0,
  startAnimationDelay = 0,
  once = false,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true)
    }
  }, [isInView])
  return (
    <>
      {path && (
        <motion.div ref={ref}>
          {shouldAnimate && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: index * 0.2 + startAnimationDelay,
                type: "spring",
                stiffness: 120,
                damping: 18,
                mass: 1,
              }}
              className="pointer-events-none absolute inset-0"
              style={{
                width: radius * 2,
                height: radius * 2,
                left: `calc(50% - ${radius}px)`,
                top: `calc(50% - ${radius}px)`,
              }}
            >
              <div
                className={cn(
                  "size-full rounded-full",
                  "border border-black/[0.08] dark:border-white/[0.08]",
                  "bg-gradient-to-b from-black/[0.06] from-0% via-black/[0.02] via-50% to-transparent",
                  "dark:from-white/[0.06] dark:via-white/[0.02] dark:to-transparent",
                  className
                )}
              />
            </motion.div>
          )}
        </motion.div>
      )}
      {shouldAnimate &&
        React.Children.map(children, (child, index) => {
          const angle = (360 / React.Children.count(children)) * index
          return (
            <div
              style={
                {
                  "--duration": calculatedDuration,
                  "--radius": radius * 0.98,
                  "--angle": angle,
                  "--icon-size": `${iconSize}px`,
                } as React.CSSProperties
              }
              className={cn(
                "animate-orbit absolute z-20 flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full p-1",
                { "[animation-direction:reverse]": reverse }
              )}
            >
              <motion.div
                key={`orbit-child-${index}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.2 + startAnimationDelay,
                  ease: cubicBezier(0, 0, 0.58, 1),
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                  mass: 1,
                }}
                {...props}
              >
                {child}
              </motion.div>
            </div>
          )
        })}
    </>
  )
}
