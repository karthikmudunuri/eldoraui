"use client"

import React, { useState } from "react"

import BaubleToggle from "@/registry/eldoraui/bauble-toggle"

export function BaubleToggleDemo() {
  const [isOn, setIsOn] = useState(true)

  return (
    <div
      className="relative"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
      suppressHydrationWarning
    >
      <div
        style={{
          width: "114px",
          height: "114px",
          overflow: "hidden",
          transformOrigin: "center",
          transform: "scale(5)",
          pointerEvents: "auto",
        }}
      >
        <BaubleToggle initialState={isOn} onToggleChange={setIsOn} />
      </div>
    </div>
  )
}
