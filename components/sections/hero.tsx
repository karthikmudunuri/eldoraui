import { allDocs } from "content-collections";
import { compareDesc } from "date-fns";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import TechStack from "@/components/tech-stack";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {AnimatedGradientText} from "@/registry/default/eldoraui/animationgradienttext";

export default async function Hero() {
  const post = allDocs
    .filter(
      (post) =>
        post.date && post.date <= new Date().toISOString() && post.published,
    )
    .sort((a, b) => {
      if (!a.date && !b.date) return 0; // Both dates are undefined, keep original order
      if (!a.date) return 1; // Move a to the end if date is undefined
      if (!b.date) return -1; // Move b to the end if date is undefined
      return compareDesc(new Date(a.date), new Date(b.date)); // Both dates are defined, proceed with comparison
    })[0];

  return (
    <section id="hero">
      <div className="relative mb-4 h-full overflow-hidden py-5 md:py-10">
        <div className="z-10 flex flex-col">
          <div className="mt-4 grid grid-cols-1 md:mt-20">
            <div className="flex flex-col items-start gap-6 px-7 pb-8 text-center md:items-center md:px-10">
                <Link href={post.slug}>
                  <AnimatedGradientText>
                    <div
                      className={cn(
                        `absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`,
                        `p-[1px] ![mask-composite:subtract]`,
                      )}
                    />
                    🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
                    <span
                      className={cn(
                        `animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
                        `inline`,
                      )}
                    >
                      Introducing {post.title}
                    </span>
                    <ChevronRight className="ml-1 h-4 w-4 text-gray-500" />
                  </AnimatedGradientText>
                </Link>
             
                <div className="relative mt-4 flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="relative mx-0 max-w-[43.5rem] text-balance pt-5 text-left text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl">
                  UI library for Design <span className="bg-gradient bg-clip-text text-transparent">Engineers</span>
                </h1>
                <span className="text-neutral-90 absolute -top-3.5 left-0 z-10 rotate-3 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white md:top-12 md:-rotate-12">
                   Open-source
                </span>
              </div>

              <p className="max-w-xl text-balance text-left text-base tracking-tight text-black dark:font-medium dark:text-white md:text-center md:text-lg ">
                50+ free and open-source animated components built with{" "}
                <b>React</b>, <b>Typescript</b>, <b>Tailwind CSS</b>, and{" "}
                <b>Framer Motion</b>
                .
              </p>

              <div className="mx-0 flex w-full max-w-full flex-col gap-4 py-4 sm:max-w-lg sm:flex-row md:mx-auto">
                <div className="flex w-full flex-col gap-2 sm:flex-row sm:gap-4">
                <Link
                    href="/components"
                    // eslint-disable-next-line tailwindcss/no-contradicting-classname
                    className={cn(
                      buttonVariants({
                        variant: "default",
                        size: "lg",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/docs"
                    // eslint-disable-next-line tailwindcss/no-contradicting-classname
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "ghost",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter",
                    )}
                  >
                    Get Started
                    <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
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
                "framermotion",
                "shadcn",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
