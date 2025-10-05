"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

interface FontWeightTextProps {
  text: string
  className?: string
  fontSize?: number
  minWeight?: number
  maxWeight?: number
  animationDuration?: number
  delayMultiplier?: number
}

export function FontWeightText({
  text,
  className = "",
  fontSize = 150,
  minWeight = 0,
  maxWeight = 840,
  animationDuration = 1.5,
  delayMultiplier = 0.25,
}: FontWeightTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    const numLetters = spans.length

    spans.forEach((span, i) => {
      const mappedIndex = i - numLetters / 2
      span.style.animationDelay = mappedIndex * delayMultiplier + "s"
    })
  }, [text, delayMultiplier])

  const characters = text.split("").map((char, index) => (
    <span
      key={index}
      aria-hidden="true"
      style={{
        animation: `breath ${animationDuration}s alternate cubic-bezier(0.37, 0, 0.63, 1) infinite`,
        animationFillMode: "both",
        fontVariationSettings: `"wght" ${minWeight}`,
      }}
    >
      {char}
    </span>
  ))

  return (
    <div className="flex items-center justify-center">
      <p
        className={cn("m-0 font-sans", className)}
        ref={containerRef}
        aria-label={text}
        style={{
          fontSize: `${fontSize}px`,
          fontFeatureSettings: '"wght"',
        }}
      >
        {characters}
        <style jsx>{`
          @keyframes breath {
            0% {
              font-variation-settings: "wght" ${minWeight};
            }
            100% {
              font-variation-settings: "wght" ${maxWeight};
            }
          }
        `}</style>
      </p>
    </div>
  )
}
