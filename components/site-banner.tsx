"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function SiteBanner() {
  return (
    <div className="relative top-0 bg-[#d946ef] py-3 text-black md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link
          href="https://github.com/karthikmudunuri/eldoraui"
          target="_blank"
          className="group inline-flex items-center justify-center text-center text-sm leading-loose"
        >
          ✨
          <span className="ml-2 font-[580] dark:font-[550]">
            <span className="block md:hidden">Leave a star on GitHub! ⭐</span>
            <span className="hidden md:block">
              Introducing Eldora UI 2.0 – 50+ blocks and templates to build beautiful landing pages in minutes. ⭐ Support us by leaving a star on GitHub!
            </span>
          </span>
          <ChevronRight className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1" />
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  );
}
