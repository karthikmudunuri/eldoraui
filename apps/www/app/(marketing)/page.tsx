import { Hero } from "@/components/sections/hero"
import { Testimonials } from "@/components/sections/testimonials"
import { ComponentDemos } from "@/components/sections/component-demos"

export default function Home() {
  return (
    <>
      <Hero />
      <ComponentDemos />
      <Testimonials />
    </>
  )
}
