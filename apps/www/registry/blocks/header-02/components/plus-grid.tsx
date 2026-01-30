import { clsx } from "clsx"

export function PlusGrid({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={className}>{children}</div>
}

export function PlusGridRow({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={clsx(
        className,
        "group/row relative isolate pt-[calc(--spacing(2)+1px)] last:pb-[calc(--spacing(2)+1px)]"
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2"
      >
        <div className="border-border absolute inset-x-0 top-0 border-t"></div>
        <div className="border-border absolute inset-x-0 top-2 border-t"></div>
        <div className="border-border absolute inset-x-0 bottom-0 hidden border-b group-last/row:block"></div>
        <div className="border-border absolute inset-x-0 bottom-2 hidden border-b group-last/row:block"></div>
      </div>
      {children}
    </div>
  )
}

export function PlusGridItem({
  className = "",
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={clsx(className, "group/item relative")}>
      <PlusGridIcon
        placement="top left"
        className="hidden group-first/item:block"
      />
      <PlusGridIcon placement="top right" />
      <PlusGridIcon
        placement="bottom left"
        className="hidden group-first/item:group-last/row:block"
      />
      <PlusGridIcon
        placement="bottom right"
        className="hidden group-last/row:block"
      />
      {children}
    </div>
  )
}

export function PlusGridIcon({
  className = "",
  placement,
}: {
  className?: string
  placement: `${"top" | "bottom"} ${"right" | "left"}`
}) {
  const [yAxis, xAxis] = placement.split(" ")

  const yClass = yAxis === "top" ? "-top-2" : "-bottom-2"
  const xClass = xAxis === "left" ? "-left-2" : "-right-2"

  return (
    <svg
      viewBox="0 0 15 15"
      aria-hidden="true"
      className={clsx(
        className,
        "fill-foreground/15 absolute size-[15px]",
        yClass,
        xClass
      )}
    >
      <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
    </svg>
  )
}
