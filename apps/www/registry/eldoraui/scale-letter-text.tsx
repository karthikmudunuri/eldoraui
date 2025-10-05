"use client"

import React, { useState } from "react"

interface ScaleLetterTextProps {
  text: string
  className?: string
}

export default function ScaleLetterText({
  text,
  className = "",
}: ScaleLetterTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)

  const getLetterStyle = (index: number) => {
    const isHovered = hoveredIndex === index
    const distance = hoveredIndex >= 0 ? Math.abs(index - hoveredIndex) : 0

    let scale = 1
    let translateY = 0
    let rotateX = 0
    let brightness = 1

    if (hoveredIndex >= 0) {
      if (isHovered) {
        scale = 1.4
        translateY = -20
        rotateX = -15
        brightness = 1.3
      } else if (distance === 1) {
        scale = 1.2
        translateY = -10
        rotateX = -8
        brightness = 1.15
      } else if (distance === 2) {
        scale = 1.1
        translateY = -5
        rotateX = -4
        brightness = 1.08
      }
    }

    return {
      transform: `
                perspective(1000px) 
                translateY(${translateY}px) 
                rotateX(${rotateX}deg) 
                scale(${scale})
                translateZ(${isHovered ? 30 : distance <= 2 ? 15 : 0}px)
            `,
      filter: `brightness(${brightness})`,
      textShadow:
        distance <= 2
          ? "0 2px 6px rgba(0,0,0,0.15)"
          : "0 1px 2px rgba(0,0,0,0.08)",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      zIndex: isHovered ? 10 : distance <= 2 ? 5 : 1,
      marginRight: "0.1em",
    }
  }

  return (
    <div className={className}>
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="relative inline-block cursor-pointer"
          style={getLetterStyle(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(-1)}
        >
          <span className="font-bold">
            {letter === " " ? "\u00A0" : letter}
          </span>
        </span>
      ))}
    </div>
  )
}
