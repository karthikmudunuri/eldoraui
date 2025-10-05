"use client"

import React from "react"
import clsx from "clsx"
import { motion } from "motion/react"

interface FadeInTextProps {
  text?: string
  className?: string
}

export const FadeInText: React.FC<FadeInTextProps> = ({
  text = "",
  className = "",
}) => {
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
  }

  const words = text.split(" ")

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      className={clsx(
        "font-display text-center font-bold drop-shadow-sm",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        className
      )}
    >
      {words.map((word, i) => (
        <motion.span key={word} variants={wordVariants} custom={i}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  )
}
