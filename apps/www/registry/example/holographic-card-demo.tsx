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

      {/* Card 2 - Purple Theme */}
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

      {/* Card 3 - Blue Draggable */}
      <HolographicCard
        id="namer-ui-holographic-card-3"
        width={316}
        height={448}
        imageSrc="https://github.com/Northstrix/my-portfolio/blob/main/public/third-playground-card-image.png?raw=true"
        topText="נמר"
        bottomText="I'm draggable!"
        topTextLetterSpacing="0.0175rem"
        bottomTextLetterSpacing="0.0175rem"
        textOverlayPadding="1.125rem 1.375rem"
        maxImageWidthPct={0.54}
        topTextColor="#5F73FB"
        topTextHoverColor="#5FA4FB"
        bottomTextColor="#5F73FB"
        bottomTextHoverColor="#5FA4FB"
        borderWidth={2}
        borderColor="#5F73FB"
        topTextVertical={false}
        bottomTextVertical={false}
        mirrorBottomText={false}
        enableDrag={true}
        isRTL
        patternColor="rgba(95, 115, 251, 0.15)"
      />

      {/* Inscription link below lowest card */}
      <a
        href="https://namer-ui.vercel.app/components/holographic-card"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-white text-lg font-medium tracking-wide transition-all duration-300 ease-in-out hover:text-[#5F73FB] hover:underline focus:outline-none focus:text-[#5F73FB] focus:underline underline-offset-4 decoration-2"
      >
        Version with electric border
      </a>

    </div>
  )
}
