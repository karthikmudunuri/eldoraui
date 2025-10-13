"use client"

import React, { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion, useAnimationControls } from "motion/react"

import { cn } from "@/lib/utils"

type AnimationPhase = "idle" | "forming_column" | "scrolling_down" | "resetting"

type AnimatedListProps = {
  children: React.ReactNode
  className?: string
  stackGap?: number
  columnGap?: number
  scaleFactor?: number
  scrollDownDuration?: number
  formationDuration?: number
}

type AnimatedListItemProps = {
  children: React.ReactNode
  className?: string
  index: number
  listLength: number
  stackGap?: number
  columnGap?: number
  scaleFactor?: number
}

function InternalAnimatedListItem({
  children,
  className,
  index,
  listLength,
  animationPhase,
  onFormationComplete,
  stackGap = 10,
  columnGap = 100,
  scaleFactor = 0.1,
  formationDuration = 1,
  visibleItemsCount = 4,
  resetSpringStiffness = 120,
  resetSpringDamping = 20,
}: AnimatedListItemProps & {
  animationPhase: AnimationPhase
  onFormationComplete?: () => void
  formationDuration: number
  visibleItemsCount: number
  resetSpringStiffness: number
  resetSpringDamping: number
}) {
  const reverseIndex = listLength - 1 - index
  const isVisible = reverseIndex < visibleItemsCount
  const lastItemOffset = (listLength - 1) * columnGap
  const isLastItem = index === listLength - 1

  const itemVariants = {
    initial: {
      scale: 1 + index * scaleFactor,
      y: reverseIndex * stackGap,
      opacity: isVisible ? 1 : 0,
    },
    column: {
      scale: 1,
      y: index * columnGap - lastItemOffset,
      opacity: 1,
    },
  }

  const target =
    animationPhase === "idle" || animationPhase === "resetting"
      ? "initial"
      : "column"

  const getTransition = () => {
    if (animationPhase === "resetting") {
      return {
        type: "spring" as const,
        stiffness: resetSpringStiffness,
        damping: resetSpringDamping,
      }
    } else {
      return { duration: formationDuration, ease: [0.4, 0, 0.2, 1] as const }
    }
  }

  const handleAnimationComplete = (definition: string) => {
    if (
      isLastItem &&
      definition === "column" &&
      animationPhase === "forming_column"
    ) {
      onFormationComplete?.()
    }
  }

  return (
    <motion.div
      key={index}
      className={cn("absolute inset-x-0 flex w-full justify-center", className)}
      variants={itemVariants}
      initial="initial"
      animate={target}
      transition={getTransition()}
      onAnimationComplete={handleAnimationComplete}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedList({
  children,
  className,
  stackGap = 20,
  columnGap = 85,
  scaleFactor = 0.05,
  scrollDownDuration = 5,
  formationDuration = 1,
}: AnimatedListProps) {
  const initialDelayValue = 500
  const loopPauseDurationValue = 100
  const listResetSpringStiffness = 100
  const listResetSpringDamping = 25
  const itemResetSpringStiffness = 120
  const itemResetSpringDamping = 20
  const visibleItemsCountValue = 4

  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>("idle")
  const listControls = useAnimationControls()
  const childrenArray = useMemo(
    () => React.Children.toArray(children),
    [children]
  )
  const listLength = childrenArray.length
  const totalHeight = listLength * columnGap

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (animationPhase === "idle") {
      timer = setTimeout(
        () => {
          setAnimationPhase("forming_column")
        },
        animationPhase === "idle" ? loopPauseDurationValue : initialDelayValue
      )
    }
    return () => clearTimeout(timer)
  }, [animationPhase, loopPauseDurationValue, initialDelayValue])

  const handleFormationComplete = () => {
    if (animationPhase === "forming_column") setAnimationPhase("scrolling_down")
  }
  const handleScrollDownComplete = () => {
    if (animationPhase === "scrolling_down") setAnimationPhase("resetting")
  }
  const handleScrollUpComplete = () => {
    if (animationPhase === "resetting") setAnimationPhase("idle")
  }

  useEffect(() => {
    if (animationPhase === "scrolling_down") {
      listControls.start({
        y: totalHeight,
        transition: {
          duration: scrollDownDuration,
          ease: [0.4, 0, 0.2, 1] as const,
        },
      })
    } else if (animationPhase === "resetting") {
      listControls.start({
        y: 0,
        transition: {
          type: "spring" as const,
          stiffness: listResetSpringStiffness,
          damping: listResetSpringDamping,
        },
      })
    } else {
      listControls.set({ y: 0 })
    }
  }, [
    animationPhase,
    listControls,
    totalHeight,
    scrollDownDuration,
    listResetSpringStiffness,
    listResetSpringDamping,
  ])

  const handleListAnimationComplete = (definition: { y?: number }) => {
    if (definition.y === totalHeight && animationPhase === "scrolling_down") {
      handleScrollDownComplete()
    } else if (definition.y === 0 && animationPhase === "resetting") {
      handleScrollUpComplete()
    }
  }

  return (
    <motion.div
      className={cn("relative flex h-full w-full items-center", className)}
      initial={{ y: 0 }}
      animate={listControls}
      onAnimationComplete={handleListAnimationComplete}
    >
      <AnimatePresence>
        {childrenArray.map((child, index) => (
          <InternalAnimatedListItem
            key={index}
            index={index}
            listLength={listLength}
            animationPhase={animationPhase}
            onFormationComplete={
              index === listLength - 1 ? handleFormationComplete : undefined
            }
            stackGap={stackGap}
            columnGap={columnGap}
            scaleFactor={scaleFactor}
            formationDuration={formationDuration}
            visibleItemsCount={visibleItemsCountValue}
            resetSpringStiffness={itemResetSpringStiffness}
            resetSpringDamping={itemResetSpringDamping}
          >
            {child}
          </InternalAnimatedListItem>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}
