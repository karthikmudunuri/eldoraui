"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import posthog from "posthog-js"
import { trackEvent } from "@/lib/events"
import { Button } from "@/components/ui/button"
import { PingDot } from "@/components/ping-dot"
import { AnimatedShinyText } from "@/registry/eldoraui/animated-shiny-text"
import { AuroraText } from "@/registry/eldoraui/aurora-text"
import { TextAnimate } from "@/registry/eldoraui/text-animate"
import { siteConfig } from "@/config/site"

export function DiscordCTA() {
  return (
    <div className="border-border my-6 flex w-full flex-col gap-4 rounded-xl border p-6">
      <div className="flex items-center gap-2">
        <PingDot />
        <span className="text-xs font-semibold tracking-wider text-cyan-600 uppercase">
          Join Us on Discord
        </span>
      </div>

      <div className="space-y-3">
        <p className="text-foreground text-2xl leading-tight font-bold">
          <AuroraText>Eldora UI </AuroraText>
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Get latest updates and support <br /> and get help from {" "}
          <span className="text-foreground font-semibold">
            our community
          </span>
        </p>
      </div>

      <div className="space-y-4 pt-2">
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-lg py-3 font-semibold shadow-sm transition-all duration-200 hover:shadow-md"
          onClick={() => trackEvent({ name: "sidebar_cta_clicked" })}
        >
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Join Now
            <ChevronRight className="size-4" />
          </Link>
        </Button>

        <div className="text-center">
          <p className="text-muted-foreground text-xs">
            Trusted by <span className="font-semibold">1,000+</span> developers
          </p>
        </div>
      </div>
    </div>
  )
}

export function ProductHuntCTA() {
  return (
    <Link
      href="https://www.producthunt.com/posts/eldoraui-2?utm_source=sidebar-cta&utm_medium=sidebar-cta&utm_campaign=product-hunt-sidebar-cta"
      target="_blank"
      onClick={() => posthog.capture("product_hunt_sidebar_cta_clicked")}
      className="group my-20 flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-[#ff6154] p-4 text-center text-lg leading-tight font-medium text-white"
    >
      <TextAnimate animate="blurInUp" by="word" className="text-2xl">
        Vote for Eldora UI on Product Hunt Today!
      </TextAnimate>
      <AnimatedShinyText className="group inline items-center justify-center via-white/80 text-xs whitespace-pre-wrap text-white">
        ✨ Show your support and vote for us
      </AnimatedShinyText>

      <video
        autoPlay
        loop
        playsInline
        muted
        src="/agent-demo.mp4"
        className="w-full overflow-hidden rounded-xl shadow-2xl"
      />
    </Link>
  )
}


export function SidebarCTA() {
  return <DiscordCTA />
}
