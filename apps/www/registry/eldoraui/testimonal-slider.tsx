"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Transition } from "@headlessui/react"

interface Testimonial {
  img: string
  quote: string
  name: string
  role: string
}

export default function FancyTestimonialsSlider({
  testimonials,
  autorotateTiming = 7000,
}: {
  testimonials: Testimonial[]
  autorotateTiming?: number
}) {
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<number>(0)
  const [autorotate, setAutorotate] = useState<boolean>(true)

  useEffect(() => {
    if (!autorotate) return
    const interval = setInterval(() => {
      setActive(active + 1 === testimonials.length ? 0 : (active) => active + 1)
    }, autorotateTiming)
    return () => clearInterval(interval)
  }, [active, autorotate])

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
      {/* Testimonial image */}
      <div className="relative h-24 sm:h-32">
        <div className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-cyan-500/25 before:via-cyan-500/5 before:via-25% before:to-cyan-500/0 before:to-75% sm:h-[480px] sm:w-[480px]">
          <div className="h-24 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))] sm:h-32">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 -z-10 h-full"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                <Image
                  className="relative top-8 left-1/2 -translate-x-1/2 rounded-full sm:top-11"
                  src={testimonial.img}
                  width={48}
                  height={48}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="mb-6 transition-all delay-300 duration-150 ease-in-out sm:mb-9">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div className="px-2 text-lg font-bold text-cyan-900 before:content-['\201C'] after:content-['\201D'] sm:px-0 sm:text-xl lg:text-2xl">
                {testimonial.quote}
              </div>
            </Transition>
          ))}
        </div>
      </div>
      {/* Buttons */}
      <div className="-m-1 flex flex-wrap justify-center gap-1 sm:gap-1.5">
        {testimonials.map((testimonial, index) => (
          <button
            key={index}
            className={`m-1 inline-flex justify-center rounded-full px-2 py-1 text-xs whitespace-nowrap shadow-sm transition-colors duration-150 focus-visible:ring focus-visible:ring-cyan-300 focus-visible:outline-none sm:px-3 sm:py-1.5 sm:text-xs dark:focus-visible:ring-cyan-600 ${active === index ? "bg-cyan-500 text-white shadow-cyan-950/10" : "bg-white text-cyan-900 hover:bg-cyan-100"}`}
            onClick={() => {
              setActive(index)
              setAutorotate(false)
            }}
          >
            <span className="truncate">{testimonial.name}</span>{" "}
            <span
              className={`${active === index ? "text-cyan-200" : "text-cyan-300"}`}
            >
              -
            </span>{" "}
            <span className="truncate">{testimonial.role}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
