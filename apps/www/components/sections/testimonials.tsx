import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ExpandableMasonarySection } from "@/components/sections/expandable-masonary-section"
import { TweetCard } from "@/registry/eldoraui/tweet-card"

const allTweets = [
  "https://x.com/miantiao_me/status/1814496850134946210",
  "https://x.com/ArabsDev/status/1860031241325584796",
  "https://x.com/treyvijay/status/1858433973489430841",
  "https://x.com/DevKhan03/status/1856600564013903952",
  "https://x.com/Theme_Selection/status/1851222039413330414",
  "https://x.com/0xKaiBi/status/1846883117900218752",
  "https://x.com/ARYANKU82946231/status/1845156485887672551",
  "https://x.com/MohakBajaj5/status/1838408787381883347",
  "https://x.com/miantiao_me/status/1829904214350590407",
  "https://x.com/dotHTML5/status/1828371962755711106",
  "https://x.com/prod42net/status/1824045911162470433",
  "https://x.com/0xKaiBi/status/1817794180447621617",
  "https://x.com/mckaywrigley/status/1831185841051590857",
  "https://x.com/akhdigital/status/1816926458863820880",
  "https://x.com/miantiao_me/status/1816325000426607083",
  "https://x.com/prod42net/status/1815624153707229558",
  "https://x.com/ThibaultJP1/status/1815138485440803034",
  "https://x.com/miantiao_me/status/1814496850134946210",
  "https://x.com/red_claww/status/1836064706185892062",
  "https://x.com/codemasteerrr/status/1823274177639440741",
  "https://x.com/weeklyfoo/status/1816272881438892282",
  "https://x.com/NanimonoDaemon/status/1815015059552337956",
].map((t) => t.split("/").slice(-1)[0])

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto py-10 md:py-14">
      <h2 className="text-foreground mb-10 text-center text-3xl leading-[1.2] font-semibold tracking-tighter text-balance md:text-4xl lg:text-5xl">
        What People Are Saying on Twitter
      </h2>
      <ExpandableMasonarySection>
        {allTweets.map((id) => (
          <Link
            href={`https://x.com/i/status/${id}`}
            key={id}
            className="group relative block contain-layout"
          >
            <TweetCard
              id={id}
              className="border-border bg-card break-inside-avoid overflow-hidden rounded-xl border transition-[border-color,background-color,box-shadow] duration-200 ease-in-out hover:shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/5 opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-in-out will-change-[opacity] group-hover:opacity-100">
              <Button
                variant="default"
                size="default"
                className="pointer-events-none h-8 w-fit translate-y-3 px-2 transition-transform duration-200 ease-in-out will-change-transform group-hover:translate-y-0"
              >
                View Tweet
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </Link>
        ))}
      </ExpandableMasonarySection>
    </section>
  )
}
