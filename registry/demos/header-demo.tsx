"use client";

import { ChevronRightIcon } from "lucide-react";
import { Navbar } from "@/registry/eldoraui/header";
import { Link } from "../ui/link";

export default function HeaderDemo() {
  return (
    <div className="relative z-10 h-[160px] w-full overflow-hidden rounded-lg border bg-background">
      <Navbar
        banner={
          <Link
            href="/"
            className="flex items-center gap-1 rounded-full bg-fuchsia-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-[hover]:bg-fuchsia-950/30"
          >
            EldoraUI Version 2.0 is here
            <ChevronRightIcon className="size-4" />
          </Link>
        }
      />
    </div>
  );
}
