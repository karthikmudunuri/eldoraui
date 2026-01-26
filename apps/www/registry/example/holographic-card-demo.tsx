import HolographicCard from "@/registry/eldoraui/holographic-card"

export default function HolographicCardDemo() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute inset-0 z-[-1]" />

      {/* Card 1 - Default */}
      <HolographicCard
        width={316}
        height={448}
        imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/fourth-playground-card-image.jpg?raw=true"
        topText="旅"
        bottomText="創世"
        borderWidth={1}
        borderColor="rgba(255,255,255,0.1)"
        topTextHoverColor="#FBE75F"
        bottomTextHoverColor="#FBE75F"
      />
    </div>
  )
}
