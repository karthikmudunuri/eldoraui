import React from "react";
import { ArrowRightIcon, PinIcon, SparklesIcon } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { SearchDocs } from "@/components/docs/search-docs";
import { GitHubIcon } from "@/components/icons";
import { Avatar } from "@/lib/components/core/default/avatar";
import { AvatarGroup } from "@/lib/components/core/default/avatar-group";
import { Button } from "@/lib/components/core/default/button";
import { Switch } from "@/lib/components/core/default/switch";
import { ToggleButton } from "@/lib/components/core/default/toggle-button";
import Calendar from "@/lib/demos/components/core/calendar/default";
import { cn } from "@/lib/utils/classes";
import { siteConfig } from "@/config";
import FunctionsHero from "../hero-demo";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("w-full items-start justify-between md:flex md:max-w-7xl", className)}>
      <div className="pt-4">
        <Button
          href="https://github.com/mehdibha/dotUI"
          target="_blank"
          prefix={<SparklesIcon />}
          suffix={<ArrowRightIcon />}
          size="sm"
          className="h-7 rounded-md font-mono text-sm text-fg-muted active:text-fg hover:text-fg"
        >
          Star us on GitHub
        </Button>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          <Balancer>
            Everything you need to build your{" "}
            <span className="bg-gradient bg-clip-text text-transparent">React app</span>
          </Balancer>
        </h1>
        <p className="text-md mt-6 text-fg-muted md:text-lg lg:text-xl">
          Accessible, mobile friendly, modern UI components.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/docs/installation" variant="primary" size="lg">
            Read the docs
          </Button>
          <SearchDocs size="lg" className="w-auto max-md:hidden" />
          <Button
            href={siteConfig.links.github}
            prefix={<GitHubIcon />}
            variant="outline"
            size="lg"
            className="md:hidden"
          >
            GitHub
          </Button>
        </div>
      </div>
      <div className="hidden px-10 lg:block xl:px-20">
        <Illustration />
      </div>
    </section>
  );
};

const Illustration = () => {
  return (
    <div className="min-h-[450px] space-y-4 animate-in fade-in slide-in-from-bottom-3">
     
    </div>
  );
};
