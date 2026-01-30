import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { fetchStargazers } from "@/lib/github"

export const metadata: Metadata = {
  title: "Supporters - Eldora UI",
  description: "Thank you to all our GitHub stargazers who support Eldora UI",
}

export default async function SupportersPage() {
  const stargazers = await fetchStargazers(1500)

  return (
    <div className="container max-w-7xl py-12 md:py-16">
      {/* Header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
          Our Supporters
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Huge thanks to{" "}
          <span className="text-foreground font-semibold">
            {stargazers.length}
          </span>{" "}
          amazing people who starred Eldora UI on GitHub 💙
        </p>
      </div>

      {/* Avatar Grid */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
        {stargazers.map((user, index) => (
          <Link
            key={user.id}
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            title={user.login}
          >
            <div className="ring-border hover:ring-primary relative size-7 overflow-hidden rounded-full ring-1 transition-all duration-150 hover:scale-110 hover:ring-2 sm:size-8 md:size-9">
              <Image
                src={user.avatar_url}
                alt={user.login}
                fill
                unoptimized
                priority={index < 40}
                sizes="(max-width: 640px) 28px, (max-width: 768px) 32px, 36px"
                className="object-cover"
              />
            </div>

            {/* Tooltip */}
            <div className="pointer-events-none absolute -bottom-6 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-150 group-hover:opacity-100">
              <span className="bg-popover text-popover-foreground rounded-md border px-2 py-0.5 text-[11px] font-medium shadow-sm">
                {user.login}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {stargazers.length === 0 && (
        <div className="text-muted-foreground py-12 text-center">
          No supporters found.
        </div>
      )}
    </div>
  )
}
