"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NavItem } from "@/types"

import { trackEvent } from "@/lib/events"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: NavItem[]
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("items-center gap-0.5", className)} {...props}>
      {items.map((item) => (
        <Button key={item.href} variant="ghost" asChild size="sm">
          <Link
            href={item.href ?? ""}
            className={cn(pathname === item.href && "text-primary")}
            onClick={() => {
              if (item.event) {
                trackEvent({ name: item.event })
              }
            }}
          >
            <span className="flex items-center gap-2">
              {item.title}
              {item.label && (
                <span className="rounded-md border border-cyan-400 bg-cyan-400/60 px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                  {item.label}
                </span>
              )}
            </span>
          </Link>
        </Button>
      ))}
    </nav>
  )
}
