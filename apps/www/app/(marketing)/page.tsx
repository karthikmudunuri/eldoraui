import { ComponentDemos } from "@/components/sections/component-demos"
import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/sections/testimonials"

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentDemos />
      <Testimonials />
    </>
  )
}
