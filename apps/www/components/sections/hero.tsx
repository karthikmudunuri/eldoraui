import { cn } from "@/lib/utils"
import { TechStack } from "@/components/tech-stack"
import AnimatedBadge from "@/registry/eldoraui/animated-badge"
import { AnimatedShinyButton } from "@/registry/eldoraui/animated-shiny-button"
import { AuroraText } from "@/registry/eldoraui/aurora-text"
import LiveButton from "@/registry/eldoraui/live-button"

export function Hero() {
  return (
    <section id="hero">
      <div className="relative h-full overflow-hidden py-5 md:py-14">
        {/* <HeroAnimatedSlides className="absolute inset-x-8 inset-y-0 hidden py-4 md:block lg:inset-x-24 xl:inset-x-32" /> */}
        <div className="z-10 flex flex-col">
          <div className="mt-10 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
              <div
                className="flex w-full justify-center"
                suppressHydrationWarning
              >
                {/* fallback to page.title and page.url if available */}
                <AnimatedBadge
                  text={`Introducing Blocks`}
                  color="#22d3ee"
                  href={"/blocks"}
                />
              </div>
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1
                  className={cn(
                    "text-black dark:text-white",
                    "relative mx-0 max-w-174 pt-5 md:mx-auto md:px-4 md:py-2",
                    "text-left font-semibold tracking-tighter text-balance md:text-center",
                    "text-5xl sm:text-7xl md:text-7xl lg:text-7xl"
                  )}
                >
                  UI library for Design {""}
                  <AuroraText>Engineers</AuroraText>
                </h1>
              </div>

              <p className="text-primary max-w-xl text-left text-base tracking-tight text-balance md:text-center md:text-lg">
                150+ free and open-source animated components and effects built
                with <b className="font-[550] dark:font-[580]">React</b>,{" "}
                <b className="font-[550] dark:font-[580]">Typescript</b>,{" "}
                <b className="font-[550] dark:font-[580]">Tailwind CSS</b>, and{" "}
                <b className="font-[550] dark:font-[580]">Motion</b>
                .
                <br />
                Perfect companion for{" "}
                <b className="font-[550] dark:font-[580]">shadcn/ui</b>.
              </p>

              <div className="flex w-full flex-col items-center gap-4 md:mx-auto md:max-w-lg md:flex-row md:justify-center md:gap-6">
                <AnimatedShinyButton
                  url="/docs/components"
                  className="w-full md:w-60"
                >
                  Browse Components
                </AnimatedShinyButton>
                <LiveButton
                  text="Browse Templates"
                  url="/docs/templates/portfolio"
                  className="w-full md:w-60"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-56 items-center justify-center">
            <TechStack
              className="mx-auto flex w-full items-center justify-between"
              technologies={[
                "react",
                "typescript",
                "tailwindcss",
                "motion",
                "shadcn",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
