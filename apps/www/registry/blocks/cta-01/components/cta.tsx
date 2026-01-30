"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

type CtaVariant = "dark" | "light"

interface CtaSectionProps {
  /** Override app theme when set; otherwise follows the theme toggler */
  variant?: CtaVariant
}

const CtaSection = ({ variant }: CtaSectionProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolvedTheme only after mount to avoid hydration mismatch (server has no theme)
  const theme = (variant ??
    (mounted ? resolvedTheme : undefined) ??
    "dark") as CtaVariant
  const isLight = theme === "light"

  return (
    <>
      {/* Outer wrapper: full-width extended background (top and bottom) */}
      <div
        className={cn(
          "relative min-h-[70vh] w-full pb-24 md:pb-32",
          isLight ? "bg-neutral-50" : "bg-neutral-950"
        )}
        data-theme={theme}
      >
        {/* Full-width subtle grid that extends across the section */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 bg-[size:3rem_3rem]",
            isLight
              ? "bg-[linear-gradient(rgba(0,0,0,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.04)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)]"
          )}
          aria-hidden
        />
        {/* Inner CTA container: content band with focused grid */}
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 pt-24 pb-24 md:pt-32 md:pb-32">
          {/* Subtle grid background (radial mask for content area) */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)] bg-[size:3rem_3rem]",
              isLight
                ? "bg-[linear-gradient(rgba(0,0,0,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]"
            )}
            aria-hidden
          />
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute left-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#left-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 1 12 v 65 l 28 24 v 70 " />
              </g>
              <g mask={`url(#left-mask-${theme})`}>
                <circle
                  className="leftrightline left-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#left-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`left-mask-${theme}`}>
                  <path
                    d="M 1 12 v 65 l 28 24 v 70"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`left-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`left-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="absolute right-0 hidden h-full w-24 md:block"
          >
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 30 120"
              fill="none"
            >
              <g stroke={`url(#right-fadeStroke-${theme})`} strokeWidth="0.4">
                <path d="M 29 12 v 65 l -28 24 v 65" />
              </g>
              <g mask={`url(#right-mask-${theme})`}>
                <circle
                  className="leftrightline right-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill={`url(#right-blue-grad-${theme})`}
                />
              </g>
              <defs>
                <mask id={`right-mask-${theme}`}>
                  <path
                    d="M 29 12 v 65 l -28 24 v 65"
                    strokeWidth="0.4"
                    stroke="white"
                  />
                </mask>
                <linearGradient
                  id={`right-fadeStroke-${theme}`}
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  y1="12"
                  x2="0"
                  y2="170"
                >
                  <stop
                    offset="0%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="0"
                  />
                  <stop
                    offset="10%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="90%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor={isLight ? "#737373" : "#404040"}
                    stopOpacity="0"
                  />
                </linearGradient>
                <radialGradient id={`right-blue-grad-${theme}`} fx="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </motion.div>
          <motion.h1
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mt-48 max-w-3xl bg-clip-text pb-2 text-center text-5xl leading-[1.15] font-medium tracking-tighter text-balance text-transparent md:text-[4.2rem]",
              isLight
                ? "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-700"
                : "bg-gradient-to-br from-neutral-100 via-neutral-100 via-50% to-neutral-100/40"
            )}
          >
            Lightweight Analytics Built For Simplicity
          </motion.h1>
          <motion.p
            initial={{
              y: 10,
              filter: "blur(10px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={cn(
              "relative z-10 mx-auto mb-12 max-w-sm bg-clip-text text-center text-[0.8rem] leading-relaxed text-balance text-transparent sm:max-w-[32rem] sm:text-[0.87rem] lg:text-[1rem]",
              isLight
                ? "bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600/90"
                : "bg-gradient-to-br from-neutral-400 via-neutral-300 to-neutral-400/90"
            )}
          >
            Track page views and visitors in real-time with a lightweight,
            privacy-first tool made for developers.
          </motion.p>
          <motion.div
            initial={{
              y: 5,
              filter: "blur(5px)",
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              filter: "blur(0px)",
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <Link
              href={"/dashboard/sites"}
              className={cn(
                "group flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 md:text-[1rem]",
                isLight
                  ? "border border-neutral-300 bg-white text-neutral-900 shadow-sm hover:border-neutral-400 hover:bg-neutral-50"
                  : "border border-white/15 bg-neutral-950/90 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),inset_0_1px_0_rgba(255,255,255,0.05)] hover:border-white/25 hover:bg-neutral-900/90"
              )}
            >
              {/* Get Started */}
              <TextGlitch text="Get Started" />
            </Link>
          </motion.div>
        </div>
      </div>
      <style>
        {`    
.leftrightline {
  offset-anchor: 10px 0px;
  animation: leftrightline-animation-path;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 3s;
}

.left-line {
  offset-path: path(
    "M 1 12 v 65 l 28 24 v 80"
  );
}
.right-line {
  offset-path: path(
    "M 29 12 v 65 l -28 24 v 80"
  );
}

@keyframes leftrightline-animation-path {
  0% {
    offset-distance: 0%;
  }
  60% {
    offset-distance: 100%;
  }
  100% {
    offset-distance: 100%;
  }
}`}
      </style>
    </>
  )
}

export default CtaSection

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden">
      <span className="invisible">{text}</span>
      <span className="absolute top-0 left-0 font-semibold transition-transform duration-500 ease-in-out group-hover:-translate-y-full hover:duration-300">
        {text}
      </span>
      <span className="absolute top-0 left-0 translate-y-full font-semibold transition-transform duration-500 ease-in-out group-hover:translate-y-0 hover:duration-300">
        {text}
      </span>
    </div>
  )
}
