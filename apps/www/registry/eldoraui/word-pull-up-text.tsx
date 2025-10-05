"use client"

import clsx from "clsx"
import { motion } from "motion/react"

interface WordPullUpTextProps {
  text?: string
  className?: string
}

export const WordPullUpText: React.FC<WordPullUpTextProps> = ({
  text = "",
  className = "",
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="show"
      className={clsx(
        "font-display text-center font-bold drop-shadow-sm",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        className
      )}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={item}
          style={{ display: "inline-block", paddingRight: "15px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  )
}
