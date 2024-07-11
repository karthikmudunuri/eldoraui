"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { GitHubIcon, TwitterIcon } from "@/components/icons";
import { Avatar } from "@/lib/components/core/default/avatar";
import { Badge } from "@/lib/components/core/default/badge";
import { Button } from "@/lib/components/core/default/button";
import { Dialog, DialogRoot } from "@/lib/components/core/default/dialog";
import { useScrolled } from "@/lib/hooks/use-scrolled";
import { cn } from "@/lib/utils/classes";
import { focusRing } from "@/lib/utils/styles";
import { siteConfig } from "@/config";
import { SearchDocs } from "./docs/search-docs";
import { ThemeToggle } from "./theme-toggle";

const config = siteConfig.header;

export const Header = () => {
  const { scrolled } = useScrolled({ initial: false });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-14 rounded-md max-md:border-b max-md:bg-bg md:h-16",
        scrolled && "pointer-events-none"
      )}
    >
      <div className="container flex h-full max-w-screen-2xl items-center">
        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between md:flex">
          <div className="w-[130px]">
            <Link
              href="/"
              className={cn(
                focusRing(),
                "flex items-center space-x-2 rounded opacity-100 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "pointer-events-none -translate-x-2 opacity-0"
              )}
              aria-hidden={scrolled}
            >
              <Avatar
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                loading="lazy"
                width={24}
                height={24}
                className="size-6 rounded-sm"
              />
              <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
                {siteConfig.global.name}
              </div>
              <Badge size="sm" variant="neutral" className="border">
                beta
              </Badge>
            </Link>
          </div>
          <div
            className={cn(
              "relative flex items-center gap-6 overflow-hidden rounded-md bg-transparent px-4 py-1 transition-[padding,background-color] duration-300 ease-out",
              scrolled && "pointer-events-auto bg-bg-muted pl-14 shadow-md"
            )}
          >
            <Link
              href="/"
              className={cn(
                focusRing(),
                "pointer-events-none absolute -translate-x-14 rounded opacity-0 transition-[opacity,transform] duration-300 ease-out",
                scrolled && "-translate-x-10 opacity-100"
              )}
              aria-hidden={!scrolled}
              tabIndex={scrolled ? undefined : -1}
            >
              <Image
                src={siteConfig.global.logo}
                alt={siteConfig.global.name}
                width={20}
                height={20}
              />
            </Link>
            <Nav items={config.nav.links} />
          </div>
          <div
            className={cn(
              "flex w-[130px] items-center justify-end space-x-2 opacity-100 transition-[opacity,transform] duration-300 ease-out",
              scrolled && "pointer-events-none translate-x-2 opacity-0"
            )}
            aria-hidden={scrolled}
            tabIndex={scrolled ? -1 : undefined}
          >
            <Button
              href={siteConfig.links.github}
              target="_blank"
              size="sm"
              shape="square"
              variant="quiet"
              aria-label="github"
            >
              <GitHubIcon />
            </Button>
            <Button
              href={siteConfig.links.twitter}
              target="_blank"
              size="sm"
              shape="square"
              variant="quiet"
              aria-label="twitter"
            >
              <TwitterIcon />
            </Button>
            <ThemeToggle />
          </div>
        </div>
        {/* Mobile nav */}
        <div className="flex w-full items-center gap-4 md:hidden">
          <Link
            href="/"
            className={cn(
              focusRing(),
              "flex w-[130px] items-center space-x-2 rounded transition-opacity hover:opacity-80"
            )}
          >
            <Image
              src={siteConfig.global.logo}
              alt={siteConfig.global.name}
              loading="lazy"
              width={24}
              height={24}
            />
            <div className="mt-1 font-josephin font-bold leading-normal tracking-tighter">
              {siteConfig.global.name}
            </div>
            <Badge variant="neutral" className="border">
              beta
            </Badge>
          </Link>
          <SearchDocs className="flex-1" size="sm">
            <span className="mr-4 flex-1 text-left">Search...</span>
          </SearchDocs>
          <DialogRoot>
            <Button variant="quiet" size="sm" shape="square" aria-label="Open menu">
              <MenuIcon />
            </Button>
            <Dialog type="drawer">
              {({ close }) => (
                <Nav
                  direction="col"
                  items={[{ label: "Home", href: "/" }, ...config.nav.links]}
                  onNavItemClick={close}
                />
              )}
            </Dialog>
          </DialogRoot>
        </div>
      </div>
    </header>
  );
};

interface NavItem {
  label: string;
  href?: string;
}

interface NavProps {
  items: NavItem[];
  direction?: "col" | "row";
  onNavItemClick?: () => void;
}

const Nav = (props: NavProps) => {
  const { items, direction = "row", onNavItemClick } = props;
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center gap-0 sm:gap-2", {
        "flex-col gap-2": direction === "col",
      })}
    >
      {items.map(
        (item, index) =>
          item.href && (
            <Link
              key={index}
              className={cn(
                focusRing(),
                "flex items-center justify-center gap-2 rounded px-4 py-1 text-sm font-medium text-fg/60 transition-colors hover:text-fg",
                pathname.startsWith(item.href) && item.href !== "/" && "bg-bg-inverse/10 text-fg",
                direction === "col" && "text-md w-full py-2"
              )}
              href={item.href}
              onClick={onNavItemClick}
            >
              {item.href === "/" && (
                <Image
                  src={siteConfig.global.logo}
                  alt={siteConfig.global.name}
                  loading="lazy"
                  width={24}
                  height={24}
                />
              )}
              <span>{item.label}</span>
            </Link>
          )
      )}
    </nav>
  );
};
