import React from "react"

interface BetaButtonProps {
  text: string
}

export const BetaButton = ({ text }: BetaButtonProps) => {
  return (
    <div className="relative z-20 inline-block h-7 translate-x-6 overflow-hidden rounded-sm bg-neutral-100 p-px dark:bg-neutral-800">
      {/* Inner white box */}
      <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[3px] bg-white px-3 dark:bg-black">
        <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
          {text}
        </span>
      </div>

      {/* Blue gradient spin */}
      <div className="absolute inset-0 h-full w-full scale-[1.4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-cyan-500)_20%,transparent_30%)]"></div>

      {/* Red gradient spin (delayed) */}
      <div className="absolute inset-0 h-full w-full scale-[1.4] animate-spin [background-image:conic-gradient(at_center,transparent,var(--color-red-500)_20%,transparent_30%)] [animation-delay:0.4s]"></div>
    </div>
  )
}
