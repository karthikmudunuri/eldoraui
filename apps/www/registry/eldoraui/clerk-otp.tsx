"use client"

import { useEffect, useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const generateRandomDigits = () => {
  return Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 10).toString()
  )
}

type AnimatedOTPProps = {
  delay?: number
  cardTitle?: string
  cardDescription?: string
  whileHover?: boolean
}

const AnimatedOTP = ({
  delay = 3500,
  cardTitle = "Multifactor Authentication",
  cardDescription = "Each user's self-serve multifactor settings are enforced automatically during sign-in.",
  whileHover = false,
}: AnimatedOTPProps) => {
  const [animationKey, setAnimationKey] = useState(0)
  const delayTime = Math.max(delay, 3500)
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1)
    }, delayTime)

    return () => clearInterval(interval)
  }, [delayTime])

  return (
    <OTPinput
      key={animationKey}
      cardTitle={cardTitle}
      cardDescription={cardDescription}
      whileHover={whileHover}
    />
  )
}

export default AnimatedOTP

const OTPinput = ({
  cardTitle,
  cardDescription,
  whileHover,
}: AnimatedOTPProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [digits] = useState(() => generateRandomDigits())
  const [isCardHovered, setIsCardHovered] = useState(false)

  useEffect(() => {
    if (activeIndex > digits.length - 1) return

    const shouldAnimate = !whileHover || (whileHover && isCardHovered)

    if (!shouldAnimate) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1)
    }, 400)

    if (activeIndex === digits.length - 1) {
      setTimeout(() => {
        setFadeOut(true)
      }, 450)
    }

    return () => clearInterval(interval)
  }, [activeIndex, digits.length, whileHover, isCardHovered])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      onHoverStart={() => setIsCardHovered(true)}
      onHoverEnd={() => setIsCardHovered(false)}
      className={cn(
        "relative",
        "flex items-center justify-center",
        "h-[14rem] w-full max-w-[350px]",
        "rounded-md border bg-neutral-50 dark:bg-neutral-900",
        "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      )}
    >
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2">
        <div className="flex w-full items-center justify-center gap-3">
          {digits.map((digit, idx) => (
            <div
              key={idx}
              className={cn(
                "text-primary relative flex h-10 w-8 cursor-default items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-800",
                "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              )}
            >
              {(!whileHover || (whileHover && isCardHovered)) && (
                <motion.div
                  className="absolute inset-0 rounded-md border border-cyan-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 2.25,
                  }}
                  style={{
                    boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.5)",
                  }}
                />
              )}
              {activeIndex === idx &&
                (!whileHover || (whileHover && isCardHovered)) && (
                  <motion.div
                    key={idx}
                    className="absolute inset-0 rounded-md border border-cyan-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    style={{
                      boxShadow: "inset 0 0 12px rgba(34, 211, 238, 0.6)",
                    }}
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="absolute inset-0 h-full w-full"
                      strokeWidth="0.4"
                    >
                      <path
                        d="M 3 19 h 14"
                        className="stroke-cyan-400 dark:stroke-cyan-500"
                      />
                    </svg>
                  </motion.div>
                )}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: whileHover
                    ? isCardHovered
                      ? fadeOut
                        ? 0
                        : 1
                      : 0
                    : fadeOut
                      ? 0
                      : 1,
                }}
                transition={{
                  duration: fadeOut ? 0.1 : 0.2,
                  ease: "easeInOut",
                  delay: fadeOut ? 0 : idx * 0.43,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                {digit}
              </motion.span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 w-full px-3">
        <h3 className="text-primary text-sm font-semibold">{cardTitle}</h3>
        <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          {cardDescription}
        </p>
      </div>
    </motion.div>
  )
}
