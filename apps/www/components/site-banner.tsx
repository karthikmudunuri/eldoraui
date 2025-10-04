"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import posthog from "posthog-js"

export function ProBanner() {
  return (
    <div className="group relative top-0 bg-indigo-600 py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://pro.eldoraui.site"
          onClick={() => posthog.capture("banner_cta_clicked")}
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            Introducing Eldora UI Pro - 50+ blocks and templates to build
            beautiful landing pages in minutes.
          </span>{" "}
          <ChevronRight className="mt-[3px] ml-1 hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  )
}

export function ProductHuntBanner() {
  return (
    <div className="group relative top-0 bg-[#ff6154] py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://www.producthunt.com/products/eldora-ui"
          onClick={() => posthog.capture("product_hunt_banner_clicked")}
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            Eldora UI is live on Product Hunt Today! Show your support and vote
            for us.
          </span>{" "}
          <ChevronRight className="mt-[3px] ml-1 hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  )
}

export function GithubBanner() {
  return (
    <div className="group relative top-0 bg-cyan-400/80 py-3 text-white transition-all duration-300 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://github.com/karthikmudunuri/eldoraui"
          onClick={() => posthog.capture("product_hunt_banner_clicked")}
          target="_blank"
          className="inline-flex text-xs leading-normal md:text-sm"
        >
          ✨{" "}
          <span className="ml-1 font-[580] dark:font-[550]">
            {" "}
            Give us a star on GitHub Help us grow by starring the project and
            sharing your feedback.
          </span>{" "}
          <ChevronRight className="mt-[3px] ml-1 hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  )
}

export function SiteBanner() {
  return <GithubBanner />
}
