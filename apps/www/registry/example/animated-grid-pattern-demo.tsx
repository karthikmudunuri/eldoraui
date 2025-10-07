import { AnimatedGridPattern } from "@/registry/eldoraui/animated-grid-pattern"

export function AnimatedGridPatternDemo() {
  return (
    <div className="bg-background relative mx-auto h-[500px] w-full overflow-hidden rounded-lg border">
      <AnimatedGridPattern
        gridSize={10}
        gridWidth={4}
        gridLength={4}
        gap={0.05}
        rippleScale={2.5}
        rippleRadius={2}
        cornerRadius={0.8}
        cameraPosition={[-9.31, 12, 11.5]}
        cameraRotation={[-0.65, -0.2, -0.13]}
        fov={60}
      />
    </div>
  )
}
