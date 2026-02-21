"use client"

import React, { useState } from "react"

interface BaubleToggleProps {
  onToggleChange?: (isOn: boolean) => void
  initialState?: boolean
}

const BaubleToggle: React.FC<BaubleToggleProps> = ({
  onToggleChange,
  initialState = true,
}) => {
  const [isOn, setIsOn] = useState(initialState)

  const toggle = () => {
    setIsOn((prev) => {
      const next = !prev
      onToggleChange?.(next)
      return next
    })
  }

  // Colors and transform values based on state
  const trackFill = isOn ? "#43B86C" : "#BC4B51"
  const patternFill = isOn ? "#43B86C" : "#BC4B51"
  const gradStopColor = isOn ? "#184A13" : "#491615"
  const knobTranslate = isOn ? 84 : 0
  const patternX = isOn ? 210 : 0

  return (
    <>
      {/* Embedded CSS (vanilla) with transitions */}
      <style>
        {`
          .bauble-toggle-track {
            transition: fill 1s ease-in-out;
          }

          .bauble-toggle-knob,
          .bauble-toggle-knob-wrapper {
            transition:
              transform 1s cubic-bezier(0.215, 0.61, 0.355, 1); /* power3.inOut-ish */
            transform-origin: 50% 50%;
          }

          .bauble-toggle-pattern-fill {
            transition: fill 1s cubic-bezier(0.215, 0.61, 0.355, 1);
          }

          .baubleGradStopColor {
            transition: stop-color 1s ease-in-out;
          }
        `}
      </style>

      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        <defs>
          <radialGradient
            id="baubleShineGrad"
            cx="352.79"
            cy="293.87"
            r="26"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.01" stopColor="#fff" stopOpacity="0.5" />
            <stop offset="0.69" stopColor="#fff" stopOpacity="0" />
          </radialGradient>

          <radialGradient
            id="baubleGrad"
            cx={358}
            cy={298}
            r={26}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#FABE2B" stopOpacity={0} />
            <stop
              offset="0.8"
              className="baubleGradStopColor"
              stopColor={gradStopColor}
              stopOpacity="0.15"
            />
            <stop
              offset={1}
              className="baubleGradStopColor"
              stopColor={gradStopColor}
              stopOpacity="0.65"
            />
          </radialGradient>

          <filter
            id="baubleShadow"
            width="350%"
            height="350%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feOffset dx="0" dy="23" result="offsetblur" />
            <feFlood
              id="dropShadowAlpha"
              floodColor="#000"
              floodOpacity="0.21"
            />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
            </feMerge>
          </filter>

          <linearGradient
            id="baubleCapGrad"
            x1="351.26"
            y1="272.94"
            x2="364.74"
            y2="272.94"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.09" stopColor="#f5bb3b" />
            <stop offset="0.31" stopColor="#fff" />
            <stop offset="0.51" stopColor="#f5bb3b" />
            <stop offset="0.86" stopColor="#bd902d" />
            <stop offset="1" stopColor="#f5bb3b" />
          </linearGradient>

          {/* patternTransform contains a translate; we override the x via attribute */}
          <pattern
            id="starPattern"
            width={92}
            height={92}
            x={patternX}
            patternTransform="translate(-10.02 -3.42) scale(0.33)"
            patternUnits="userSpaceOnUse"
          >
            <rect width={184} height={184} fill="none" />
            <g className="bauble-toggle-pattern-fill" fill={patternFill}>
              <polygon points="84.19 73.59 95.3 83.17 109.49 79.45 103.83 92.99 111.76 105.34 97.14 104.12 87.87 115.48 84.5 101.19 70.83 95.86 83.36 88.25 84.19 73.59" />
              <polygon points="45.58 87.84 48.09 90 51.3 89.16 50.02 92.22 51.81 95.02 48.51 94.74 46.41 97.31 45.65 94.08 42.55 92.87 45.39 91.15 45.58 87.84" />
              <polygon points="-7.82 73.59 3.3 83.17 17.49 79.45 11.82 92.99 19.76 105.34 5.14 104.12 -4.13 115.48 -7.5 101.19 -21.18 95.86 -8.64 88.25 -7.82 73.59" />
              <polygon points="39.53 27.59 50.65 37.17 64.83 33.45 59.17 46.99 67.11 59.34 52.49 58.12 43.21 69.48 39.84 55.19 26.17 49.86 38.7 42.25 39.53 27.59" />
              <polygon points="84.19 -18.41 95.3 -8.82 109.49 -12.55 103.83 0.99 111.76 13.34 97.14 12.12 87.87 23.48 84.5 9.19 70.83 3.86 83.36 -3.75 84.19 -18.41" />
              <polygon points="90.23 41.84 92.75 44 95.95 43.16 94.67 46.22 96.47 49.02 93.16 48.74 91.06 51.31 90.3 48.08 87.21 46.87 90.05 45.15 90.23 41.84" />
              <polygon points="45.58 -4.16 48.09 -2 51.3 -2.84 50.02 0.22 51.81 3.02 48.51 2.74 46.41 5.31 45.65 2.08 42.55 0.87 45.39 -0.85 45.58 -4.16" />
              <polygon points="-7.82 -18.41 3.3 -8.82 17.49 -12.55 11.82 0.99 19.76 13.34 5.14 12.12 -4.13 23.48 -7.5 9.19 -21.18 3.86 -8.64 -3.75 -7.82 -18.41" />
              <polygon points="-1.77 41.84 0.75 44 3.96 43.16 2.67 46.22 4.47 49.02 1.16 48.74 -0.94 51.31 -1.7 48.08 -4.79 46.87 -1.96 45.15 -1.77 41.84" />
            </g>
          </pattern>

          <filter id="insetShadow">
            <feOffset dx="0" dy="14" />
            <feGaussianBlur stdDeviation="5" result="offset-blur" />
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            <feFlood floodColor="black" floodOpacity="0.5" result="color" />
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>

          <filter
            id="dropShadow"
            width="350%"
            height="350%"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feOffset dx="0" dy="3" result="offsetblur" />
            <feFlood
              id="dropShadowAlpha2"
              floodColor="#000"
              floodOpacity="0.4"
            />
            <feComposite in2="offsetblur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Track */}
        <rect
          filter="url(#insetShadow)"
          x="321"
          y="263"
          width="158"
          height="74"
          rx="37"
          ry="37"
          fill={trackFill}
          className="bauble-toggle-track"
        />

        {/* Knob shadow rect (moves with knob) */}
        <rect
          filter="url(#baubleShadow)"
          width="52"
          height="38"
          x="332"
          y="274"
          rx="26"
          ry="26"
          fill="#000"
          opacity="1"
          className="bauble-toggle-knob"
          style={{ transform: `translateX(${knobTranslate}px)` }}
        />

        {/* Knob content */}
        <g
          className="bauble-toggle-knob-wrapper"
          style={{ transform: `translateX(${knobTranslate}px)` }}
        >
          <path
            d="M355.68,270.7a3,3,0,0,1-.65-1.86,3,3,0,0,1,5.94,0,3,3,0,0,1-.65,1.86"
            fill="none"
            stroke="#DCA014"
            strokeMiterlimit={10}
            strokeWidth={1.5}
          />
          <path
            d="M363.88,270.29H352.13a.87.87,0,0,0-.87.86v3.52a.87.87,0,0,0,1.73,0l10,.06h0a.87.87,0,0,0,1.73,0v-3.59A.87.87,0,0,0,363.88,270.29Z"
            fill="url(#baubleCapGrad)"
          />
          <circle cx={358} cy={300} r={26} fill="#FFFCF9" />
          <circle cx={358} cy={300} r={26} fill="url(#starPattern)" />
          <circle cx={358} cy={300} r={26.1} fill="url(#baubleGrad)" />
          <circle cx={358} cy={300} r={26} fill="url(#baubleShineGrad)" />
        </g>

        {/* Click hit area */}
        <rect
          onClick={toggle}
          className="hit"
          x="321"
          y="263"
          width="158"
          height="74"
          rx="37"
          ry="37"
          fill="transparent"
          style={{ cursor: "pointer" }}
        />
      </svg>
    </>
  )
}

export default BaubleToggle
