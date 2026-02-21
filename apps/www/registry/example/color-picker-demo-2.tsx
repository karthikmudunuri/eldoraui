"use client"

import React, { useState } from "react"

import ColorPicker from "@/registry/eldoraui/color-picker"

export default function ColorPickerDemo2() {
  const [color2, setColor2] = useState("#7B24D2")

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
          width: "372px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          direction: "rtl",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <span style={colorValueStyle(color2)}>{color2}</span>
        </div>
        <ColorPicker
          value={color2}
          onValueChange={setColor2}
          isRTL={true}
          showContrast={true}
          hexLabel="הקס"
          rgbLabel="ארג׳יבי"
          hslLabel="האסאל"
          modeLabel="מצב"
          contrastLabel="ניגודיות"
          rLabel="אדום"
          gLabel="ירוק"
          bLabel="כחול"
          hLabel="גוון"
          sLabel="רוויה"
          lLabel="בהירות"
          floatingLabelFocusBorderColor="#fff"
          floatingLabelActiveTextColor={color2}
        />
      </div>
    </div>
  )
}
