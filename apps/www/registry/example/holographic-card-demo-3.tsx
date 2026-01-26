import HolographicCard from "@/registry/eldoraui/holographic-card"

export default function HolographicCardDemo3() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 overflow-hidden px-6 py-12">
      <div className="pointer-events-none absolute inset-0 z-[-1]" />

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
    </div>
  )
}
