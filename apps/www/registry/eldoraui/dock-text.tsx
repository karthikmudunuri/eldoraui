"use client"

import React, { useRef, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

interface DockTextProps {
  text: string
  down?: boolean
  className?: string
}

export default function DockText({
  text,
  down = false,
  className,
}: DockTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLHeadingElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const container = containerRef.current
    if (!container) return

    const letters = container.children
    const containerRect = container.getBoundingClientRect()
    const mouseX = e.clientX - containerRect.left

    Array.from(letters).forEach((letter, index) => {
      const letterRect = letter.getBoundingClientRect()
      const letterCenterX =
        letterRect.left + letterRect.width / 2 - containerRect.left
      const distance = Math.abs(mouseX - letterCenterX)

      if (distance <= 10) {
        setHoveredIndex(index)
      }
    })
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
  }

  return (
    <motion.h1
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "my-8 flex cursor-pointer items-center text-6xl font-bold text-gray-900 uppercase md:text-7xl lg:text-8xl dark:text-white",
        className
      )}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          animate={{
            scaleY:
              hoveredIndex === null
                ? 1
                : Math.max(1, 1.3638 - Math.abs(index - hoveredIndex) * 0.1),
          }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
            mass: 0.5,
          }}
          style={{
            display: "inline-block",
            transformOrigin: down ? "top" : "bottom",
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}
