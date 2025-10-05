"use client"

import clsx from "clsx"
import { motion } from "motion/react"

interface LetterPullUpTextProps {
  text?: string
  className?: string
}

export const LetterPullUpText: React.FC<LetterPullUpTextProps> = ({
  text = "",
  className = "",
}) => {
  const letters = text.split("")

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
        duration: 0.5, // Adjust duration for smoothness
      },
    }),
  }

  return (
    <div className={clsx("flex justify-center", className)}>
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={clsx(
            "font-display text-center font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  )
}
