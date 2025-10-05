import { FadeText } from "@/registry/eldoraui/fade-text"

export default function FadeTextDemo3() {
  return (
    <FadeText
      text="Gracefully descending"
      direction="down"
      staggerDelay={0.3}
    />
  )
}
