import Image from "next/image"

import { Marquee } from "@/registry/eldoraui/marquee"

const companies = [
  {
    name: "Google",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Google.svg",
  },
  {
    name: "GitHub",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/GitHub.svg",
  },
  {
    name: "Amazon",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Amazon.svg",
  },
  {
    name: "Netflix",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Netflix.svg",
  },
  {
    name: "YouTube",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/YouTube.svg",
  },
  {
    name: "Instagram",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Instagram.svg",
  },
  {
    name: "Spotify",
    url: "https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/Spotify.svg",
  },
]

export default function LogoCloud03Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <section id="logos">
          <div className="container mx-auto px-4 py-12 md:px-8">
            <h3 className="text-center text-sm font-semibold text-gray-500">
              TRUSTED BY LEADING TEAMS
            </h3>
            <div className="relative mt-6">
              <Marquee className="max-w-full [--duration:40s]">
                {companies.map((company, idx) => (
                  <Image
                    key={idx}
                    width={112}
                    height={40}
                    src={company.url}
                    className="h-10 w-28 opacity-30 grayscale dark:brightness-0 dark:invert"
                    alt={company.name}
                  />
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
