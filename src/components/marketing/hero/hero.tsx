"use client";

import TechStack from "../techstack";
import { buttonVariants } from "../button";
import { cn } from "@/lib/utils/classes";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import AnimatedShinyText from "./shinytext";


export default function Hero() {
  const fadeInRef = useRef(null);
  const fadeInInView = useInView(fadeInRef, {
    once: true,
  });

  const fadeUpVariants = {
    initial: {
      opacity: 0,
      y: 24,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section >
      <div className="relative h-full py-10">
        <div className="container z-10 flex flex-col">
        
          
       
      
          <div className=" grid grid-cols-1">
          
        
    
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
            <Link href="/components/text">
        <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ Introducing Text animations </span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </Link>
             
              <div className="relative flex flex-col gap-4 md:items-center lg:flex-row">
                <h1 className="relative mx-0 max-w-[43.5rem] text-balance pt-5 text-left text-5xl font-extrabold tracking-tight text-black dark:text-white sm:text-7xl md:mx-auto md:px-4 md:py-2 md:text-center md:text-7xl lg:text-7xl">
                  UI library for Design <span className="bg-gradient bg-clip-text text-transparent">Engineers</span>
                </h1>
                <span className="text-neutral-90 absolute -top-3.5 left-0 z-10 rotate-3 whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white md:top-12 md:-rotate-12">
                   Open-source
                </span>
              </div>
              <p className="max-w-[64rem] text-balance text-lg tracking-tight text-black dark:text-white md:text-xl">
                open-source animated components built with{" "}
                <strong>React</strong>, <strong>Typescript</strong>,{" "}
                <strong>Tailwind CSS</strong>, and{" "}
                <strong>Framer Motion</strong>.
                <br />
                100% open-source, and customizable.
              </p>

              <div className="flex flex-col gap-4 lg:flex-row" >
                <div className="flex flex-col gap-4 md:flex-row">
                  <Link
                    href="/components"
                    className={cn(
                      buttonVariants({
                        variant: "outline",
                        size: "lg",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 rounded-full text-sm font-semibold tracking-tighter",
                    )}
                  >
                    Browse Components
                    <ChevronRight className="ml-1  size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/docs/installation"
                    className={cn(
                      buttonVariants({
                        size: "lg",
                        variant: "outline",
                      }),
                      "gap-2 whitespace-pre md:flex",
                      "group relative w-full gap-1 overflow-hidden rounded-full text-sm font-semibold tracking-tighter",
                    )}
                  >
                    Get Started
                    <ChevronRight className="ml-1 size-4 flex-shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
          </div>
         

          <div className="relative mx-auto flex w-full max-w-[1000px] items-center justify-center">
            <TechStack
              className="mx-auto "
              technologies={[
                "nextjs",
                "react",
                "typescript",
                "tailwindcss",
                "framermotion",
                // "shadcn",
              ]}
            />
          </div>
          

          <div className="container relative mx-auto mt-32 w-full max-w-[1300px]">
            <motion.span
              animate={["initial"]}
              whileHover={["hover"]}
              variants={{
                hover: {
                  scale: 1.1,
                  rotate: -6,
                  transition: {
                    duration: 0.2,
                  },
                },
                initial: {
                  y: [-8, 8],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                },
              }}
              className="absolute -top-16 left-0 right-auto cursor-pointer lg:-top-20"
            >
              <span className="flex items-center">
                <span className="mt-3 inline-block whitespace-nowrap rounded-full bg-neutral-800 px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white">
                  Explore Components
                </span>
                <svg
                  className="mr-6 h-8 w-14 [transform:rotateY(180deg)rotateX(0deg)]"
                  width="45"
                  height="25"
                  viewBox="0 0 45 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                    fill="currentColor"
                    className="fill-gray-300 dark:fill-gray-700"
                  />
                </svg>
              </span>
            </motion.span>

            
           
           

         
              
              
            </div>
            </div>
          
        
    </section>
  );
}
