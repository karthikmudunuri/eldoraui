"use client"

import React, { useState } from "react"

import ColorPicker from "@/registry/eldoraui/color-picker"

export default function ColorPickerDemo() {
  const [color1, setColor1] = useState("#06B5EF")

  const colorValueStyle = (color: string) => ({
    color,
    fontWeight: 600,
    display: "block",
    marginTop: "4px",
  })

  return (
    <div className="flex items-center justify-center">
      <div
        style={{
          width: "360px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span style={colorValueStyle(color1)}>{color1}</span>
        </div>
        <ColorPicker
          value={color1}
          onValueChange={setColor1}
          showContrast={true}
        />
      </div>
    </div>
  )
}
