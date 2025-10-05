import { MultiDirectionSlideText } from "@/registry/eldoraui/multi-direction-slide-text"

export function MultiDirectionSlideTextDemo() {
  return (
    <MultiDirectionSlideText
      className="font-display text-center text-4xl font-bold -tracking-widest text-black md:text-7xl md:leading-[5rem] dark:text-white"
      textLeft="Multidirectional"
      textRight="Slide"
    />
  )
}
