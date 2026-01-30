import type React from "react"
import { clsx } from "clsx"

type HeadingProps = {
  as?: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
} & React.ComponentPropsWithoutRef<
  "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
>

export function Heading({
  className,
  as: Element = "h2",
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={clsx(
        className,
        "text-4xl font-medium tracking-tighter text-pretty text-gray-950 sm:text-6xl dark:text-white"
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = "h2",
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      className={clsx(
        className,
        "font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400"
      )}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return (
    <p
      className={clsx(
        className,
        "text-2xl font-medium text-gray-500 dark:text-gray-400"
      )}
      {...props}
    />
  )
}
