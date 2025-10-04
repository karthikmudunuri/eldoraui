"use client"

import FancyTestimonialsSlider from "@/registry/eldoraui/testimonal-slider"

export function TestimonalSliderDemo() {
  const testimonials = [
    {
      img: "https://avatar.vercel.sh/karthik",
      quote: "EldoraUI's components make building UIs effortless great work!",
      name: "Karthik",
      role: "Developer",
    },
    {
      img: "https://avatar.vercel.sh/nick",
      quote:
        "EldoraUI simplifies complex designs with ready-to-use components.",
      name: "Nick",
      role: "Designer",
    },
    {
      img: "https://avatar.vercel.sh/amelia",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia",
      role: "Tester",
    },
  ]
  return (
    <div className="bg-background relative h-[400px] w-full overflow-hidden rounded-lg border sm:h-[500px]">
      <div className="mt-8 flex justify-center px-4 sm:mt-16 sm:px-12">
        <FancyTestimonialsSlider
          testimonials={testimonials}
          autorotateTiming={5000}
        />
      </div>
    </div>
  )
}
