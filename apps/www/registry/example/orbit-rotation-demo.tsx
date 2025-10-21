"use client"

import {
  FaApple,
  FaAws,
  FaDocker,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaTwitter,
} from "react-icons/fa"
import {
  SiFacebook,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiVercel,
} from "react-icons/si"

import { OGLogo } from "@/components/og-logo"
import { OrbitRotation } from "@/registry/eldoraui/orbit-rotation"

export function OrbitRotationDemo() {
  const techIcons = [
    { Icon: FaReact, name: "React" },
    { Icon: FaAws, name: "AWS" },
    { Icon: FaDocker, name: "Docker" },
    { Icon: FaNodeJs, name: "Node.js" },
    { Icon: SiNextdotjs, name: "Next.js" },
    { Icon: SiVercel, name: "Vercel" },
    { Icon: SiRedux, name: "Redux" },
    { Icon: SiTypescript, name: "TypeScript" },
    { Icon: FaGithub, name: "GitHub" },
    { Icon: FaTwitter, name: "Twitter" },
    { Icon: FaLinkedin, name: "LinkedIn" },
    { Icon: FaInstagram, name: "Instagram" },
    { Icon: FaGoogle, name: "Google" },
    { Icon: FaApple, name: "Apple" },
    { Icon: SiFacebook, name: "Facebook" },
  ]

  const centerIcon = {
    Icon: ({ className }: { className?: string }) => (
      <div className={className}>
        <OGLogo width={32} height={32} />
      </div>
    ),
    name: "EldoraUI",
  }

  return (
    <div className="bg-background relative h-[500px] w-full overflow-hidden rounded-lg border p-8">
      <div className="flex h-full items-center justify-center">
        <OrbitRotation
          icons={techIcons}
          orbitCount={3}
          orbitGap={6}
          centerIcon={centerIcon}
          size="md"
        />
      </div>
    </div>
  )
}
