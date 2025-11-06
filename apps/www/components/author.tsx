import Image from "next/image"

import { cn } from "@/lib/utils"

type AuthorProps = {
  githubUsername: string
  href?: string
  className?: string
}

const formatUsername = (username: string): string => {
  // Convert kebab-case or snake_case to Title Case
  return username
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ")
}

export const Author = ({ githubUsername, href, className }: AuthorProps) => {
  const avatarUrl = `https://github.com/${githubUsername}.png`
  // Default to GitHub profile if no href provided, but allow override for Twitter/X
  const defaultHref = href || `https://github.com/${githubUsername}`
  const displayName = formatUsername(githubUsername)

  return (
    <div
      className={cn(
        "text-muted-foreground mt-3 flex items-center gap-2 text-sm",
        className
      )}
    >
      <span className="text-muted-foreground">by</span>
      <Image
        alt={displayName}
        className="border-border inline-flex overflow-hidden rounded-full border"
        height={24}
        src={avatarUrl}
        unoptimized
        width={24}
      />
      <a
        className="text-foreground hover:text-primary font-medium transition-colors"
        href={defaultHref}
        rel="noopener noreferrer"
        target="_blank"
      >
        {displayName}
      </a>
    </div>
  )
}
