"use client"

import React, { useState } from "react"

import ColorPicker from "@/registry/eldoraui/color-picker"

export default function ColorPickerDemo3() {
  const [color7, setColor7] = useState("#D6001C")

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
          width: "386px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span style={colorValueStyle(color7)}>{color7}</span>
        </div>
        <ColorPicker
          value={color7}
          onValueChange={setColor7}
          containerBg="#0A0E17"
          containerBorderColor="#1F2832"
          containerRadius="12px"
          containerPadding="24px"
          enabledModes={["hex", "rgb"]}
          inputBg="#151C26"
          inputBorderColor="#2D3A4A"
          inputBorderWidth={1}
          inputRadius={8}
          inputTextColor="#F0F4F8"
          hexLabel="十六進数"
          rgbLabel="赤緑青"
          modeLabel="表示モード"
          rLabel="赤"
          gLabel="緑"
          bLabel="青"
          floatingLabelActiveTextColor="#E13535"
          floatingLabelFocusBorderColor="#E13535"
        />
      </div>
    </div>
  )
}
