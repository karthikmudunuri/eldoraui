"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe from "cobe"
import { useSpring } from "react-spring"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type CobeVariant =
  | "default"
  | "draggable"
  | "auto-draggable"
  | "rotate-to-location"
  | "scaled"

interface Location {
  name: string
  lat?: number
  long?: number
  emoji?: string
}

interface GeocodeResult {
  lat: number
  lng: number
  display_name: string
}

interface CobeProps {
  variant?: CobeVariant
  className?: string
  style?: React.CSSProperties
  locations?: Location[]
}

type CobeState = Record<string, any>

export function Cobe({
  variant = "default",
  className,
  style,
  locations = [
    { name: "San Francisco", emoji: "📍" },
    { name: "Berlin", emoji: "📍" },
    { name: "Tokyo", emoji: "📍" },
    { name: "Buenos Aires", emoji: "📍" },
  ],
}: CobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef<number>(0)
  const focusRef = useRef<[number, number]>([0, 0])
  const [customLocations, setCustomLocations] = useState<Location[]>([])
  const [isInitializing, setIsInitializing] = useState(true)

  const [{ r }, api] = useSpring<{ r: number }>(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }))

  const locationToAngles = (lat: number, long: number): [number, number] => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ] as [number, number]
  }

  const geocodeLocation = async (
    query: string
  ): Promise<GeocodeResult | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=1`
      )
      const data = await response.json()

      if (data && data.length > 0) {
        return {
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon),
          display_name: data[0].display_name,
        }
      }
      return null
    } catch (error) {
      console.error("Geocoding error:", error)
      return null
    }
  }

  const geocodeLocationList = async (locationList: Location[]) => {
    const geocodedLocations: Location[] = []

    for (const location of locationList) {
      if (location.lat && location.long) {
        // Already has coordinates
        geocodedLocations.push(location)
      } else {
        // Need to geocode
        const result = await geocodeLocation(location.name)
        if (result) {
          geocodedLocations.push({
            ...location,
            lat: result.lat,
            long: result.lng,
          })
        }
      }
    }

    return geocodedLocations
  }

  // Initialize locations on component mount
  useEffect(() => {
    const initializeLocations = async () => {
      if (variant === "rotate-to-location" && locations.length > 0) {
        setIsInitializing(true)
        const geocoded = await geocodeLocationList(locations)
        setCustomLocations(geocoded)
        setIsInitializing(false)
      }
    }

    initializeLocations()
  }, [variant, locations])

  useEffect(() => {
    let phi = 0
    let width = 0
    let currentPhi = 0
    let currentTheta = 0
    const doublePi = Math.PI * 2

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }

    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: variant === "scaled" ? width * 2 * 0.4 : width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 1],
      markerColor:
        variant === "rotate-to-location"
          ? [34 / 255, 211 / 255, 238 / 255]
          : [8 / 255, 145 / 255, 178 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers:
        variant === "rotate-to-location"
          ? customLocations
              .filter((loc) => loc.lat && loc.long)
              .map((loc) => ({
                location: [loc.lat!, loc.long!],
                size: 0.1,
              }))
          : [],
      scale: variant === "scaled" ? 2.5 : undefined,
      offset: variant === "scaled" ? [0, width * 2 * 0.4 * 0.6] : undefined,
      onRender: (state: CobeState) => {
        switch (variant) {
          case "default":
            state.phi = phi
            phi += 0.005
            break
          case "draggable":
            state.phi = r.get()
            break
          case "auto-draggable":
            if (!pointerInteracting.current) {
              phi += 0.005
            }
            state.phi = phi + r.get()
            break
          case "rotate-to-location":
            state.phi = currentPhi
            state.theta = currentTheta
            const [focusPhi, focusTheta] = focusRef.current
            const distPositive = (focusPhi - currentPhi + doublePi) % doublePi
            const distNegative = (currentPhi - focusPhi + doublePi) % doublePi
            if (distPositive < distNegative) {
              currentPhi += distPositive * 0.08
            } else {
              currentPhi -= distNegative * 0.08
            }
            currentTheta = currentTheta * 0.92 + focusTheta * 0.08
            break
          case "scaled":
            // No rotation for scaled variant
            break
        }

        state.width = width * 2
        state.height = variant === "scaled" ? width * 2 * 0.4 : width * 2
      },
    })

    if (canvasRef.current) {
      setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
        }
      })
    }

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [variant, r, customLocations])

  const handlePointerDown = (e: React.PointerEvent) => {
    if (variant === "draggable" || variant === "auto-draggable") {
      pointerInteracting.current =
        e.clientX - pointerInteractionMovement.current
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    }
  }

  const handlePointerUp = () => {
    if (variant === "draggable" || variant === "auto-draggable") {
      pointerInteracting.current = null
      if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    }
  }

  const handlePointerOut = () => {
    if (variant === "draggable" || variant === "auto-draggable") {
      pointerInteracting.current = null
      if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (
      (variant === "draggable" || variant === "auto-draggable") &&
      pointerInteracting.current !== null
    ) {
      const delta = e.clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      api.start({
        r: delta / 200,
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (
      (variant === "draggable" || variant === "auto-draggable") &&
      pointerInteracting.current !== null &&
      e.touches[0]
    ) {
      const delta = e.touches[0].clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      api.start({
        r: delta / 100,
      })
    }
  }

  const handleLocationClick = (lat: number, long: number) => {
    if (variant === "rotate-to-location") {
      focusRef.current = locationToAngles(lat, long)
    }
  }

  const containerStyle = {
    width: "100%",
    maxWidth: 600,
    aspectRatio: variant === "scaled" ? 1 / 0.4 : 1,
    margin: "auto",
    position: "relative" as const,
    ...style,
  }

  const canvasStyle = {
    width: "100%",
    height: "100%",
    contain: "layout paint size" as const,
    opacity: 0,
    transition: "opacity 1s ease",
    cursor:
      variant === "draggable" || variant === "auto-draggable"
        ? "grab"
        : undefined,
  }

  return (
    <div className={cn("", className)} style={containerStyle}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerOut={handlePointerOut}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        style={canvasStyle}
      />
      {variant === "rotate-to-location" && (
        <>
          <div
            className="control-buttons flex flex-col items-center justify-center md:flex-row"
            style={{ gap: ".5rem" }}
          >
            {isInitializing ? "Loading locations..." : ""}
            {customLocations
              .filter((loc) => loc.lat && loc.long)
              .map((location, index) => (
                <Button
                  key={index}
                  onClick={() =>
                    handleLocationClick(location.lat!, location.long!)
                  }
                  className="bg-background/80 text-foreground hover:bg-background/90 border-border transition-all duration-200 hover:scale-105"
                >
                  {location.emoji || "📍"} {location.name}
                </Button>
              ))}
          </div>
        </>
      )}
    </div>
  )
}
