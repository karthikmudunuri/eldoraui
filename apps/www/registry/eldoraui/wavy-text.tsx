"use client"

import clsx from "clsx"
import { AnimatePresence, motion } from "motion/react"

interface WavyTextProps {
  text?: string
  className?: string
}

export const WavyText: React.FC<WavyTextProps> = ({
  text = "",
  className = "",
}) => {
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  }

  return (
    <div className={clsx("flex justify-center space-x-2", className)}>
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.5,
              delay: i * 0.2,
            }}
            className={clsx(
              "font-display text-center font-bold drop-shadow-sm",
              "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
              "tracking-[-0.02em]",
              "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
            )}
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  )
}
