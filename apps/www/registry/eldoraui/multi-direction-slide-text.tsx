"use client"

import clsx from "clsx"
import { motion } from "motion/react"

interface MultiDirectionSlideTextProps {
  textLeft?: string
  textRight?: string
  className?: string
}

export const MultiDirectionSlideText: React.FC<
  MultiDirectionSlideTextProps
> = ({ textLeft = "", textRight = "", className = "" }) => {
  const MULTIDIRECTION_SLIDE_VARIANTS = {
    hidden: { opacity: 0, x: "-25vw" },
    visible: { opacity: 1, x: 0 },
    right: { opacity: 0, x: "25vw" },
  }

  return (
    <div className={clsx("overflow-hidden", className)}>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className={clsx(
          "font-display text-center font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
        )}
      >
        {textLeft}
      </motion.h1>

      <motion.h1
        initial="right"
        animate="visible"
        variants={MULTIDIRECTION_SLIDE_VARIANTS}
        transition={{ duration: 1 }}
        className={clsx(
          "font-display text-center font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
        )}
      >
        {textRight}
      </motion.h1>
    </div>
  )
}
