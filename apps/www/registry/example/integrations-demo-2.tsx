"use client"

import { motion } from "motion/react"

import Integrations from "@/registry/eldoraui/integrations"

export function IntegrationsDemo2() {
  return (
    <div className="bg-background relative h-[600px] w-full overflow-hidden rounded-lg border">
      {/* Background Integrations Component */}
      <div className="absolute inset-0 opacity-30">
        <Integrations />
      </div>

      {/* Fading Overlay */}
      <div className="from-background/80 via-background/60 to-background/90 absolute inset-0 bg-gradient-to-b" />

      {/* Main Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-6"
        >
          <h2 className="text-foreground text-4xl font-bold tracking-tight">
            Seamless Integrations
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with your favorite tools and services. Our platform
            integrates with over 100+ applications to streamline your workflow
            and boost productivity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors"
            >
              Explore Integrations
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-border hover:bg-accent rounded-lg border px-6 py-3 font-medium transition-colors"
            >
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
