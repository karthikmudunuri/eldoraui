"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const pricing = {
  title: "Pricing that scales with you",
  description:
    "Whichever plan you pick, it's free until you love your docs. That's our promise.",
  pricingItems: [
    {
      name: "Free",
      href: "#",
      price: "$0",
      period: "month",
      yearlyPrice: "$0",
      features: [
        "Custom domain",
        "SEO-optimizations",
        "Auto-generated API docs",
        "Built-in components library",
      ],
      description: "Perfect for individual users",
      buttonText: "Start Free",
      buttonColor: "bg-accent text-primary",
      isPopular: false,
    },
    {
      name: "Startup",
      href: "#",
      price: "$12",
      period: "month",
      yearlyPrice: "$120",
      features: [
        "Custom domain",
        "SEO-optimizations",
        "Auto-generated API docs",
        "Built-in components library",
        "E-commerce integration",
        "User authentication system",
        "Multi-language support",
        "Real-time collaboration tools",
      ],
      description: "Ideal for professionals and small teams",
      buttonText: "Upgrade to Pro",
      buttonColor: "bg-cyan-500 text-white",
      isPopular: true,
    },
    {
      name: "Enterprise",
      href: "#",
      price: "$24",
      period: "month",
      yearlyPrice: "$240",
      features: [
        "Custom domain",
        "SEO-optimizations",
        "Auto-generated API docs",
        "Built-in components librarys",
        "Real-time collaboration tools",
      ],
      description: "Best for large teams and enterprise-level organizations",
      buttonText: "Contact Sales",
      buttonColor: "bg-primary text-primary-foreground",
      isPopular: false,
    },
  ],
}

interface TabsProps {
  activeTab: "yearly" | "monthly"
  setActiveTab: (tab: "yearly" | "monthly") => void
  className?: string
}

function PricingTabs({ activeTab, setActiveTab, className }: TabsProps) {
  return (
    <div
      className={cn(
        "bg-muted relative flex h-9 w-fit cursor-pointer flex-row items-center rounded-full border p-0.5 backdrop-blur-sm",
        className
      )}
    >
      {["monthly", "yearly"].map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab as "yearly" | "monthly")}
          className={cn(
            "relative z-[1] flex h-8 cursor-pointer items-center justify-center px-2",
            {
              "z-0": activeTab === tab,
            }
          )}
        >
          {activeTab === tab && (
            <motion.div
              layoutId="active-tab"
              className="border-border absolute inset-0 rounded-full border bg-white shadow-md dark:bg-[#3F3F46]"
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
                velocity: 2,
              }}
            />
          )}
          <span
            className={cn(
              "relative block shrink-0 text-sm font-medium duration-200",
              activeTab === tab ? "text-primary" : "text-muted-foreground"
            )}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {tab === "yearly" && (
              <span className="ml-2 w-[calc(100%+1rem)] rounded-full bg-cyan-500/15 px-1 py-0.5 text-xs font-semibold text-cyan-500">
                -20%
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  )
}

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  )

  // Update price animation
  const PriceDisplay = ({
    tier,
  }: {
    tier: (typeof pricing.pricingItems)[0]
  }) => {
    const price = billingCycle === "yearly" ? tier.yearlyPrice : tier.price

    return (
      <motion.span
        key={price}
        className="text-4xl font-semibold"
        initial={{
          opacity: 0,
          x: billingCycle === "yearly" ? -10 : 10,
          filter: "blur(5px)",
        }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      >
        {price}
      </motion.span>
    )
  }

  return (
    <section
      id="pricing"
      className="relative flex w-full flex-col items-center justify-center gap-10 pb-10"
    >
      <div className="h-full w-full border-b p-10 md:p-14">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
          <h2 className="text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
            {pricing.title}
          </h2>
          <p className="text-muted-foreground text-center font-medium text-balance">
            {pricing.description}
          </p>
        </div>
      </div>
      <div className="relative h-full w-full">
        <div className="absolute -top-14 left-1/2 -translate-x-1/2">
          <PricingTabs
            activeTab={billingCycle}
            setActiveTab={setBillingCycle}
            className="mx-auto"
          />
        </div>

        <div className="mx-auto grid w-full max-w-6xl gap-4 px-6 min-[650px]:grid-cols-2 min-[900px]:grid-cols-3">
          {pricing.pricingItems.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative grid h-fit grid-rows-[180px_auto_1fr] rounded-xl min-[650px]:h-full min-[900px]:h-fit",
                tier.isPopular
                  ? "bg-accent md:shadow-[0px_61px_24px_-10px_rgba(0,0,0,0.01),0px_34px_20px_-8px_rgba(0,0,0,0.05),0px_15px_15px_-6px_rgba(0,0,0,0.09),0px_4px_8px_-2px_rgba(0,0,0,0.10),0px_0px_0px_1px_rgba(0,0,0,0.08)]"
                  : "border-border border bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02]"
              )}
            >
              <div className="flex flex-col gap-4 p-4">
                <p className="text-sm">
                  {tier.name}
                  {tier.isPopular && (
                    <span className="ml-2 inline-flex h-6 w-fit items-center justify-center rounded-full bg-gradient-to-b from-cyan-500/50 from-[1.92%] to-cyan-500 to-[100%] px-2 text-sm text-white shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                      Popular
                    </span>
                  )}
                </p>
                <div className="mt-2 flex items-baseline">
                  <PriceDisplay tier={tier} />
                  <span className="ml-2">
                    /{billingCycle === "yearly" ? "year" : "month"}
                  </span>
                </div>
                <p className="mt-2 text-sm">{tier.description}</p>
              </div>

              <div className="flex flex-col gap-2 p-4">
                <button
                  className={`flex h-10 w-full cursor-pointer items-center justify-center rounded-full px-4 text-sm font-normal tracking-wide transition-all ease-out active:scale-95 ${
                    tier.isPopular
                      ? `${tier.buttonColor} shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)]`
                      : `${tier.buttonColor} shadow-[0px_1px_2px_0px_rgba(255,255,255,0.16)_inset,0px_3px_3px_-1.5px_rgba(16,24,40,0.24),0px_1px_1px_-0.5px_rgba(16,24,40,0.20)]`
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
              <hr className="border-border dark:border-white/20" />
              <div className="p-4">
                {tier.name !== "Basic" && (
                  <p className="mb-4 text-sm">
                    Everything in {tier.name === "Pro" ? "Basic" : "Pro"} +
                  </p>
                )}
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <div
                        className={cn(
                          "border-primary/20 flex size-5 items-center justify-center rounded-full border",
                          tier.isPopular &&
                            "bg-muted-foreground/40 border-border"
                        )}
                      >
                        <div className="flex size-3 items-center justify-center">
                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="block dark:hidden"
                          >
                            <path
                              d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                              stroke="#101828"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <svg
                            width="8"
                            height="7"
                            viewBox="0 0 8 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="hidden dark:block"
                          >
                            <path
                              d="M1.5 3.48828L3.375 5.36328L6.5 0.988281"
                              stroke="#FAFAFA"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
