import React from "react";
import { cn } from "../../../lib/utils";
import { Spotlight } from "../ui/spotlight";
import AnimatedGradientText from "../ui/gradienttext";
import { ChevronRight } from "lucide-react";
import { HoverBorderGradient } from "../ui/hhoverborder";

export function SpotlightPreview() {
  const handleBrowseClick = () => {
    window.location.href = "/documentation/introduction";
  };

  const handleGetStartedClick = () => {
    window.location.href = "/documentation/introduction";
  };

  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="relative z-10 p-4 max-w-7xl mx-auto w-full pt-20 md:pt-0">
        <AnimatedGradientText>
          🎉{" "}
          <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
            )}
          >
            Introducing Eldora UI
          </span>{" "}
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
        <br />

        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          UI library for Developers
        </h1>

        <p className="mt-4 font-normal text-base text-neutral-300 max-w-3xl text-center mx-auto">
          20+ free and open-source animated components built with React,
          Next.js , Typescript, Tailwind CSS, and Framer Motion. 100%
          open-source, and customizable.
        </p>

        <div className="flex justify-center mt-8 space-x-4">
         

          <HoverBorderGradient
            onClick={handleGetStartedClick}
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
          >
            <span>Browse Components</span>
            <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </HoverBorderGradient>
          <button onClick={handleBrowseClick} className="px-4 py-2 rounded-lg border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
           Get Started
          </button>
        </div>
        <div className="mt-12 ml-32 flex items-center justify-center">
        <button className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
         Real Component Demos
     </button>
        <img src="/aa.svg" alt="arrow" height={50} width={100} />
        </div>
      </div>
    </div>
  );
}
