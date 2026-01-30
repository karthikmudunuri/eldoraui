import { ArrowRightIcon, AtSignIcon } from "lucide-react"

import { Ripple } from "./ripple-bg"

export function CallToAction() {
  return (
    <div className="bg-secondary/80 dark:bg-secondary/40 relative mx-auto flex min-h-[20rem] w-full max-w-3xl flex-col justify-between gap-y-8 border-x px-2 py-14 md:px-4 md:py-20">
      <div className="pointer-events-none absolute -top-px left-1/2 w-screen -translate-x-1/2 border-t" />
      <Ripple />

      <div className="space-y-1">
        <h2 className="text-center text-2xl font-semibold tracking-tight md:text-4xl">
          Join our community
        </h2>
        <p className="text-muted-foreground text-center text-sm text-balance md:text-base">
          Connect with fellow builders, get early access, and stay in the loop
          with product updates and exclusive events.
        </p>
        <div className="mt-4 flex items-center justify-center -space-x-[0.45rem]">
          <img
            alt="Avatar 01"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar1"
            width={24}
          />
          <img
            alt="Avatar 02"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar2"
            width={24}
          />
          <img
            alt="Avatar 03"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar3"
            width={24}
          />
          <img
            alt="Avatar 04"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar4"
            width={24}
          />
          <img
            alt="Avatar 05"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar5"
            width={24}
          />
          <img
            alt="Avatar 06"
            className="ring-background rounded-full ring-1"
            height={24}
            src="https://avatar.vercel.sh/avatar6"
            width={24}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-px left-1/2 w-screen -translate-x-1/2 border-b" />
    </div>
  )
}
