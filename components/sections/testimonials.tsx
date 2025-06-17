import { ExpandableMasonarySection } from "@/components/sections/expandable-masonary-section";
import { TweetCard } from "@/registry/eldoraui/tweet-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const allTweets = [
  "https://x.com/miantiao_me/status/1814496850134946210",
  "https://x.com/ArabsDev/status/1860031241325584796",
  "https://x.com/AnshulSoni2010/status/1858816175121088962",
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
  "https://x.com/delgorithm/status/1821170345472110788",
  "https://x.com/weeklyfoo/status/1816272881438892282",
  "https://x.com/NanimonoDaemon/status/1815015059552337956",
  
].map((t) => t.split("/").slice(-1)[0]);

export default function Testimonials() {
  return (
    <section id="testimonials" className="container max-w-screen-xl py-14">
      <h2 className="mb-8 text-center text-5xl font-bold leading-[1.2] tracking-tighter text-foreground">
        What People Are Saying on Twitter
      </h2>
      <ExpandableMasonarySection>
        {allTweets.map((id) => (
          <Link
            href={`https://x.com/i/status/${id}`}
            key={id}
            className="group relative"
          >
            <TweetCard
              id={id}
              className="break-inside-avoid overflow-hidden rounded-lg bg-secondary shadow-sm"
            />
            <span className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 p-4 text-lg font-bold text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <span className="flex translate-y-[14px] items-center gap-2 transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                View Tweet
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </span>
          </Link>
        ))}
      </ExpandableMasonarySection>
    </section>
  );
}
