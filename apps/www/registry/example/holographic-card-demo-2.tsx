import HolographicCard from "@/registry/eldoraui/holographic-card"

export default function HolographicCardDemo2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute inset-0 z-[-1]" />

      <HolographicCard
        id="namer-ui-holographic-card-2"
        width={316}
        height={448}
        imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/playground-card-image.webp?raw=true"
        topText="洪秀全"
        bottomText="洪秀全"
        topTextLetterSpacing="0.375rem"
        bottomTextLetterSpacing="0.375rem"
        maxImageWidthPct={0.64}
        topTextColor="#8E5BEE"
        topTextHoverColor="#E95FF6"
        bottomTextColor="#8E5BEE"
        bottomTextHoverColor="#E95FF6"
        borderWidth={2}
        borderColor="#8E5BEE"
        backgroundColor="#fff"
        patternSize={12.06}
        patternDotSize={1.75}
        patternColor="rgba(142, 91, 238, 0.1)"
      />
    </div>
  )
}
