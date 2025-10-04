"use client"

import { clsx } from "clsx"
import { motion } from "motion/react"

interface SvgRippleEffectProps {
  transition?: {
    duration?: number
    repeat?: number
    repeatDelay?: number
  }
  fade?: ("top" | "bottom")[]
  whileHover?: boolean
  image?: string
}

export default function SvgRippleEffect({
  transition = {
    duration: 0.75,
    repeat: Infinity,
    repeatDelay: 1.25,
  },
  fade = [],
  whileHover = false,
  image,
}: SvgRippleEffectProps) {
  return (
    <motion.div
      className="group bg-white dark:bg-black"
      initial="idle"
      animate={whileHover ? "idle" : "active"}
      whileHover={whileHover ? "active" : undefined}
      variants={{ idle: {}, active: {} }}
    >
      <svg
        viewBox="0 0 500 500"
        fill="none"
        className={clsx(
          "col-start-1 row-start-1 size-full",
          "mask-[linear-gradient(to_bottom,black_90%,transparent),radial-gradient(circle,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] mask-intersect"
        )}
      >
        {Array.from(Array(42).keys()).map((n) => (
          <motion.circle
            variants={{
              idle: {
                scale: 1,
                strokeOpacity: 0.3,
              },
              active: {
                scale: [1, 1.08, 1],
                strokeOpacity: [0.3, 0.6, 0.3],
                transition: { ...transition, delay: n * 0.05 },
              },
            }}
            key={n}
            cx="250"
            cy="250"
            r={n * 14 + 4}
            className="stroke-gray-800 dark:stroke-gray-200"
          />
        ))}
      </svg>
      {fade.includes("top") && (
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[50%] dark:from-neutral-950 dark:to-[70%]" />
      )}
      {fade.includes("bottom") && (
        <div className="absolute inset-0 bg-linear-to-t from-white to-[50%] dark:from-neutral-950 dark:to-[70%]" />
      )}
      {image && (
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={image}
            alt=""
            className="h-6 w-6 rounded-full bg-white object-cover sm:h-8 sm:w-8 dark:bg-neutral-950"
          />
        </div>
      )}
    </motion.div>
  )
}
