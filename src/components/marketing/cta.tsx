import React from "react";
import Link from "next/link";
import { getGitHubStars } from "@/utils/github";
import { cn } from "@/lib/utils/classes";
import { siteConfig } from "@/config";
import { GitHubIcon } from "../icons";

interface CallToActionProps {
  className?: string;
}

export const CallToAction = async (props: CallToActionProps) => {
  const { className } = props;
  const stars = (await getGitHubStars()) ?? 99999;

  return (
    <section className={cn("mx-auto max-w-2xl px-6 text-center", className)}>
      <h2 className="mx-auto mt-8 max-w-2xl text-3xl font-bold tracking-tighter lg:text-5xl">
        Proudly <span className="bg-gradient bg-clip-text text-transparent">open-source</span>
      </h2>
      <p className="mt-4 text-lg text-fg-muted">
        Our source code is available on GitHub - feel free to read, review, or contribute to it
        however you want!
      </p>
      <div className="mt-10 flex justify-center space-x-2">
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="group flex"
        >
          <div className="flex h-10 items-center justify-center space-x-2 rounded-md bg-bg-neutral px-4 transition-colors group-hover:bg-bg-neutral-hover">
            <GitHubIcon size={18} />
            <span className="truncate">Star us on GitHub</span>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-bg-neutral border-y-transparent transition-colors group-hover:border-bg-neutral-hover group-hover:border-y-transparent" />
            <div className="flex h-10 items-center rounded-md bg-bg-neutral px-4 font-medium transition-colors group-hover:bg-bg-neutral-hover">
              {stars}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};
