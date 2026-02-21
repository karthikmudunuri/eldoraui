"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import {
  hexToHsva,
  hslaToHsva,
  hsvaToHex,
  hsvaToHsla,
  hsvaToRgba,
  rgbaToHsva,
  type HsvaColor,
} from "@uiw/color-convert"
import { Check, CheckCircle2, ChevronDown, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

// --- Utility: Color Math for Contrast ---

const parseToHsva = (color: string): HsvaColor => {
  const str = color.toLowerCase().trim()

  try {
    if (str.startsWith("#")) return hexToHsva(str)

    if (str.startsWith("rgb")) {
      const p = str.match(/[\d.]+/g)
      if (p)
        return rgbaToHsva({
          r: +p[0],
          g: +p[1],
          b: +p[2],
          a: p[3] ? +p[3] : 1,
        })
    }

    if (str.startsWith("hsl")) {
      const p = str.match(/[\d.]+/g)
      if (p)
        return hslaToHsva({
          h: +p[0],
          s: +p[1],
          l: +p[2],
          a: p[3] ? +p[3] : 1,
        })
    }
  } catch (e) {}

  return { h: 0, s: 0, v: 0, a: 1 }
}

const getRelativeLuminance = (color: string) => {
  const hsva = parseToHsva(color)
  const { r, g, b } = hsvaToRgba(hsva)
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs
}

const getContrastRatio = (lum1: number, lum2: number) => {
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

// --- Component Props ---

export interface ColorPickerProps {
  value?: string
  onValueChange?: (val: string) => void
  isRTL?: boolean
  showContrast?: boolean

  // NEW: channel fields & modes
  enabledModes?: Array<"hex" | "rgb" | "hsl">
  defaultFormat?: "hex" | "rgb" | "hsl"

  // Mode selector labels (full names)
  hexLabel?: string
  rgbLabel?: string
  hslLabel?: string
  modeLabel?: string

  // Channel input labels (single letters)
  rLabel?: string
  gLabel?: string
  bLabel?: string
  hLabel?: string
  sLabel?: string
  lLabel?: string

  contrastBgLuminance?: number
  colorPreviewAreaText?: string

  // Container styling
  containerBg?: string
  containerBorderColor?: string
  containerBorderWidth?: number
  containerRadius?: string
  containerPadding?: string
  containerElementGap?: string

  // Saturation area
  saturationHeight?: number
  saturationRadius?: number
  saturationBorderColor?: string
  saturationBorderWidth?: number

  // Saturation THUMB (draggable circle inside the saturation area)
  saturationThumbWidth?: number | string
  saturationThumbHeight?: number | string
  saturationThumbRadius?: number | string
  saturationThumbBorderStyle?: "solid" | "dashed" | "none"
  saturationThumbBorderWidth?: number
  saturationThumbBorderColor?: string
  saturationThumbBgColor?: string

  // Hue TRACK (static colorful background)
  hueTrackHeight?: number | string
  hueTrackRadius?: number | string
  hueTrackBorderWidth?: number
  hueTrackBorderColor?: string

  // Hue THUMB (draggable slider circle) - base
  hueThumbSize?: number | string
  hueThumbRadius?: number | string
  hueThumbBorderWidth?: number

  // Hue THUMB states (hover/active colors)
  hueThumbBgDefault?: string
  hueThumbBgHover?: string
  hueThumbBgActive?: string
  hueThumbBorderDefault?: string
  hueThumbBorderHover?: string
  hueThumbBorderActive?: string

  // Contrast stuff
  contrastLabel?: string
  contrastLabelSize?: string
  contrastLabelColor?: string
  contrastLabelWeight?: number
  contrastValueSize?: string
  contrastValueColor?: string
  contrastValueWeight?: number
  contrastFormat?: "value:1" | "1:value" | "value"
  contrastLabelGap?: string
  contrastItemGap?: string
  contrastBadgeGap?: string
  showContrastAALabel?: boolean
  showContrastAAALabel?: boolean
  contrastAreaTopMargin?: string

  // Input / display field (HEX only)
  inputHeight?: number
  inputBg?: string
  inputBorderColor?: string
  inputBorderWidth?: number
  inputRadius?: number
  inputTextColor?: string
  floatingLabelFocusBorderColor?: string
  inputFocusRingColor?: string
  inputErrorOutlineColor?: string

  // Floating label styling
  floatingLabelBg?: string
  floatingLabelTextColor?: string
  floatingLabelActiveTextColor?: string
  floatingLabelRadius?: number
  floatingLabelBorderColor?: string
  floatingLabelBorderWidth?: number
  floatingLabelMainTextSize?: number

  // Dropdown / combobox button
  dropdownHeight?: number
  dropdownBg?: string
  dropdownBorderColor?: string
  dropdownBorderWidth?: number
  dropdownRadius?: number
  dropdownTextColor?: string
  dropdownFocusBorderColor?: string
  dropdownFocusRingColor?: string
  dropdownChevronColor?: string

  // Dropdown menu
  dropdownMenuBg?: string
  dropdownMenuBorderColor?: string
  dropdownMenuBorderWidth?: number
  dropdownMenuRadius?: number
  dropdownMenuTextColor?: string
  dropdownMenuActiveTextColor?: string
  dropdownMenuHoverBg?: string
  dropdownMenuActiveBg?: string
  modeDropdownWidth?: string
  modeDropdownFullWidth?: boolean

  // Preview / letter area
  showLetterTop?: boolean
  previewBgFallback?: string
  previewBorderColor?: string
  previewBorderWidth?: number
  previewRadius?: number
  previewFontSize?: number
  previewFontWeight?: number
  previewTextColor?: string
  colorPreviewPosition?: "top" | "contrast" | "none"
  previewWidth?: number | string
  previewHeight?: number

  // Badge group customization
  badgeBorderWidth?: number | string
  badgeBorderRadius?: number | string
  badgeFontSize?: number | string
  badgeFontWeight?: number
  badgeIconSize?: number | string
  badgePadding?: string
  badgeIconStrokeWidth?: number
  badgeBgPass?: string
  badgeBgFail?: string
  badgeBorderPass?: string
  badgeBorderFail?: string
  badgeTextPass?: string
  badgeTextFail?: string
}

// --- Main Component ---

export default function ColorPicker({
  value = "#06B5EF",
  onValueChange,
  isRTL = false,
  showContrast = true,
  colorPreviewAreaText = "A",
  enabledModes = ["hex", "rgb", "hsl"],
  defaultFormat = "hex",
  contrastBgLuminance = 0,
  hexLabel = "HEX",
  rgbLabel = "RGB",
  hslLabel = "HSL",
  modeLabel = "Mode",
  contrastLabel = "Contrast",
  rLabel = "R",
  gLabel = "G",
  bLabel = "B",
  hLabel = "H",
  sLabel = "S",
  lLabel = "L",

  // Container
  containerBg = "#000",
  containerBorderColor = "#242424",
  containerBorderWidth = 1,
  containerRadius = "12px",
  containerPadding = "16px",
  containerElementGap = "16px",

  // Saturation
  saturationHeight = 140,
  saturationRadius = 8,
  saturationBorderColor = "#242424",
  saturationBorderWidth = 1,

  // Saturation thumb (indicator)
  saturationThumbWidth = 14,
  saturationThumbHeight = 14,
  saturationThumbRadius = 50,
  saturationThumbBorderStyle = "solid",
  saturationThumbBorderWidth = 2,
  saturationThumbBorderColor = "#ffffff",
  saturationThumbBgColor = "transparent",

  // NEW: Hue TRACK (static colorful background)
  hueTrackHeight = 10,
  hueTrackRadius = "8px",
  hueTrackBorderWidth = 1,
  hueTrackBorderColor = "transparent",

  // NEW: Hue THUMB (draggable slider circle) - base
  hueThumbSize = 16,
  hueThumbRadius = "50%",
  hueThumbBorderWidth = 3,

  // NEW: Hue THUMB states (hover/active colors)
  hueThumbBgDefault = "#f0f0f0",
  hueThumbBgHover = "#e5e5e5",
  hueThumbBgActive = "#f0f0f0",
  hueThumbBorderDefault = "#e5e5e5",
  hueThumbBorderHover = "#f0f0f0",
  hueThumbBorderActive = "#fff",

  // NEW: Badge group (AA/AAA contrast badges)
  badgeBorderWidth = 1,
  badgeBorderRadius = "50px",
  badgeFontSize = "10px",
  badgeFontWeight = 600,
  badgeIconSize = 10,
  badgePadding = "0.25rem 0.5rem",
  badgeIconStrokeWidth = 2.25,
  badgeBgPass = "rgba(65, 239, 6, 0.1)",
  badgeBgFail = "rgba(239, 6, 65, 0.1)",
  badgeBorderPass = "rgba(65, 239, 6, 0.5)",
  badgeBorderFail = "rgba(239, 6, 65, 0.5)",
  badgeTextPass = "#41EF06",
  badgeTextFail = "#EF0641",

  // Contrast
  contrastLabelSize = "12px",
  contrastLabelColor = "#737373",
  contrastLabelWeight = 700,
  contrastValueSize = "14px",
  contrastValueColor = "#ffffff",
  contrastValueWeight = 400,
  contrastFormat = "value:1",
  contrastLabelGap = "0.125rem",
  contrastItemGap = "16px",
  contrastBadgeGap = "8px",
  showContrastAALabel = true,
  showContrastAAALabel = true,
  contrastAreaTopMargin = "0px",

  // Inputs
  inputHeight = 44,
  inputBg = "#000",
  inputBorderColor = "#242424",
  inputBorderWidth = 1,
  inputRadius = 8,
  inputTextColor = "#ffffff",
  floatingLabelFocusBorderColor = "#06B5EF",
  inputErrorOutlineColor = "#EF0641",

  // Floating labels
  floatingLabelBg,
  floatingLabelTextColor = "#777777",
  floatingLabelActiveTextColor = "#ffffff",
  floatingLabelRadius = 4,
  floatingLabelBorderColor,
  floatingLabelBorderWidth = 0,
  floatingLabelMainTextSize = 14,

  // Dropdown
  dropdownHeight = 44,
  dropdownBg,
  dropdownBorderColor,
  dropdownBorderWidth,
  dropdownRadius,
  dropdownTextColor,
  dropdownFocusBorderColor,
  dropdownChevronColor = "#6b7280",

  // Dropdown menu
  dropdownMenuBg = "#111111",
  dropdownMenuBorderColor = "#242424",
  dropdownMenuBorderWidth = 1,
  dropdownMenuRadius = 10,
  dropdownMenuTextColor = "#d1d5db",
  dropdownMenuActiveTextColor = "#ffffff",
  dropdownMenuHoverBg = "rgba(255,255,255,0.05)",
  dropdownMenuActiveBg = "rgba(255,255,255,0.10)",
  modeDropdownWidth = "128px",
  modeDropdownFullWidth = false,

  // Preview area
  previewBgFallback = "#111111",
  previewBorderColor = "rgba(255,255,255,0.14)",
  previewBorderWidth = 1,
  previewRadius = 8,
  previewFontSize = 18,
  previewFontWeight = 600,
  previewTextColor = "#ffffff",

  colorPreviewPosition = "contrast",
  previewWidth = 44,
  previewHeight = inputHeight,
}: ColorPickerProps) {
  // Normalize modes
  const normalizedModes = enabledModes.length ? enabledModes : ["hex"]
  const initialFormat = normalizedModes.includes(defaultFormat)
    ? defaultFormat
    : normalizedModes[0]

  const [hsva, setHsva] = useState<HsvaColor>(parseToHsva(value))
  const [format, setFormat] = useState<"hex" | "rgb" | "hsl">(initialFormat)

  // ✅ FIXED: Track source of change + hex completely independent
  const [hexInput, setHexInput] = useState("")
  const [hexIsFocused, setHexIsFocused] = useState(false)
  const [hexError, setHexError] = useState(false)
  const [changeSource, setChangeSource] = useState<"hex" | "external" | null>(
    null
  )

  const [rgbInputs, setRgbInputs] = useState({ r: "0", g: "0", b: "0" })
  const [rgbIsFocused, setRgbIsFocused] = useState<string | null>(null)
  const [rgbErrors, setRgbErrors] = useState({ r: false, g: false, b: false })

  const [hslInputs, setHslInputs] = useState({ h: "0", s: "0", l: "0" })
  const [hslIsFocused, setHslIsFocused] = useState<string | null>(null)
  const [hslErrors, setHslErrors] = useState({ h: false, s: false, l: false })

  const satContainerRef = useRef<HTMLDivElement>(null)

  // Computed defaults
  const resolvedDropdownBg = dropdownBg ?? inputBg
  const resolvedDropdownBorderColor = dropdownBorderColor ?? inputBorderColor
  const resolvedDropdownBorderWidth = dropdownBorderWidth ?? inputBorderWidth
  const resolvedDropdownRadius = dropdownRadius ?? inputRadius
  const resolvedDropdownTextColor = dropdownTextColor ?? inputTextColor
  const resolvedDropdownFocusBorderColor =
    dropdownFocusBorderColor ?? floatingLabelFocusBorderColor
  const resolvedFloatingLabelBg = floatingLabelBg ?? containerBg

  // ✅ FIXED: Manual hex sync ONLY for external changes
  const updateHexFromColor = useCallback(() => {
    if (changeSource !== "hex" && !hexIsFocused) {
      const newHex = hsvaToHex(hsva).toUpperCase()
      setHexInput(newHex)
      setHexError(false)
    }
  }, [hsva, hexIsFocused, changeSource])

  // External prop sync
  useEffect(() => {
    const next = parseToHsva(value)
    setHsva(next)
    setChangeSource("external")
    updateHexFromColor()
  }, [value])

  // RGB/HSL sync ONLY
  useEffect(() => {
    if (!rgbIsFocused) {
      const { r, g, b } = hsvaToRgba(hsva)
      setRgbInputs({
        r: Math.round(r).toString(),
        g: Math.round(g).toString(),
        b: Math.round(b).toString(),
      })
      setRgbErrors({ r: false, g: false, b: false })
    }
    if (!hslIsFocused) {
      const { h, s, l } = hsvaToHsla(hsva)
      setHslInputs({
        h: Math.round(h).toString(),
        s: Math.round(s).toString(),
        l: Math.round(l).toString(),
      })
      setHslErrors({ h: false, s: false, l: false })
    }
  }, [hsva, format, rgbIsFocused, hslIsFocused])

  const clamp = (val: number, min: number, max: number) =>
    Number.isNaN(val) ? min : Math.min(max, Math.max(min, val))

  const parseNumericChannel = (raw: string, min: number, max: number) => {
    const trimmed = raw.trim()
    if (!trimmed.length) return { value: 0, isValid: false }
    const n = Number(trimmed)
    if (Number.isNaN(n)) return { value: 0, isValid: false }
    return { value: clamp(n, min, max), isValid: true }
  }

  const triggerChange = useCallback(
    (next: HsvaColor, source: "hex" | "external" = "external") => {
      setChangeSource(source)
      setHsva(next)
      let out = ""
      if (format === "hex") out = hsvaToHex(next)
      else if (format === "rgb") {
        const { r, g, b } = hsvaToRgba(next)
        out = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
      } else {
        const { h, s, l } = hsvaToHsla(next)
        out = `hsl(${Math.round(h)}, ${Math.round(s)}%, ${Math.round(l)}%)`
      }
      onValueChange?.(out)
    },
    [format, onValueChange]
  )

  // ✅ FIXED HEX - TRACKS SOURCE + NEVER AUTO-CORRECTS
  const handleHexChange = (val: string) => {
    if (val.length > 7) return
    setHexInput(val) // ALWAYS free - NO corrections ever

    const trimmed = val.trim()
    if (!trimmed) {
      setHexError(false)
      return
    }

    const parsed = parseToHsva(trimmed)
    const isFallbackZero = parsed.h === 0 && parsed.s === 0 && parsed.v === 0
    setHexError(!!trimmed && isFallbackZero && trimmed !== "#000")

    triggerChange(parsed, "hex") // Mark as hex source - NO input correction
  }

  const handleHexFocus = () => setHexIsFocused(true)
  const handleHexBlur = () => setHexIsFocused(false)

  // RGB handlers (mark source)
  const handleRgbChannelChange = (channel: "r" | "g" | "b", raw: string) => {
    if (raw.length > 3) return
    const newInputs = { ...rgbInputs, [channel]: raw }
    setRgbInputs(newInputs)
    const ranges = { r: [0, 255], g: [0, 255], b: [0, 255] } as const
    const parsed = parseNumericChannel(
      raw,
      ranges[channel][0],
      ranges[channel][1]
    )
    setRgbErrors((prev) => ({ ...prev, [channel]: !parsed.isValid }))
    const allValid = ["r", "g", "b"].every((c) => {
      const [min, max] = ranges[c]
      return parseNumericChannel(newInputs[c], min, max).isValid
    })
    if (allValid) {
      const r = parseNumericChannel(newInputs.r, 0, 255).value
      const g = parseNumericChannel(newInputs.g, 0, 255).value
      const b = parseNumericChannel(newInputs.b, 0, 255).value
      triggerChange(rgbaToHsva({ r, g, b, a: 1 }), "external")
    }
  }

  const handleRgbFocus = (channel: "r" | "g" | "b") => setRgbIsFocused(channel)
  const handleRgbBlur = () => setRgbIsFocused(null)

  // HSL handlers (mark source)
  const handleHslChannelChange = (channel: "h" | "s" | "l", raw: string) => {
    if (raw.length > 3) return
    const newInputs = { ...hslInputs, [channel]: raw }
    setHslInputs(newInputs)
    const ranges = { h: [0, 360], s: [0, 100], l: [0, 100] } as const
    const parsed = parseNumericChannel(
      raw,
      ranges[channel][0],
      ranges[channel][1]
    )
    setHslErrors((prev) => ({ ...prev, [channel]: !parsed.isValid }))
    const allValid = ["h", "s", "l"].every((c) => {
      const [min, max] = ranges[c]
      return parseNumericChannel(newInputs[c], min, max).isValid
    })
    if (allValid) {
      const h = parseNumericChannel(newInputs.h, 0, 360).value
      const s = parseNumericChannel(newInputs.s, 0, 100).value
      const l = parseNumericChannel(newInputs.l, 0, 100).value
      triggerChange(hslaToHsva({ h, s, l, a: 1 }), "external")
    }
  }

  const handleHslFocus = (channel: "h" | "s" | "l") => setHslIsFocused(channel)
  const handleHslBlur = () => setHslIsFocused(null)

  // ✅ FIXED Saturation - external source
  const handleSatMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    const handleMove = (moveEvent: MouseEvent) => {
      if (!satContainerRef.current) return
      const rect = satContainerRef.current.getBoundingClientRect()
      const x = Math.max(
        0,
        Math.min((moveEvent.clientX - rect.left) / rect.width, 1)
      )
      const y = Math.max(
        0,
        Math.min(1 - (moveEvent.clientY - rect.top) / rect.height, 1)
      )
      const newSat = isRTL ? (1 - x) * 100 : x * 100
      const newBright = y * 100
      triggerChange({ ...hsva, s: newSat, v: newBright }, "external")
      updateHexFromColor()
    }
    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("mouseup", handleUp)
    }
    window.addEventListener("mousemove", handleMove)
    window.addEventListener("mouseup", handleUp)
    handleMove(e.nativeEvent as unknown as MouseEvent)
  }

  const formatContrast = (ratio: number) => {
    switch (contrastFormat) {
      case "1:value":
        return `1:${ratio.toFixed(2)}`
      case "value":
        return ratio.toFixed(2)
      default:
        return `${ratio.toFixed(2)}:1`
    }
  }

  const contrastRatio = useMemo(() => {
    const lum = getRelativeLuminance(hsvaToHex(hsva))
    return getContrastRatio(lum, contrastBgLuminance)
  }, [hsva, contrastBgLuminance])

  const autoPreviewTextColor =
    hsva.v > 60 && hsva.s < 30 ? "#000000" : "#ffffff"
  const showModeDropdown = normalizedModes.length > 1

  // ✅ FIXED: Add autocomplete="off" to prevent browser interference
  return (
    <div
      className={cn("flex flex-col select-none", isRTL && "rtl")}
      style={{
        backgroundColor: containerBg,
        borderStyle: "solid",
        borderColor: containerBorderColor,
        borderWidth: containerBorderWidth,
        borderRadius: containerRadius,
        padding: containerPadding,
        gap: containerElementGap,
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      {/* Saturation Area */}
      <div
        ref={satContainerRef}
        onMouseDown={handleSatMouseDown}
        className="relative w-full cursor-crosshair"
        style={{
          height: saturationHeight,
          borderRadius: saturationRadius,
          borderStyle: "solid",
          borderColor: saturationBorderColor,
          borderWidth: saturationBorderWidth,
          overflow: "hidden",
          background: `linear-gradient(to top, #000000, transparent), ${isRTL ? "linear-gradient(to left, #ffffff, transparent)" : "linear-gradient(to right, #ffffff, transparent)"}, hsl(${hsva.h}, 100%, 50%)`,
          backgroundOrigin: "border-box",
          backgroundClip: "border-box",
        }}
      >
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: isRTL ? `${100 - hsva.s}%` : `${hsva.s}%`,
            top: `${100 - hsva.v}%`,
            width: saturationThumbWidth,
            height: saturationThumbHeight,
            borderRadius: saturationThumbRadius,
            borderStyle: saturationThumbBorderStyle,
            borderWidth: saturationThumbBorderWidth,
            backgroundColor: saturationThumbBgColor,
            borderColor: saturationThumbBorderColor,
          }}
        />
      </div>

      {/* Hue Slider - Custom thumb states + keyboard */}
      <CustomSlider
        id="hue"
        min={0}
        max={360}
        step={0.1}
        value={hsva.h}
        onValueChange={(newHue) => {
          triggerChange({ ...hsva, h: newHue }, "external")
          updateHexFromColor()
        }}
        trackHeight={
          typeof hueTrackHeight === "number"
            ? `${hueTrackHeight}px`
            : hueTrackHeight
        }
        thumbWidth={
          typeof hueThumbSize === "number" ? `${hueThumbSize}px` : hueThumbSize
        }
        thumbHeight={
          typeof hueThumbSize === "number" ? `${hueThumbSize}px` : hueThumbSize
        }
        thumbBorderWidth={`${hueThumbBorderWidth}px`}
        thumbBorderRadius={
          typeof hueThumbRadius === "number"
            ? `${hueThumbRadius}px`
            : hueThumbRadius
        }
        // ✅ FIXED: All 3 static track props
        trackBorderRadius={
          typeof hueTrackRadius === "number"
            ? `${hueTrackRadius}px`
            : hueTrackRadius
        }
        trackBorderWidth={`${hueTrackBorderWidth}px`}
        trackBorderColor={hueTrackBorderColor}
        trackFillBorderRadius={
          typeof hueTrackRadius === "number"
            ? `${hueTrackRadius}px`
            : hueTrackRadius
        }
        colorTrackBackground={
          isRTL
            ? "linear-gradient(to left, red, yellow, lime, cyan, blue, magenta, red)"
            : "linear-gradient(to right, red, yellow, lime, cyan, blue, magenta, red)"
        }
        colorFillDefault="transparent"
        colorFillHover="transparent"
        colorFillActive="transparent"
        colorThumbDefault={hueThumbBgDefault}
        colorThumbHover={hueThumbBgHover}
        colorThumbActive={hueThumbBgActive}
        colorThumbBorderDefault={hueThumbBorderDefault}
        colorThumbBorderHover={hueThumbBorderHover}
        colorThumbBorderActive={hueThumbBorderActive}
        isRTL={isRTL}
        keyStep={1}
      />

      {/* Controls Row */}
      <div
        className={cn(
          "flex gap-2",
          modeDropdownFullWidth ? "flex-col" : "items-start"
        )}
      >
        <div
          className={cn(
            "flex w-full gap-2",
            modeDropdownFullWidth ? "flex-col" : "items-start"
          )}
        >
          {colorPreviewPosition === "top" && (
            <ColorPreviewBox
              bg={hsvaToHex(hsva) || previewBgFallback}
              label={colorPreviewAreaText}
              width={previewWidth}
              height={previewHeight}
              radius={previewRadius}
              borderColor={previewBorderColor}
              borderWidth={previewBorderWidth}
              fontSize={previewFontSize}
              fontWeight={previewFontWeight}
              fontColor={previewTextColor ?? autoPreviewTextColor}
            />
          )}

          {showModeDropdown && (
            <div
              style={{
                width: modeDropdownFullWidth ? "100%" : modeDropdownWidth,
                flexShrink: 0,
              }}
            >
              <FloatingLabelSelect
                value={format}
                onChange={(f) => {
                  setFormat(f as "hex" | "rgb" | "hsl")
                  if (f === "hex") {
                    setChangeSource("external")
                    updateHexFromColor()
                  }
                }}
                label={modeLabel}
                options={normalizedModes}
                isRTL={isRTL}
                t={(key) =>
                  key === "hex" ? hexLabel : key === "rgb" ? rgbLabel : hslLabel
                }
                height={dropdownHeight}
                bg={resolvedDropdownBg}
                borderColor={resolvedDropdownBorderColor}
                borderWidth={resolvedDropdownBorderWidth}
                radius={resolvedDropdownRadius}
                fontSize={floatingLabelMainTextSize}
                textColor={resolvedDropdownTextColor}
                focusBorderColor={resolvedDropdownFocusBorderColor}
                chevronColor={dropdownChevronColor}
                floatingLabelBg={resolvedFloatingLabelBg}
                floatingLabelTextColor={floatingLabelTextColor}
                floatingLabelActiveTextColor={floatingLabelActiveTextColor}
                floatingLabelRadius={floatingLabelRadius}
                floatingLabelBorderColor={floatingLabelBorderColor}
                floatingLabelBorderWidth={floatingLabelBorderWidth}
                menuBg={dropdownMenuBg}
                menuBorderColor={dropdownMenuBorderColor}
                menuBorderWidth={dropdownMenuBorderWidth}
                menuRadius={dropdownMenuRadius}
                menuTextColor={dropdownMenuTextColor}
                menuActiveTextColor={dropdownMenuActiveTextColor}
                menuHoverBg={dropdownMenuHoverBg}
                menuActiveBg={dropdownMenuActiveBg}
              />
            </div>
          )}

          <div className="flex flex-1 flex-col gap-2">
            {format === "hex" && (
              <FloatingLabelInput
                value={hexInput}
                onChange={handleHexChange}
                onFocus={handleHexFocus}
                onBlur={handleHexBlur}
                label={hexLabel}
                isRTL={isRTL}
                maxLength={7}
                height={inputHeight}
                bg={inputBg}
                borderColor={inputBorderColor}
                borderWidth={inputBorderWidth}
                radius={inputRadius}
                fontSize={floatingLabelMainTextSize}
                textColor={inputTextColor}
                focusBorderColor={floatingLabelFocusBorderColor}
                floatingLabelBg={resolvedFloatingLabelBg}
                floatingLabelTextColor={floatingLabelTextColor}
                floatingLabelActiveTextColor={floatingLabelActiveTextColor}
                floatingLabelRadius={floatingLabelRadius}
                floatingLabelBorderColor={floatingLabelBorderColor}
                floatingLabelBorderWidth={floatingLabelBorderWidth}
                hasError={hexError}
                errorOutlineColor={inputErrorOutlineColor}
              />
            )}
            {/* RGB/HSL inputs unchanged */}
            {format === "rgb" && (
              <div className="grid grid-cols-3 gap-2">
                {(["r", "g", "b"] as const).map((ch) => (
                  <FloatingLabelInput
                    key={ch}
                    value={rgbInputs[ch]}
                    onChange={(v) => handleRgbChannelChange(ch, v)}
                    onFocus={() => handleRgbFocus(ch)}
                    onBlur={handleRgbBlur}
                    label={ch === "r" ? rLabel : ch === "g" ? gLabel : bLabel}
                    isRTL={isRTL}
                    maxLength={3}
                    height={inputHeight}
                    bg={inputBg}
                    borderColor={inputBorderColor}
                    borderWidth={inputBorderWidth}
                    radius={inputRadius}
                    fontSize={floatingLabelMainTextSize}
                    textColor={inputTextColor}
                    focusBorderColor={floatingLabelFocusBorderColor}
                    floatingLabelBg={resolvedFloatingLabelBg}
                    floatingLabelTextColor={floatingLabelTextColor}
                    floatingLabelActiveTextColor={floatingLabelActiveTextColor}
                    floatingLabelRadius={floatingLabelRadius}
                    floatingLabelBorderColor={floatingLabelBorderColor}
                    floatingLabelBorderWidth={floatingLabelBorderWidth}
                    hasError={rgbErrors[ch]}
                    errorOutlineColor={inputErrorOutlineColor}
                  />
                ))}
              </div>
            )}
            {format === "hsl" && (
              <div className="grid grid-cols-3 gap-2">
                {(["h", "s", "l"] as const).map((ch) => (
                  <FloatingLabelInput
                    key={ch}
                    value={hslInputs[ch]}
                    onChange={(v) => handleHslChannelChange(ch, v)}
                    onFocus={() => handleHslFocus(ch)}
                    onBlur={handleHslBlur}
                    label={ch === "h" ? hLabel : ch === "s" ? sLabel : lLabel}
                    isRTL={isRTL}
                    maxLength={3}
                    height={inputHeight}
                    bg={inputBg}
                    borderColor={inputBorderColor}
                    borderWidth={inputBorderWidth}
                    radius={inputRadius}
                    fontSize={floatingLabelMainTextSize}
                    textColor={inputTextColor}
                    focusBorderColor={floatingLabelFocusBorderColor}
                    floatingLabelBg={resolvedFloatingLabelBg}
                    floatingLabelTextColor={floatingLabelTextColor}
                    floatingLabelActiveTextColor={floatingLabelActiveTextColor}
                    floatingLabelRadius={floatingLabelRadius}
                    floatingLabelBorderColor={floatingLabelBorderColor}
                    floatingLabelBorderWidth={floatingLabelBorderWidth}
                    hasError={hslErrors[ch]}
                    errorOutlineColor={inputErrorOutlineColor}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5. Contrast Row */}
      {showContrast && (
        <div
          className="flex items-center justify-between"
          style={{
            marginTop: contrastAreaTopMargin || undefined,
          }}
        >
          <div className="flex items-center" style={{ gap: contrastItemGap }}>
            {colorPreviewPosition === "contrast" && (
              <div
                className="inline-flex items-center justify-center select-none"
                style={{
                  backgroundColor: hsvaToHex(hsva) || previewBgFallback,
                  width: previewWidth,
                  height: previewHeight,
                  borderColor: previewBorderColor,
                  borderWidth: previewBorderWidth,
                  borderStyle: "solid",
                  borderRadius: previewRadius,
                  color: previewTextColor ?? autoPreviewTextColor,
                  fontSize: previewFontSize,
                  fontWeight: previewFontWeight,
                }}
              >
                {colorPreviewAreaText}
              </div>
            )}
            <div className="flex flex-col" style={{ gap: contrastLabelGap }}>
              <span
                style={{
                  fontSize: contrastLabelSize,
                  color: contrastLabelColor,
                  fontWeight: contrastLabelWeight,
                }}
              >
                {contrastLabel}
              </span>
              <span
                style={{
                  fontSize: contrastValueSize,
                  color: contrastValueColor,
                  fontWeight: contrastValueWeight,
                  fontFamily: "monospace",
                }}
              >
                {formatContrast(contrastRatio)}
              </span>
            </div>
          </div>
          <div className="flex" style={{ gap: contrastBadgeGap }}>
            {showContrastAALabel && (
              <Badge
                pass={contrastRatio >= 4.5}
                label="AA"
                badgeBorderWidth={badgeBorderWidth}
                badgeBorderRadius={badgeBorderRadius}
                badgeFontSize={badgeFontSize}
                badgeFontWeight={badgeFontWeight}
                badgeIconSize={badgeIconSize}
                badgePadding={badgePadding}
                badgeIconStrokeWidth={badgeIconStrokeWidth}
                badgeBgPass={badgeBgPass}
                badgeBgFail={badgeBgFail}
                badgeBorderPass={badgeBorderPass}
                badgeBorderFail={badgeBorderFail}
                badgeTextPass={badgeTextPass}
                badgeTextFail={badgeTextFail}
              />
            )}
            {showContrastAAALabel && (
              <Badge
                pass={contrastRatio >= 7}
                label="AAA"
                badgeBorderWidth={badgeBorderWidth}
                badgeBorderRadius={badgeBorderRadius}
                badgeFontSize={badgeFontSize}
                badgeFontWeight={badgeFontWeight}
                badgeIconSize={badgeIconSize}
                badgePadding={badgePadding}
                badgeIconStrokeWidth={badgeIconStrokeWidth}
                badgeBgPass={badgeBgPass}
                badgeBgFail={badgeBgFail}
                badgeBorderPass={badgeBorderPass}
                badgeBorderFail={badgeBorderFail}
                badgeTextPass={badgeTextPass}
                badgeTextFail={badgeTextFail}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

// --- Sub-Components ---

function Badge({
  pass,
  label,
  // All props now support string | number for sizes
  badgeBorderWidth = 1,
  badgeBorderRadius = "999px",
  badgeFontSize = "10px",
  badgeFontWeight = 700,
  badgeIconSize = 10,
  badgePadding = "0.25rem 0.5rem",
  badgeIconStrokeWidth = 1.5,
  badgeBgPass = "rgba(6, 181, 239, 0.1)",
  badgeBgFail = "rgba(255, 59, 59, 0.1)",
  badgeBorderPass = "rgba(6, 181, 239, 0.5)",
  badgeBorderFail = "rgba(255, 59, 59, 0.5)",
  badgeTextPass = "#06B5EF",
  badgeTextFail = "#EF0641",
}: {
  pass: boolean
  label: string
  badgeBorderWidth?: number | string
  badgeBorderRadius?: number | string
  badgeFontSize?: number | string
  badgeFontWeight?: number
  badgeIconSize?: number | string
  badgePadding?: string
  badgeIconStrokeWidth?: number
  badgeBgPass?: string
  badgeBgFail?: string
  badgeBorderPass?: string
  badgeBorderFail?: string
  badgeTextPass?: string
  badgeTextFail?: string
}) {
  const borderWidthStr =
    typeof badgeBorderWidth === "number"
      ? `${badgeBorderWidth}px`
      : badgeBorderWidth
  const borderRadiusStr =
    typeof badgeBorderRadius === "number"
      ? `${badgeBorderRadius}px`
      : badgeBorderRadius
  const fontSizeStr =
    typeof badgeFontSize === "number" ? `${badgeFontSize}px` : badgeFontSize
  const iconSizeStr =
    typeof badgeIconSize === "number" ? `${badgeIconSize}px` : badgeIconSize

  return (
    <div
      className="flex items-center gap-1 border px-2 py-0.5 font-bold select-none"
      style={{
        backgroundColor: pass ? badgeBgPass : badgeBgFail,
        borderColor: pass ? badgeBorderPass : badgeBorderFail,
        borderWidth: borderWidthStr,
        borderRadius: borderRadiusStr,
        fontSize: fontSizeStr,
        fontWeight: badgeFontWeight,
        padding: badgePadding,
        color: pass ? badgeTextPass : badgeTextFail,
      }}
    >
      {pass ? (
        <CheckCircle2
          size={Number(iconSizeStr.replace("px", ""))}
          strokeWidth={badgeIconStrokeWidth}
        />
      ) : (
        <XCircle
          size={Number(iconSizeStr.replace("px", ""))}
          strokeWidth={badgeIconStrokeWidth}
        />
      )}
      {label}
    </div>
  )
}

// --- FIXED Floating Label Input ---
// IMMEDIATE parent prop sync + perfect color erasing respect

type FloatingLabelInputProps = {
  value: string
  onChange: (v: string) => void
  label: string
  isRTL: boolean
  maxLength?: number
  height: number
  bg: string
  borderColor: string // ← IMMEDIATELY responsive
  borderWidth: number
  radius: number
  fontSize: number
  textColor: string
  focusBorderColor: string
  floatingLabelBg: string // ← IMMEDIATELY responsive
  floatingLabelTextColor: string
  floatingLabelActiveTextColor: string
  floatingLabelRadius: number
  floatingLabelBorderColor?: string
  floatingLabelBorderWidth: number
  hasError?: boolean
  errorOutlineColor: string
}

export const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  value,
  onChange,
  label,
  isRTL,
  hasError = false,
  maxLength = 64,
  height,
  bg,
  borderColor,
  borderWidth,
  radius,
  fontSize,
  textColor,
  focusBorderColor,
  floatingLabelBg,
  floatingLabelTextColor,
  floatingLabelActiveTextColor,
  floatingLabelRadius,
  floatingLabelBorderColor,
  floatingLabelBorderWidth,
  errorOutlineColor,
}) => {
  const [isFocused, setIsFocused] = React.useState(false)
  const hasValue = value.length > 0

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value
    onChange(newVal)
  }

  // ✅ FIXED: IMMEDIATE parent prop reactivity
  const labelTextColor = hasError
    ? errorOutlineColor
    : isFocused
      ? floatingLabelActiveTextColor
      : floatingLabelTextColor

  const currentBorderColor = hasError ? errorOutlineColor : borderColor
  const currentFocusBorderColor = hasError
    ? errorOutlineColor
    : focusBorderColor

  const inputRef = React.useRef<HTMLInputElement>(null)

  // ✅ FIXED: useEffect for immediate parent prop changes
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.borderColor = isFocused
        ? currentFocusBorderColor
        : currentBorderColor
    }
  }, [borderColor, focusBorderColor, hasError, errorOutlineColor, isFocused])

  // ✅ FIXED: Manual style updates respect parent changes instantly
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true)
    e.currentTarget.style.borderColor = currentFocusBorderColor
  }

  const handleBlur = (e: React.BlurEvent<HTMLInputElement>) => {
    setIsFocused(false)
    e.currentTarget.style.borderColor = currentBorderColor
  }

  return (
    <div
      className={[
        "floating-input-group",
        isRTL ? "rtl" : "",
        isFocused ? "active" : "",
        hasValue ? "has-value" : "",
      ].join(" ")}
      style={{
        "--input-height": `${height}px`,
        "--input-font-size": `${fontSize}px`,
        "--label-font-size": `${fontSize}px`,
        "--label-active-font-size": `${fontSize * 0.75}px`,
        "--input-padding": "12px 16px 8px",
        "--label-padding": "0 8px",
        "--label-active-padding": "0 6px",
        "--input-outline": currentBorderColor,
        "--input-outline-focus": currentFocusBorderColor,
        "--foreground": textColor,
        "--muted-foreground": floatingLabelTextColor,
        "--accent-color": floatingLabelActiveTextColor,
        "--parent-background": floatingLabelBg, // ← IMMEDIATELY updates
        "--general-rounding": `${radius}px`,
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={handleChange}
        className="floating-input"
        maxLength={maxLength}
        autoComplete="off" // ✅ Browser autofill prevention
        inputMode="text" // ✅ Better mobile
        spellCheck="false" // ✅ No autocorrect
        style={{
          backgroundColor: bg,
          borderRadius: radius,
          borderStyle: "solid",
          borderWidth,
          color: textColor,
          direction: "ltr",
          textAlign: isRTL ? "right" : "left",
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className="floating-label"
        style={{
          color: labelTextColor, // ← IMMEDIATELY responsive
          borderRadius: floatingLabelRadius,
          borderStyle: floatingLabelBorderColor ? "solid" : "none",
          borderColor: floatingLabelBorderColor,
          borderWidth: floatingLabelBorderWidth,
          backgroundColor: floatingLabelBg, // ← EXPLICIT background
        }}
      >
        {label}
      </label>

      <style jsx>{`
        .floating-input-group {
          position: relative;
          width: 100%;
          margin-top: 8px;
        }

        .floating-input {
          width: 100%;
          height: var(--input-height);
          padding: var(--input-padding);
          font-size: var(--input-font-size);
          font-weight: 400;
          font-family: "SF Mono", Monaco, "Roboto Mono", monospace;
          color: var(--foreground);
          background: var(--parent-background);
          border: 2px solid var(--input-outline);
          border-radius: var(--general-rounding);
          outline: none;
          box-sizing: border-box;
          text-transform: uppercase;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          transition: border-color 0.15s ease; // ✅ Faster transition
          line-height: 1.4;
        }

        .floating-input:focus {
          border-color: var(--input-outline-focus);
        }

        .floating-input-group.rtl .floating-input {
          direction: rtl;
          text-align: right;
        }

        .floating-label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: var(--label-font-size);
          pointer-events: none;
          padding: var(--label-padding);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transform-origin: top left;
        }

        .floating-input-group.rtl .floating-label {
          right: 12px;
          left: auto;
          transform-origin: top right;
        }

        .floating-input-group:not(.active):not(.has-value) .floating-label {
          top: 50%;
          transform: translateY(-50%);
          font-size: var(--label-font-size);
          padding: var(--label-padding);
        }

        .floating-input-group.active .floating-label,
        .floating-input-group.has-value .floating-label {
          top: 1px;
          left: 12px;
          font-size: var(--label-active-font-size);
          padding: var(--label-active-padding);
        }

        .floating-input-group.rtl.active .floating-label,
        .floating-input-group.rtl.has-value .floating-label {
          right: 12px;
          left: auto;
        }
      `}</style>
    </div>
  )
}

// --- Floating Label Select ---
type FloatingLabelSelectProps = {
  value: string
  onChange: (v: string) => void
  label: string
  options: string[]
  isRTL: boolean
  t: (key: string) => string
  height: number
  bg: string
  borderColor: string
  borderWidth: number
  radius: number
  fontSize: number
  textColor: string
  focusBorderColor: string
  focusRingColor: string
  chevronColor: string
  floatingLabelBg: string
  floatingLabelTextColor: string
  floatingLabelActiveTextColor: string
  floatingLabelRadius: number
  floatingLabelBorderColor?: string
  floatingLabelBorderWidth: number
  menuBg: string
  menuBorderColor: string
  menuBorderWidth: number
  menuRadius: number
  menuTextColor: string
  menuActiveTextColor: string
  menuHoverBg: string
  menuActiveBg: string
}

export const FloatingLabelSelect: React.FC<FloatingLabelSelectProps> = ({
  value,
  onChange,
  label,
  options,
  isRTL,
  t,
  height,
  bg,
  borderColor,
  borderWidth,
  radius,
  fontSize,
  textColor,
  focusBorderColor,
  chevronColor,
  floatingLabelBg,
  floatingLabelTextColor,
  floatingLabelActiveTextColor,
  floatingLabelRadius,
  floatingLabelBorderColor,
  floatingLabelBorderWidth,
  menuBg,
  menuBorderColor,
  menuBorderWidth,
  menuRadius,
  menuTextColor,
  menuActiveTextColor,
  menuHoverBg,
  menuActiveBg,
}) => {
  const [open, setOpen] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const hasValue = value !== null && value !== undefined && value !== "" // Tracks if select has selection

  const buttonRef = React.useRef<HTMLButtonElement | null>(null)
  const listRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (
        !buttonRef.current?.contains(e.target as Node) &&
        !listRef.current?.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    window.addEventListener("mousedown", handler)
    return () => window.removeEventListener("mousedown", handler)
  }, [open])

  const currentLabel = value ? t(value) : label

  return (
    <div
      className={[
        "floating-select-group",
        isRTL ? "rtl" : "",
        isFocused ? "active" : "",
        hasValue ? "has-value" : "",
      ].join(" ")}
      style={{
        "--input-height": `${height}px`,
        "--input-font-size": `${fontSize}px`,
        "--label-font-size": `${fontSize}px`,
        "--label-active-font-size": `${fontSize * 0.75}px`,
        "--input-padding": "12px 16px 8px",
        "--label-padding": "0 8px",
        "--label-active-padding": "0 6px",
        "--input-outline": borderColor,
        "--input-outline-focus": focusBorderColor,
        "--foreground": textColor,
        "--muted-foreground": floatingLabelTextColor,
        "--accent-color": floatingLabelActiveTextColor,
        "--parent-background": floatingLabelBg,
        "--general-rounding": `${radius}px`,
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="floating-select"
        style={{
          backgroundColor: bg,
          borderRadius: radius,
          borderStyle: "solid",
          borderWidth,
          color: textColor,
          direction: "ltr",
          textAlign: isRTL ? "right" : "left",
        }}
        onClick={() => setOpen((o) => !o)}
        onFocus={(e) => {
          setIsFocused(true)
          e.currentTarget.style.borderColor = focusBorderColor
        }}
        onBlur={(e) => {
          setIsFocused(false)
          e.currentTarget.style.borderColor = borderColor
        }}
      >
        <span className="truncate">{currentLabel}</span>
        <ChevronDown size={16} className="ml-2 shrink-0" color={chevronColor} />
      </button>

      <label
        className="floating-label"
        style={{
          color: isFocused
            ? floatingLabelActiveTextColor
            : floatingLabelTextColor,
          borderRadius: floatingLabelRadius,
          borderStyle: floatingLabelBorderColor ? "solid" : "none",
          borderColor: floatingLabelBorderColor,
          borderWidth: floatingLabelBorderWidth,
        }}
      >
        {label}
      </label>

      {open && (
        <div
          ref={listRef}
          className={cn(
            "absolute z-50 mt-1 max-h-48 min-w-[120px] overflow-auto border py-1 shadow-2xl",
            isRTL ? "right-0" : "left-0"
          )}
          style={{
            backgroundColor: menuBg,
            borderRadius: menuRadius,
            borderStyle: "solid",
            borderColor: menuBorderColor,
            borderWidth: menuBorderWidth,
          }}
        >
          {options.map((opt) => {
            const active = opt === value
            return (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  onChange(opt)
                  setOpen(false)
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-[11px] uppercase transition-colors"
                style={{
                  direction: isRTL ? "rtl" : "ltr",
                  backgroundColor: active ? menuActiveBg : "transparent",
                  color: active ? menuActiveTextColor : menuTextColor,
                }}
                onMouseEnter={(e) => {
                  if (!active)
                    e.currentTarget.style.backgroundColor = menuHoverBg
                }}
                onMouseLeave={(e) => {
                  if (!active)
                    e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                <span className="truncate">{t(opt)}</span>
                {active && <Check size={12} />}
              </button>
            )
          })}
        </div>
      )}

      <style jsx>{`
        .floating-select-group {
          position: relative;
          width: 100%;
          margin-top: 8px;
        }

        .floating-select {
          width: 100%;
          height: var(--input-height);
          padding: var(--input-padding);
          font-size: var(--input-font-size);
          font-weight: 400;
          font-family: "SF Mono", Monaco, "Roboto Mono", monospace;
          color: var(--foreground);
          background: var(--parent-background);
          border: 2px solid var(--input-outline);
          border-radius: var(--general-rounding);
          outline: none;
          box-sizing: border-box;
          text-transform: uppercase;
          box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
          transition: border-color 0.3s ease;
          line-height: 1.4;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .floating-select:focus {
          border-color: var(--input-outline-focus);
        }

        .floating-select-group.rtl .floating-select {
          direction: rtl;
          text-align: right;
        }

        .floating-label {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          font-size: var(--label-font-size);
          pointer-events: none;
          background: var(--parent-background);
          padding: var(--label-padding);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transform-origin: top left;
        }

        .floating-select-group.rtl .floating-label {
          right: 12px;
          left: auto;
          transform-origin: top right;
        }

        .floating-select-group:not(.active):not(.has-value) .floating-label {
          top: 50%;
          transform: translateY(-50%);
          font-size: var(--label-font-size);
          padding: var(--label-padding);
        }

        .floating-select-group.active .floating-label,
        .floating-select-group.has-value .floating-label {
          top: 1px;
          left: 12px;
          font-size: var(--label-active-font-size);
          padding: var(--label-active-padding);
        }

        .floating-select-group.rtl.active .floating-label,
        .floating-select-group.rtl.has-value .floating-label {
          right: 12px;
          left: auto;
        }
      `}</style>
    </div>
  )
}

type ColorPreviewBoxProps = {
  label?: string
  height?: string | number
  width?: string | number
  bg?: string
  borderColor?: string
  borderWidth?: string | number
  radius?: string | number
  fontSize?: string | number
  fontWeight?: string | number
  fontColor?: string
}

export const ColorPreviewBox: React.FC<ColorPreviewBoxProps> = ({
  label,
  height,
  width,
  bg,
  borderColor,
  borderWidth,
  radius,
  fontSize,
  fontWeight,
  fontColor,
}) => {
  return (
    <div
      className="relative mt-2 flex items-center justify-center"
      style={{ width, height }}
    >
      <input
        type="text"
        readOnly
        tabIndex={-1}
        value=""
        className="absolute inset-0 font-mono uppercase shadow-inner transition-all outline-none"
        style={{
          pointerEvents: "none",
          userSelect: "none",
          backgroundColor: bg,
          borderRadius: radius,
          borderStyle: "solid",
          borderColor,
          borderWidth,
          color: fontColor,
          fontSize,
          fontWeight,
          margin: 0,
        }}
      />
      <label
        className="absolute text-center"
        style={{
          color: fontColor,
          fontSize,
          fontWeight,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {label}
      </label>
    </div>
  )
}

export interface CustomSliderProps {
  id: string
  min?: number
  max?: number
  step?: number
  value: number
  onValueChange: (value: number) => void
  disabled?: boolean
  trackHeight?: string
  thumbWidth?: string
  thumbHeight?: string
  width?: string
  trackBorderRadius?: string
  trackBorderWidth?: string
  trackBorderColor?: string
  thumbBorderRadius?: string
  thumbBorderWidth?: string
  colorTrackBackground?: string
  colorFillDefault?: string
  colorFillHover?: string
  colorFillActive?: string
  colorThumbDefault?: string
  colorThumbHover?: string
  colorThumbActive?: string
  colorThumbBorderDefault?: string
  colorThumbBorderHover?: string
  colorThumbBorderActive?: string
  ariaLabel?: string
  isRTL?: boolean
  keyStep?: number
}

export function CustomSlider({
  id,
  min = 0,
  max = 100,
  step = 1,
  value,
  onValueChange,
  disabled = false,
  trackHeight = "8px",
  thumbWidth = "20px",
  thumbHeight = "20px",
  width = "100%",
  trackBorderRadius = "8px", // ✅ NEW DEFAULT
  trackBorderWidth = "0px", // ✅ NEW DEFAULT (0px = no border)
  trackBorderColor = "transparent", // ✅ NEW DEFAULT
  thumbBorderRadius = "50%",
  thumbBorderWidth = "2px",
  colorTrackBackground = "#262626",
  colorFillDefault = "#00A7FA",
  colorFillHover = "#55C7FF",
  colorFillActive = "#55C7FF",
  colorThumbDefault = "#262626",
  colorThumbHover = "#121212",
  colorThumbActive = "#262626",
  colorThumbBorderDefault = "#0083C4",
  colorThumbBorderHover = "#0079B5",
  colorThumbBorderActive = "#FFFFFF",
  ariaLabel = "slider",
  isRTL = false,
  keyStep = 1,
}: CustomSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [sliderWidth, setSliderWidth] = useState(0)

  const DEAD_ZONE = 8
  const BASE_FILL_LENGTH = 20

  const updateSliderWidth = useCallback(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.clientWidth)
    }
  }, [])

  useEffect(() => {
    updateSliderWidth()
    window.addEventListener("resize", updateSliderWidth)
    return () => window.removeEventListener("resize", updateSliderWidth)
  }, [updateSliderWidth])

  const getPercentage = useCallback(() => {
    return ((value - min) / (max - min)) * 100
  }, [value, min, max])

  const handleInteraction = useCallback(
    (clientX: number) => {
      if (disabled || !sliderRef.current) return
      const rect = sliderRef.current.getBoundingClientRect()
      const effectiveWidth = rect.width - DEAD_ZONE * 2
      let percentage

      if (isRTL) {
        percentage = ((rect.right - clientX - DEAD_ZONE) / effectiveWidth) * 100
      } else {
        percentage = ((clientX - rect.left - DEAD_ZONE) / effectiveWidth) * 100
      }

      percentage = Math.max(0, Math.min(100, percentage))
      let newValue = min + (percentage / 100) * (max - min)
      if (step !== 0) newValue = Math.round(newValue / step) * step
      newValue = Math.max(min, Math.min(max, newValue))
      onValueChange(newValue)
    },
    [disabled, min, max, step, onValueChange, isRTL, DEAD_ZONE]
  )

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled) return
    e.preventDefault()
    setIsDragging(true)
    handleInteraction(e.clientX)
    sliderRef.current?.focus()
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) handleInteraction(e.clientX)
    },
    [isDragging, handleInteraction]
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return
    if (
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown"
    ) {
      e.preventDefault()
      const direction =
        (e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : -1) *
        (isRTL ? -1 : 1)
      const increment = keyStep ?? step
      const newValue = Math.max(
        min,
        Math.min(max, value + direction * increment)
      )
      onValueChange(newValue)
    }
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("mouseup", handleMouseUp)
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [handleMouseMove, handleMouseUp, isDragging])

  const percentage = getPercentage()
  const fillColor =
    isDragging || isFocused
      ? colorFillActive
      : isHovered
        ? colorFillHover
        : colorFillDefault
  const thumbColor =
    isDragging || isFocused
      ? colorThumbActive
      : isHovered
        ? colorThumbHover
        : colorThumbDefault
  const thumbBorderColor =
    isDragging || isFocused
      ? colorThumbBorderActive
      : isHovered
        ? colorThumbBorderHover
        : colorThumbBorderDefault

  const usableWidth = Math.max(sliderWidth - DEAD_ZONE * 2, 0)
  const computedFillWidth = (percentage / 100) * usableWidth
  const baseFillWidth = Math.min(BASE_FILL_LENGTH, usableWidth)

  const wrapperClass = `custom-slider-${id}-wrapper${disabled ? " disabled" : ""}`
  const trackClass = `custom-slider-${id}-track`
  const rangeClass = `custom-slider-${id}-range`
  const thumbClass = `custom-slider-${id}-thumb`

  return (
    <div className="w-full">
      <style jsx>{`
        .${wrapperClass} {
          position: relative;
          width: ${width};
          height: ${thumbHeight};
          display: flex;
          align-items: center;
          cursor: ${disabled ? "not-allowed" : "pointer"};
          touch-action: none;
          outline: none;
        }
        .${trackClass}, .${rangeClass} {
          position: absolute;
          height: ${trackHeight};
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          transition: background-color 0.2s ease;
          box-sizing: border-box;
        }
        .${trackClass} {
          background: ${colorTrackBackground} !important;
          border-radius: ${trackBorderRadius} !important; // ✅ NEW: Static rounding
          border: ${trackBorderWidth} solid ${trackBorderColor} !important; // ✅ NEW: Static border (0px = none)
          z-index: 1;
        }
        .${rangeClass} {
          background: ${fillColor};
          border-radius: ${trackBorderRadius}; // ✅ Matches track rounding
          ${isRTL ? "right: 0;" : "left: 0;"}
          width: ${percentage}%;
          z-index: 2;
        }
        .${thumbClass} {
          position: absolute;
          width: ${thumbWidth};
          height: ${thumbHeight};
          border-radius: ${thumbBorderRadius};
          top: 50%;
          transform: translateY(-50%);
          background: ${thumbColor};
          border: ${thumbBorderWidth} solid ${thumbBorderColor};
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
          z-index: 3;
          pointer-events: none;
          ${isRTL
            ? `right: calc(${DEAD_ZONE}px + ${computedFillWidth}px - ${parseFloat(thumbWidth.replace("px", ""))}px / 2);`
            : `left: calc(${DEAD_ZONE}px + ${computedFillWidth}px - ${parseFloat(thumbWidth.replace("px", ""))}px / 2);`}
        }
        .${wrapperClass}:hover .${thumbClass} {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      <div
        ref={sliderRef}
        className={wrapperClass}
        onMouseDown={handleMouseDown}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        tabIndex={disabled ? -1 : 0}
        role="slider"
        aria-label={ariaLabel}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={disabled}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className={trackClass} />
        <div className={rangeClass} />
        <div className={thumbClass} />
      </div>
    </div>
  )
}
