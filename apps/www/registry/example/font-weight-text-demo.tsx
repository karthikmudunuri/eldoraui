import { FontWeightText } from "@/registry/eldoraui/font-weight-text"

export function FontWeightTextDemo() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <FontWeightText text="Let's Go" fontSize={60} className="text-cyan-200" />
    </div>
  )
}
