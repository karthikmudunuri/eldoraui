"use client"

import PhotonBeam from "@/registry/eldoraui/photon-beam"

export default function PhotonBeamDemo() {
  return (
    <div className="bg-background relative z-10 h-[500px] w-full overflow-hidden rounded-lg border">
      <PhotonBeam
        colorBg="#080808"
        colorLine="#005f6f"
        colorSignal="#00d9ff"
        colorSignal2="#00ffff"
        colorSignal3="#00b8d4"
        lineCount={80}
        spreadHeight={50}
        signalCount={94}
        speedGlobal={0.345}
        trailLength={3}
        bloomStrength={3.0}
        bloomRadius={0.5}
      />
    </div>
  )
}
