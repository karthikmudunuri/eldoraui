import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Icons } from "@/components/icons"
import { PingDot } from "@/components/ping-dot"

export function DiscordLink({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "shadow-none transition-colors",
            className
          )}
          href={siteConfig.links.discord}
          target="_blank"
          rel="noreferrer"
        >
          <Icons.discord />
          <div className="ml-2 flex items-center gap-1">
            <PingDot />
            <span className="text-muted-foreground">Join the Discord</span>
          </div>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <span>Join our Discord community</span>
      </TooltipContent>
    </Tooltip>
  )
}
