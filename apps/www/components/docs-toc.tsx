"use client"

import * as React from "react"
import { IconMenu3 } from "@tabler/icons-react"
import { AlignLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null)

  React.useEffect(() => {
    const findInitialActiveItem = () => {
      for (const id of itemIds) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= window.innerHeight * 0.3) {
            setActiveId(id)
            return
          }
        }
      }
      if (itemIds.length > 0) {
        setActiveId(itemIds[0])
      }
    }

    findInitialActiveItem()

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          const topEntry = visibleEntries.reduce((prev, current) =>
            prev.boundingClientRect.top < current.boundingClientRect.top
              ? prev
              : current
          )
          setActiveId(topEntry.target.id)
        } else {
          // Fallback: find the closest element to the top of the viewport
          const allElements = itemIds
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)
          if (allElements.length > 0) {
            const closestElement = allElements.reduce((prev, current) => {
              const prevRect = prev.getBoundingClientRect()
              const currentRect = current.getBoundingClientRect()
              return Math.abs(currentRect.top) < Math.abs(prevRect.top)
                ? current
                : prev
            })
            setActiveId(closestElement.id)
          }
        }
      },
      {
        rootMargin: "0% 0% -70% 0%",
        threshold: [0, 0.1, 0.5, 1],
      }
    )

    const scrollHandler = () => {
      const scrollContainer = document.querySelector(
        ".no-scrollbar.overflow-y-auto"
      )
      if (scrollContainer) {
        const { scrollTop, scrollHeight, clientHeight } = scrollContainer
        const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50

        if (isAtBottom && itemIds.length > 0) {
          setActiveId(itemIds[itemIds.length - 1])
        }
      }
    }

    for (const id of itemIds ?? []) {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    }

    const scrollContainer = document.querySelector(
      ".no-scrollbar.overflow-y-auto"
    )
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", scrollHandler)
    }

    return () => {
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      }
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", scrollHandler)
      }
    }
  }, [itemIds])

  return activeId
}

function useTocThumb(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [pos, setPos] = React.useState<[number, number]>([0, 0])

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const updatePosition = () => {
      const activeItem = container.querySelector('[data-active="true"]')
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        setPos([rect.top - containerRect.top + 2, rect.height - 4])
      }
    }

    const observer = new MutationObserver(updatePosition)
    observer.observe(container, { attributes: true, subtree: true })

    const resizeObserver = new ResizeObserver(updatePosition)
    resizeObserver.observe(container)

    // Add scroll listener to ensure position updates during scroll
    const scrollContainer = document.querySelector(
      ".no-scrollbar.overflow-y-auto"
    )
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", updatePosition)
    }

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", updatePosition)
      }
    }
  }, [containerRef])

  return pos
}

function useTocSvg(
  items: { url: string; depth: number }[],
  containerRef: React.RefObject<HTMLDivElement | null>
) {
  const [svg, setSvg] = React.useState<{
    path: string
    width: number
    height: number
  }>()

  React.useLayoutEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    function onResize() {
      if (container.clientHeight === 0) return
      let w = 0,
        h = 0
      const d: string[] = []

      for (let i = 0; i < items.length; i++) {
        const element = container.querySelector(
          `a[href="${items[i].url}"]`
        ) as HTMLElement
        if (!element) continue

        const styles = getComputedStyle(element)
        const offset = items[i].depth >= 3 ? 12 : 1
        const top = element.offsetTop + parseFloat(styles.paddingTop)
        const bottom =
          element.offsetTop +
          element.clientHeight -
          parseFloat(styles.paddingBottom)

        w = Math.max(offset + 1, w)
        h = Math.max(h, bottom)

        d.push(`${i === 0 ? "M" : "L"}${offset} ${top}`)
        d.push(`L${offset} ${bottom}`)
      }

      setSvg({
        path: d.join(" "),
        width: w + 1,
        height: h,
      })
    }

    const observer = new ResizeObserver(onResize)
    onResize()

    observer.observe(container)
    return () => {
      observer.disconnect()
    }
  }, [items, containerRef])

  return svg
}

export function DocsTableOfContents({
  toc,
  variant = "list",
  className,
}: {
  toc: {
    title?: React.ReactNode
    url: string
    depth: number
  }[]
  variant?: "dropdown" | "list"
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  // Merge static TOC with dynamic headings
  const [dynamicItems, setDynamicItems] = React.useState<
    {
      title?: React.ReactNode
      url: string
      depth: number
    }[]
  >([])
  const [allItems, setAllItems] = React.useState(toc)

  React.useEffect(() => {
    // Listen for headings updates from CommitList EXCLUSIVELY
    const handleHeadingsUpdate = () => {
      // Only scan for headings within the CommitList component
      const commitListHeadings = Array.from(
        document.querySelectorAll(
          '[data-component="commit-list"] h2[id], [data-component="commit-list"] h3[id]'
        )
      )

      const dynamicHeadings = commitListHeadings
        .map((heading) => {
          const id = heading.id
          const existingTocItem = toc.find((item) => item.url === `#${id}`)
          if (!existingTocItem) {
            const depth = parseInt(heading.tagName.charAt(1))
            // Double-check: ensure this is a genuine CommitList heading by checking formatting
            const textContent = heading.textContent || ""
            const isValidCommitListHeading =
              // Month heading format (like "October 2024", "November 2025")
              /^[A-Za-z]+ \d{4}$/.test(textContent) ||
              // Category heading format (like "Added", "Fixed", "Documentation", "Maintenance")
              ["Added", "Fixed", "Documentation", "Maintenance"].includes(
                textContent
              )

            if (isValidCommitListHeading) {
              return {
                title: textContent,
                url: `#${id}`,
                depth: depth,
              }
            }
          }
          return null
        })
        .filter((item): item is NonNullable<typeof item> => item !== null)

      setDynamicItems(dynamicHeadings)
    }

    // Initial update
    handleHeadingsUpdate()

    // Listen for custom event from CommitList
    window.addEventListener("headings-updated", handleHeadingsUpdate)

    // Also check for headings periodically (fallback)
    const interval = setInterval(handleHeadingsUpdate, 1000)

    return () => {
      window.removeEventListener("headings-updated", handleHeadingsUpdate)
      clearInterval(interval)
    }
  }, [toc])

  React.useEffect(() => {
    setAllItems([...toc, ...dynamicItems])
  }, [toc, dynamicItems])

  const itemIds = React.useMemo(
    () => allItems.map((item) => item.url.replace("#", "")),
    [allItems]
  )
  const activeHeading = useActiveItem(itemIds)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const pos = useTocThumb(containerRef)
  const svg = useTocSvg(allItems, containerRef)

  if (!allItems?.length) {
    return null
  }

  if (variant === "dropdown") {
    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={cn("h-8 md:h-7", className)}
          >
            <IconMenu3 /> On This Page
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="no-scrollbar max-h-[70svh]"
        >
          {allItems.map((item) => (
            <DropdownMenuItem
              key={item.url}
              asChild
              onClick={() => {
                setOpen(false)
              }}
              data-depth={item.depth}
              className="data-[depth=3]:pl-6 data-[depth=4]:pl-8"
            >
              <a href={item.url}>{item.title}</a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }

  return (
    <div className={cn("flex flex-col gap-2 p-4 pt-0 text-sm", className)}>
      <div className="text-muted-foreground flex h-6 items-center gap-2 [&_svg]:size-4">
        <AlignLeft />
        <p className="bg-background sticky top-0 text-sm">On This Page</p>
      </div>
      <div className="relative min-h-0 text-sm" ref={containerRef}>
        {svg ? (
          <div
            className="absolute start-0 top-0"
            style={{
              width: svg.width,
              height: svg.height,
              maskImage: `url("data:image/svg+xml,${encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="white" stroke-width="2" fill="none" /></svg>`
              )}")`,
            }}
          >
            <div
              className="bg-cyan-400 transition-all duration-300"
              style={{
                marginTop: pos[0],
                height: pos[1],
              }}
            />
          </div>
        ) : null}
        <div className="flex flex-col">
          {allItems.map((item, i) => (
            <a
              key={item.url}
              href={item.url}
              className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground relative py-1.5 text-sm no-underline transition-colors first:pt-0 last:pb-0"
              style={{
                paddingInlineStart: `${item.depth <= 2 ? 16 : item.depth === 3 ? 32 : 48}px`,
              }}
              data-active={item.url === `#${activeHeading}`}
              data-depth={item.depth}
            >
              {item.depth >= 3 && allItems[i - 1]?.depth < item.depth ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="absolute start-0 -top-2 size-4"
                >
                  <line
                    x1={allItems[i - 1]?.depth >= 3 ? 12 : 0}
                    y1="0"
                    x2="12"
                    y2="16"
                    className="stroke-foreground/10"
                    strokeWidth="1"
                  />
                </svg>
              ) : null}
              {item.depth <= 2 && allItems[i - 1]?.depth >= 3 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="absolute start-0 -top-2 size-4"
                >
                  <line
                    x1="12"
                    y1="0"
                    x2="0"
                    y2="16"
                    className="stroke-foreground/10"
                    strokeWidth="1"
                  />
                </svg>
              ) : null}
              <div
                className={cn(
                  "bg-foreground/10 absolute inset-y-0 w-px",
                  item.depth >= 3 &&
                    allItems[i - 1]?.depth < item.depth &&
                    "top-2",
                  item.depth >= 3 &&
                    allItems[i + 1]?.depth < item.depth &&
                    "bottom-2",
                  item.depth <= 2 && allItems[i + 1]?.depth >= 3 && "bottom-2",
                  item.depth <= 2 && allItems[i - 1]?.depth >= 3 && "top-2"
                )}
                style={{
                  insetInlineStart: item.depth >= 3 ? 12 : 0,
                }}
              />
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
