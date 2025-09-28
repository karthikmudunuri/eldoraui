"use client"

import { Cobe } from "@/registry/eldoraui/cobe-globe"

export function CobeGlobeDemo4() {
  const customLocations = [
    { name: "Hyderabad,India", emoji: "🇮🇳" },
    { name: "New York,USA", emoji: "🇺🇸" },
    { name: "California", emoji: "🇺🇸" },
    { name: "Paris", emoji: "🇫🇷" },
    { name: "London", emoji: "🇬🇧" },
  ]

  return (
    <div className="bg-background relative z-10 h-[700px] w-full overflow-hidden rounded-lg border">
      <Cobe variant="rotate-to-location" locations={customLocations} />
    </div>
  )
}
