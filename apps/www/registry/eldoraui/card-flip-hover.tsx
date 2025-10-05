"use client"

import React, { useState } from "react"

interface CardFlipHoverProps {
  imageUrl: string
}

export const CardFlipHover = ({ imageUrl }: CardFlipHoverProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleHover = () => {
    if (!isFlipped) {
      setIsFlipped(true)
      setTimeout(() => setIsFlipped(false), 700)
    }
  }

  return (
    <div className="h-60 w-44 [perspective:1000px]" onMouseEnter={handleHover}>
      <div
        className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped
            ? "[transform:rotateY(180deg)_translateY(-40px)]"
            : "[transform:rotateY(0deg)_translateY(0px)]"
        }`}
      >
        {/* Front Side */}
        <div className="absolute h-full w-full overflow-hidden rounded-xl shadow-xl [backface-visibility:hidden]">
          <img
            src={imageUrl}
            alt="Front"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Back Side */}
        <div className="absolute flex h-full w-full [transform:rotateY(180deg)] items-center justify-center overflow-hidden rounded-xl bg-cyan-600 text-xl font-bold text-white shadow-xl [backface-visibility:hidden]">
          <img
            src={imageUrl}
            alt="Back"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
