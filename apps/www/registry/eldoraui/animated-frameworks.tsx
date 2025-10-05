"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

type AnimatedFrameworksProps = {
  cardTitle?: string
  cardDescription?: string
}

const AnimatedFrameworks = ({
  cardTitle = "Universal Compatibility",
  cardDescription = "Works seamlessly with Next.js, React, HTML, Apple, GitHub, OpenAI, and more fits everywhere.",
}: AnimatedFrameworksProps) => {
  return (
    <div
      className={cn(
        "relative",
        "flex flex-col justify-between",
        "h-[20rem] space-y-4",
        "rounded-md border bg-white shadow-sm",
        "dark:border-neutral-800/50 dark:bg-[#171717]",
        "border-neutral-200"
      )}
    >
      <FrameworkCard />
      <div className="px-4 pb-4">
        <div className="text-sm font-semibold text-neutral-900 dark:text-white">
          {cardTitle}
        </div>
        <div className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
          {cardDescription}
        </div>
      </div>
    </div>
  )
}

export default AnimatedFrameworks

const FrameworkCard = () => {
  const [nextJsTransform, setNextJsTransform] = useState("none")
  const [reactTransform, setReactTransform] = useState("none")
  const [htmlTransform, setHtmlTransform] = useState("none")

  useEffect(() => {
    const cycleAnimations = async () => {
      const upStyle = "translateY(-3.71px) rotateX(10.71deg) translateZ(20px)"
      const downStyle = "none"

      const transitionDuration = 1100

      const durationOfUpState = 1200
      const delayBetweenCards = 600

      while (true) {
        setReactTransform(upStyle)
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState))
        setReactTransform(downStyle)
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        )

        setNextJsTransform(upStyle)
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState))
        setNextJsTransform(downStyle)
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        )

        setHtmlTransform(upStyle)
        await new Promise((resolve) => setTimeout(resolve, durationOfUpState))
        setHtmlTransform(downStyle)
        await new Promise((resolve) =>
          setTimeout(resolve, transitionDuration + delayBetweenCards)
        )
      }
    }

    cycleAnimations()
  }, [])

  const cardClasses =
    "flex aspect-square items-center justify-center rounded-md border bg-gradient-to-b from-neutral-50 to-neutral-100 p-4 " +
    "dark:border-neutral-800 dark:from-[#272727] dark:to-[#3d3d3d] " +
    "border-neutral-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] " +
    "[@media(min-width:320px)]:h-20 [@media(min-width:500px)]:h-36 " +
    "transition-transform duration-1000 ease-out will-change-transform"

  return (
    <>
      <div
        className={cn(
          "relative",
          "flex flex-col items-center justify-center gap-1",
          "h-[14.5rem] w-full"
        )}
      >
        <div className="absolute flex h-full w-full items-center justify-center">
          <div className="h-full w-[15rem]">
            <svg
              className="h-full w-full"
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              fill="none"
            >
              <g
                stroke="currentColor"
                strokeWidth="0.1"
                className="text-neutral-400 dark:text-neutral-600"
              >
                <path d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5" />
              </g>
              <g mask="url(#framework-mask)">
                <circle
                  className="frameworkline framework-line"
                  cx="0"
                  cy="0"
                  r="12"
                  fill="url(#framework-blue-grad)"
                />
              </g>
              <defs>
                <mask id="framework-mask">
                  <path
                    d="M 1 0 v 5 q 0 5 5 5 h 39 q 5 0 5 5 v 71 q 0 5 5 5 h 39 q 5 0 5 5 v 5"
                    strokeWidth="0.3"
                    stroke="white"
                  />
                </mask>
                <radialGradient id="framework-blue-grad" fx="1">
                  <stop offset="0%" stopColor={"#3b82f6"} />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center justify-center gap-4",
            "[perspective:1000px] [transform-style:preserve-3d]"
          )}
        >
          <div className={cardClasses} style={{ transform: reactTransform }}>
            <Icons.apple className="size-6 text-neutral-700 dark:text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
          <div className={cardClasses} style={{ transform: nextJsTransform }}>
            <Icons.gitHub className="size-6 text-neutral-700 dark:text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
          <div className={cardClasses} style={{ transform: htmlTransform }}>
            <Icons.openai className="size-6 text-neutral-700 dark:text-neutral-100 [@media(min-width:500px)]:size-9" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-3 w-full bg-gradient-to-t from-white to-transparent dark:from-[#171717]" />
      </div>
    </>
  )
}
