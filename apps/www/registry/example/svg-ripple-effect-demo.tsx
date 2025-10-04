import { SvgRippleEffect } from "@/registry/eldoraui/svg-ripple-effect"

export function SvgRippleEffectDemo() {
  return (
    <div className="bg-background relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-lg border">
      <SvgRippleEffect image="https://avatar.vercel.sh/karthik" />
    </div>
  )
}
