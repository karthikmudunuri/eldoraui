"use client"

import React, { useState } from "react"

interface LiveButtonProps {
  text: string
  url: string
  className?: string
}

export default function LiveButton({
  text,
  url,
  className = "",
}: LiveButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  return (
    <button
      className={`group relative flex h-12 min-w-[9.3rem] items-center justify-center gap-3 overflow-hidden rounded-lg border border-gray-300 bg-white px-6 transition-all duration-500 ease-out before:absolute before:inset-0 before:translate-x-[-100%] before:bg-gradient-to-r before:from-transparent before:via-black/5 before:to-transparent before:transition-transform before:duration-700 hover:scale-105 hover:border-gray-400 hover:shadow-lg hover:shadow-black/20 hover:before:translate-x-[100%] active:scale-95 dark:border-gray-600 dark:bg-black dark:before:via-white/5 dark:hover:border-gray-500 dark:hover:shadow-white/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={() => (window.location.href = url)}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-200/0 via-cyan-200/10 to-cyan-200/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-cyan-200/0 dark:via-cyan-200/10 dark:to-cyan-200/0"></div>

      {/* Text */}
      <span className="relative z-10 text-sm font-medium tracking-wide whitespace-nowrap text-black transition-all duration-300 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-50">
        {text}
      </span>

      {/* Animated dot */}
      <span
        className={`relative z-10 h-3 w-3 rounded-full bg-cyan-400 transition-all duration-500 ease-out ${isHovered ? "scale-125 bg-cyan-300 shadow-lg shadow-cyan-300/50" : ""} ${isPressed ? "scale-90" : ""} before:absolute before:inset-0 before:animate-pulse before:rounded-full before:bg-cyan-200 before:opacity-0 group-hover:before:opacity-50`}
      >
        {/* Ripple effect */}
        <div
          className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-0 group-hover:opacity-60"
          style={{ animationDuration: "2s" }}
        ></div>
      </span>

      {/* Hover state border animation */}
      <div className="absolute inset-0 animate-pulse rounded-lg border-2 border-cyan-200/0 opacity-0 transition-all duration-500 group-hover:border-cyan-500/30 group-hover:opacity-100 dark:group-hover:border-cyan-200/30"></div>
    </button>
  )
}
