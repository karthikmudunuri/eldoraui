import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Grid } from "@/registry/eldoraui/grid"

import { Icons } from "./icons"
import { OrbitingCircles } from "./orbiting-circle"

const OribitingCirclesAnimation = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-background absolute inset-0 z-0 flex flex-col overflow-visible",
        className
      )}
      aria-hidden
    >
      <div className="relative flex h-[50%] min-h-[240px] w-full shrink-0 items-center justify-center overflow-visible">
        <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
        <div className="from-background pointer-events-none absolute top-0 left-0 z-20 h-10 w-full bg-gradient-to-b to-transparent" />
        <div className="relative -mt-60 flex h-full w-full items-center justify-center">
          <OrbitingCircles
            index={0}
            iconSize={150}
            radius={150}
            reverse
            speed={1}
          >
            <Icons.boat />
            <Icons.supabase />
            <Icons.figma />
          </OrbitingCircles>
          <OrbitingCircles index={1} iconSize={150} radius={300} speed={0.5}>
            <Icons.workos />
            <Icons.runwayml />
            <Icons.gemini />
          </OrbitingCircles>
          <OrbitingCircles
            index={2}
            iconSize={150}
            radius={440}
            reverse
            speed={0.5}
          >
            <Icons.vercel />
            <Icons.replit />
            <Icons.posthog />
          </OrbitingCircles>
        </div>
      </div>
    </div>
  )
}

export default function CtaPage() {
  return (
    <Grid
      columns={1}
      rows={1}
      height="min-h-[36rem]"
      width="w-full"
      showPlusIcons={false}
    >
      <section className="relative min-h-[36rem] w-full overflow-hidden">
        <OribitingCirclesAnimation />
        <div
          className="via-background/40 to-background/70 pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-transparent from-35% via-55% to-100% backdrop-blur-[0.8px]"
          aria-hidden
        />
        <div className="relative z-20 flex min-h-[36rem] flex-col items-center justify-center gap-6 px-4 py-12">
          <h2 className="text-foreground max-w-2xl text-center text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Connect your Current Stack and Start Automating
          </h2>
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-xl border-0 px-8 py-6 text-base font-medium shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-colors dark:shadow-[0_4px_14px_rgba(255,255,255,0.2)]"
          >
            <Link href="#">Start Building for Free</Link>
          </Button>
        </div>
      </section>
    </Grid>
  )
}
