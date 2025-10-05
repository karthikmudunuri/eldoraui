"use client"

import React from "react"
import clsx from "clsx"
import { motion } from "motion/react"

type FadeDirection = "in" | "up" | "down"

interface FadeTextProps {
  text?: string
  className?: string
  direction?: FadeDirection
  staggerDelay?: number
  wordDelay?: number
}

export const FadeText: React.FC<FadeTextProps> = ({
  text = "",
  className = "",
  direction = "in",
  staggerDelay = 0.15,
  wordDelay = 0.1,
}) => {
  // For "in" direction, we animate word by word
  if (direction === "in") {
    const words = text.split(" ")

    return (
      <motion.div
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: wordDelay,
            },
          },
        }}
      >
        <motion.h1
          className={clsx(
            "font-display text-center font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
            className
          )}
        >
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.h1>
      </motion.div>
    )
  }

  // For "up" and "down" directions, we animate the entire text
  const animationVariants =
    direction === "up"
      ? {
          hidden: { opacity: 0, y: 20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring" as const,
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            },
          },
        }
      : {
          hidden: { opacity: 0, y: -20 },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring" as const,
              stiffness: 100,
              damping: 12,
              duration: 0.8,
            },
          },
        }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      transition={{ delay: staggerDelay }}
    >
      <motion.h1
        className={clsx(
          "font-display text-center font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
          className
        )}
        variants={animationVariants}
      >
        {text}
      </motion.h1>
    </motion.div>
  )
}
