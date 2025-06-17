"use client";

export function ColorChangingButton({ text = "Hover me" }) {
  return (
    <button className="relative">
      <span className="absolute left-0 top-0 ml-1 mt-1 h-full w-full rounded bg-white"></span>
      <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-fuchsia-400 px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-white hover:text-gray-900">
        {text}
      </span>
    </button>
  );
}
