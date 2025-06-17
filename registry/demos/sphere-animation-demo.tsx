"use client";

import SphereAnimation from "@/registry/eldoraui/sphere-animation";

export default function SphereAnimationDemo() {
  return (
    <div className="relative z-10  h-[400px] w-full overflow-hidden rounded-lg border bg-background">
      <div className="-mt-[200px]">
        <SphereAnimation />
      </div>
    </div>
  );
}
