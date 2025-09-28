import type { SVGProps } from "react"

export interface IpadProps extends SVGProps<SVGSVGElement> {
  width?: number
  height?: number
  src?: string
}

export function Ipad({ width = 520, height = 400, src, ...props }: IpadProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="#aaabac"
        d="M479.04,14.14H88.14v-.59c0-.16-.13-.3-.3-.3h-16.7c-.16,0-.3.13-.3.3v.59h-3.46v-.59c0-.16-.13-.3-.3-.3h-16.7c-.16,0-.3.13-.3.3v.59h-9.13c-13.4,0-24.27,10.78-24.45,24.14h-.48c-.16,0-.3.13-.3.3v20.07c0,.16.13.3.3.3h.47v303.38c0,13.51,10.95,24.45,24.45,24.45h438.08c13.51,0,24.45-10.95,24.45-24.45V38.6c0-13.51-10.95-24.45-24.45-24.45Z"
      />
      <rect
        fill="#000"
        x="18.58"
        y="15.94"
        width="482.84"
        height="368.91"
        rx="23.29"
        ry="23.29"
      />
      <rect
        fill="currentColor"
        x="31.37"
        y="28.47"
        width="457.25"
        height="342.87"
        rx="9.61"
        ry="9.61"
      />
      {src && (
        <image
          href={src}
          x="31.37"
          y="28.47"
          width="457.25"
          height="342.87"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      <circle fill="#0a1054" cx="245.1" cy="22.23" r="2.44" />
      <circle fill="#333" cx="274.98" cy="22.23" r=".88" />
      <defs>
        <clipPath id="roundedCorners">
          <rect
            fill="#ffffff"
            x="31.37"
            y="28.47"
            width="457.25"
            height="342.87"
            rx="9.61"
            ry="9.61"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
