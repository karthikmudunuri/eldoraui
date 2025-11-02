import { LogoTimeline } from "@/registry/eldoraui/logo-timeline"
import type { LogoItem } from "@/registry/eldoraui/logo-timeline"

const logos: LogoItem[] = [
  // Row 1 - Communication & Social (2 logos, 50s duration, spaced 25s apart)
  {
    label: "Discord",
    icon: "discord",
    animationDelay: -50,
    animationDuration: 50,
    row: 1,
  },
  {
    label: "Twitter",
    icon: "twitter",
    animationDelay: -25,
    animationDuration: 50,
    row: 1,
  },
  // Row 2 - Development Tools (2 logos, 45s duration, spaced 22.5s apart)
  {
    label: "GitHub",
    icon: "gitHub",
    animationDelay: -45,
    animationDuration: 45,
    row: 2,
  },
  {
    label: "React",
    icon: "react",
    animationDelay: -22.5,
    animationDuration: 45,
    row: 2,
  },
  // Row 3 - Development Tools Continued (3 logos, 60s duration, spaced 20s apart)
  {
    label: "TypeScript",
    icon: "ts",
    animationDelay: -60,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "Tailwind",
    icon: "tailwind",
    animationDelay: -40,
    animationDuration: 60,
    row: 3,
  },
  {
    label: "Radix UI",
    icon: "radix",
    animationDelay: -20,
    animationDuration: 60,
    row: 3,
  },
  // Row 4 - Productivity & Cloud (2 logos, 55s duration, spaced 27.5s apart)
  {
    label: "Google Drive",
    icon: "googleDrive",
    animationDelay: -55,
    animationDuration: 55,
    row: 4,
  },
  {
    label: "Notion",
    icon: "notion",
    animationDelay: -27.5,
    animationDuration: 55,
    row: 4,
  },
  // Row 5 - Messaging (2 logos, 50s duration, spaced 25s apart)
  {
    label: "WhatsApp",
    icon: "whatsapp",
    animationDelay: -50,
    animationDuration: 50,
    row: 5,
  },
  {
    label: "Messenger",
    icon: "messenger",
    animationDelay: -25,
    animationDuration: 50,
    row: 5,
  },
  // Row 6 - AI & Automation (3 logos, 65s duration, spaced ~21.5s apart)
  {
    label: "OpenAI",
    icon: "openai",
    animationDelay: -65,
    animationDuration: 65,
    row: 6,
  },
  {
    label: "Zapier",
    icon: "zapier",
    animationDelay: -43,
    animationDuration: 65,
    row: 6,
  },
  {
    label: "v0",
    icon: "v0",
    animationDelay: -21.5,
    animationDuration: 65,
    row: 6,
  },
  // Row 7 - Payment & Services (2 logos, 50s duration, spaced 25s apart)
  {
    label: "PayPal",
    icon: "paypal",
    animationDelay: -50,
    animationDuration: 50,
    row: 7,
  },
  {
    label: "Apple Pay",
    icon: "applePay",
    animationDelay: -25,
    animationDuration: 50,
    row: 7,
  },
]

export default function LogoTimelineDemo() {
  return (
    <div className="w-full overflow-hidden">
      <LogoTimeline
        items={logos}
        title="Built with the best tools"
        height="h-[400px] sm:h-[500px]"
        iconSize={18}
        showRowSeparator={true}
      />
    </div>
  )
}
