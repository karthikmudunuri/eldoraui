"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function HeroAnimatedSides({
  className,
}: {
  className?: string
}) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Only render animated elements after mount to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Left Side */}
      <div
        suppressHydrationWarning
        className="pointer-events-none absolute top-0 left-0 hidden h-full w-28 md:block"
      >
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 30 200"
          fill="none"
        >
          <g
            stroke={resolvedTheme === "dark" ? "#0a0a0a" : "#fafafa"}
            strokeWidth="0.6"
          >
            <path d="M 1 0 v 30 l 0 0 v 80 l 28 30 v 90 " />
          </g>
          <g mask="url(#left-mask)">
            <circle
              className="leftrightline left-line"
              cx="0"
              cy="0"
              r="15"
              fill="url(#left-glow)"
            />
          </g>
          <defs>
            <mask id="left-mask">
              <path
                d="M 1 0 v 30 l 0 0 v 80 l 28 30 v 90"
                strokeWidth="0.6"
                stroke="white"
              />
            </mask>
            <radialGradient id="left-glow" fx="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Right Side */}
      <div
        suppressHydrationWarning
        className="pointer-events-none absolute top-0 right-1 hidden h-full w-28 md:block"
      >
        <svg
          className="h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 30 200"
          fill="none"
        >
          <g
            stroke={resolvedTheme === "dark" ? "#0a0a0a" : "#fafafa"}
            strokeWidth="0.6"
          >
            <path d="M 29 0 v 30 l 0 0 v 80 l -28 30 v 90" />
          </g>
          <g mask="url(#right-mask)">
            <circle
              className="leftrightline right-line"
              cx="0"
              cy="0"
              r="15"
              fill="url(#right-glow)"
            />
          </g>
          <defs>
            <mask id="right-mask">
              <path
                d="M 29 0 v 30 l 0 0 v 80 l -28 30 v 90"
                strokeWidth="0.6"
                stroke="white"
              />
            </mask>
            <radialGradient id="right-glow" fx="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .leftrightline {
            offset-anchor: 10px 0px;
            animation: leftrightline-animation-path;
            animation-iteration-count: infinite;
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-duration: 4s;
          }

          .left-line {
            offset-path: path("M 1 0 v 30 l 0 0 v 80 l 28 30 v 90");
          }

          .right-line {
            offset-path: path("M 29 0 v 30 l 0 0 v 80 l -28 30 v 90");
          }

          @keyframes leftrightline-animation-path {
            0% {
              offset-distance: 0%;
            }
            70% {
              offset-distance: 100%;
            }
            100% {
              offset-distance: 100%;
            }
          }
        `,
        }}
      />
    </>
  )
}
