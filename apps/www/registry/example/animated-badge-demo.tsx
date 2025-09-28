import AnimatedBadge from "@/registry/eldoraui/animated-badge"

export function AnimatedBadgeDemo() {
  return (
    <div className="relative" suppressHydrationWarning>
      <AnimatedBadge
        text="Introducing Eldora ui"
        color="#e879f9"
        href="/docs/components/animated-badge"
      />
    </div>
  )
}
