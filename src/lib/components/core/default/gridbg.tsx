"use client"
import { HTMLProps } from 'react'

interface BackgroundGridProps {
  color: string
  cellSize: string | number
  strokeWidth: number | string
  className?: string
  fade?: boolean
}

const BackgroundGrid = ({
  color = '#fb3a5d',
  cellSize = '25px',
  strokeWidth = '3px',
  className,
  fade = true,
  ...props
}: Partial<BackgroundGridProps> & HTMLProps<HTMLDivElement>) => {
  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' stroke='${color}' stroke-width='${strokeWidth}' fill-opacity='0.4' >
      <path d='M 100 0 L 100 200'/>
      <path d='M 0 100 L 200 100'/>
    </svg>
  `
  const svgDataUrl = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div
      className={`pointer-events-none absolute inset-0 left-0 top-0 flex h-full w-full ${className}`}
      style={{
        backgroundImage: `url("${svgDataUrl}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: cellSize,
        maskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
        WebkitMaskImage: fade
          ? `radial-gradient(ellipse at top, white, transparent 70%)`
          : undefined,
      }}
      {...props}
    ></div>
  )
}

export default BackgroundGrid
