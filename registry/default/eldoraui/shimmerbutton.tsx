"use client";

export function ShimmerButton() {
  return (
    <button className="group relative h-12 overflow-hidden rounded-md bg-fuchsia-500 px-6 text-neutral-50 transition hover:bg-fuchsia-800">
      <span className="relative">Hover me</span>
      <div className="absolute inset-0 -top-[20px] flex h-[calc(100%+40px)] w-full animate-shine-infinite justify-center blur-[12px]">
        <div className="relative h-full w-8 bg-white/30"></div>
      </div>
    </button>
  );
}
