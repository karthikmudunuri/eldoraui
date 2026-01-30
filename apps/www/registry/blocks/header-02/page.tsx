import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { Navbar } from "@/registry/blocks/header-02/components/navbar"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden">
      <Navbar
        banner={
          <Link
            href="/blog/radiant-raises-100m-series-a-from-tailwind-ventures"
            className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-fuchsia-950/30"
          >
            Radiant raises $100M Series A from Tailwind Ventures
            <ChevronRightIcon className="size-4" />
          </Link>
        }
      />
      <section className="flex flex-1 items-center justify-center">
        <h1 className="text-foreground text-4xl font-bold">Hero</h1>
      </section>
    </div>
  )
}
