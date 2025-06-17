"use client";

export function HoverUpButton() {
  return (
    <div className="w-[10rem] rounded-lg bg-purple-400 transition-colors">
      <button className="w-full origin-top-left rounded-lg border border-purple-900 bg-white py-3 text-xs font-medium text-purple-900 transition-all hover:-rotate-2 md:text-base">
        Hover me
      </button>
    </div>
  );
}
