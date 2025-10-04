import SvgRippleEffect from "@/registry/eldoraui/svg-ripple-effect"

export function SvgRippleEffectDemo2() {
  return (
    <div className="bg-background relative mx-auto h-[300px] w-[300px] overflow-hidden rounded-lg border">
      <SvgRippleEffect
        transition={{
          duration: 0.75,
          repeat: Infinity,
          repeatDelay: 1.25,
        }}
        fade={["top", "bottom"]}
        image="https://res.cloudinary.com/eldoraui/image/upload/v1759610754/icon_fcvkvx.png"
        whileHover={true}
      />
    </div>
  )
}
