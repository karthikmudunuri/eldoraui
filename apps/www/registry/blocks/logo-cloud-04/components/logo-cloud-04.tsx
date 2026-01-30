"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

import { AnimatedLogoColumn, type Logo } from "./animated-logo-column"

const LOGOS: Logo[] = [
  {
    id: 1,
    name: "Google",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Google.svg",
  },
  {
    id: 2,
    name: "GitHub",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/GitHub.svg",
  },
  {
    id: 3,
    name: "Amazon",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Amazon.svg",
  },
  {
    id: 4,
    name: "Netflix",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Netflix.svg",
  },
  {
    id: 5,
    name: "YouTube",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/YouTube.svg",
  },
  {
    id: 6,
    name: "Instagram",
    src: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Instagram.svg",
  },
]

const TICK_MS = 100

/**
 * Deterministic distribution (no Math.random) so server and client
 * render the same columns and hydration matches.
 */
function distributeLogos(logos: Logo[], columnCount: number): Logo[][] {
  const result: Logo[][] = Array.from({ length: columnCount }, () => [])

  logos.forEach((logo, index) => {
    result[index % columnCount].push(logo)
  })

  const maxLength = Math.max(...result.map((col) => col.length))
  result.forEach((col, colIndex) => {
    while (col.length < maxLength) {
      col.push(logos[(col.length * columnCount + colIndex) % logos.length])
    }
  })

  return result
}

export type LogoCarouselVariant = "default" | "compact"

interface LogoCarouselProps {
  columns?: number
  logos?: Logo[]
  variant?: LogoCarouselVariant
  className?: string
}

export function LogoCarousel({
  columns = 4,
  logos: logosProp,
  variant = "default",
  className,
}: LogoCarouselProps) {
  const logos = useMemo(() => logosProp ?? LOGOS, [logosProp])
  const distribute = useCallback(
    (count: number) => distributeLogos(logos, count),
    [logos]
  )

  const [logoColumns, setLogoColumns] = useState<Logo[][]>(() =>
    distributeLogos(logos, columns)
  )
  const [time, setTime] = useState(0)
  const prevColumnsRef = useRef(columns)

  useEffect(() => {
    if (prevColumnsRef.current !== columns) {
      prevColumnsRef.current = columns
      setLogoColumns(distribute(columns))
    }
  }, [columns, distribute])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + TICK_MS)
    }, TICK_MS)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-6 py-8 sm:gap-8",
        className
      )}
    >
      {logoColumns.map((columnLogos, index) => (
        <AnimatedLogoColumn
          key={`col-${index}`}
          logos={columnLogos}
          columnIndex={index}
          currentTime={time}
          variant={variant}
        />
      ))}
    </div>
  )
}
