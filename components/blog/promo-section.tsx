"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function PromoSection() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-3.5 rounded-xl border bg-[#e879f9] p-5 text-white">
      <h2 className="text-balance text-center text-lg font-semibold tracking-tighter">
        Want to save time? Get beautifully designed website templates with Eldora UI
      </h2>
      <p className="text-balance text-center">
        30+ beautiful sections and templates built with React, Typescript,
        Tailwind CSS, and Motion.
      </p>
      <Button variant="default" asChild className="w-full">
        <Link href="https://eldoraui.site">
          Get Started
          <ArrowRightIcon className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  );
}
