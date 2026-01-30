"use client"

import { forwardRef, useEffect, useState } from "react"
import NextLink, { type LinkProps } from "next/link"
import * as Headless from "@headlessui/react"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"
import { Bars2Icon } from "@heroicons/react/24/solid"
import { motion } from "motion/react"

import { Logo } from "@/components/logo"

import { PlusGrid, PlusGridItem, PlusGridRow } from "./plus-grid"

const Link = forwardRef(function Link(
  props: LinkProps & React.ComponentPropsWithoutRef<"a">,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <NextLink ref={ref} {...props} />
    </Headless.DataInteractive>
  )
})

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/company", label: "Company" },
  { href: "/blog", label: "Blog" },
  { href: "/login", label: "Login" },
]

function DesktopNav() {
  return (
    <nav className="relative hidden lg:flex">
      {links.map(({ href, label }) => (
        <PlusGridItem key={href} className="relative flex">
          <Link
            href={href}
            className="text-foreground hover:bg-accent/50 flex items-center px-4 py-3 text-base font-medium transition-colors"
          >
            {label}
          </Link>
        </PlusGridItem>
      ))}
    </nav>
  )
}

function MobileNavButton() {
  return (
    <DisclosureButton
      className="text-foreground hover:bg-accent flex size-12 items-center justify-center self-center rounded-lg transition-colors lg:hidden"
      aria-label="Open main menu"
    >
      <Bars2Icon className="size-6" />
    </DisclosureButton>
  )
}

function MobileNav() {
  return (
    <DisclosurePanel className="lg:hidden">
      <div className="flex flex-col gap-6 py-4">
        {links.map(({ href, label }, linkIndex) => (
          <motion.div
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{
              duration: 0.15,
              ease: "easeInOut",
              rotateX: { duration: 0.3, delay: linkIndex * 0.1 },
            }}
            key={href}
          >
            <Link href={href} className="text-foreground text-base font-medium">
              {label}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="absolute left-1/2 w-screen -translate-x-1/2">
        <div className="border-border absolute inset-x-0 top-0 border-t" />
        <div className="border-border absolute inset-x-0 top-2 border-t" />
      </div>
    </DisclosurePanel>
  )
}

export function Navbar({ banner }: { banner?: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const headerContent = (
    <>
      <PlusGrid>
        <PlusGridRow className="relative flex justify-between">
          <div className="relative flex gap-6">
            <PlusGridItem className="py-3">
              <Link href="/" title="Home">
                <Logo className="h-9" />
              </Link>
            </PlusGridItem>
            {banner && (
              <div className="relative hidden items-center py-3 lg:flex">
                {banner}
              </div>
            )}
          </div>
          <DesktopNav />
          <MobileNavButton />
        </PlusGridRow>
      </PlusGrid>
      <MobileNav />
    </>
  )

  if (!mounted) {
    return (
      <header className="pt-12 sm:pt-16">
        <PlusGrid>
          <PlusGridRow className="relative flex justify-between">
            <div className="relative flex gap-6">
              <PlusGridItem className="py-3">
                <Link href="/" title="Home">
                  <Logo className="h-9" />
                </Link>
              </PlusGridItem>
              {banner && (
                <div className="relative hidden items-center py-3 lg:flex">
                  {banner}
                </div>
              )}
            </div>
            <DesktopNav />
            <div
              className="text-foreground flex size-12 items-center justify-center self-center rounded-lg lg:hidden"
              aria-hidden
            >
              <Bars2Icon className="size-6" />
            </div>
          </PlusGridRow>
        </PlusGrid>
      </header>
    )
  }

  return (
    <Disclosure as="header" className="pt-12 sm:pt-16">
      {headerContent}
    </Disclosure>
  )
}
