import { Marquee } from "@/registry/eldoraui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "Google",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/Google_fav2wl.svg",
  },
  {
    name: "GitHub",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066341/GitHub_honend.svg",
  },
  {
    name: "Amazon",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066178/Amazon_wckqtv.svg",
  },
  {
    name: "Netflix",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066179/Netflix_skrjyn.svg",
  },
  {
    name: "YouTube",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066180/YouTube_wknngk.svg",
  },
  {
    name: "Instagram",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066178/Instagram_mo5ttl.svg",
  },
  {
    name: "Spotify",
    url: "https://res.cloudinary.com/eldoraui/image/upload/v1734066180/Spotify_ocrrnm.svg",
  },
];

export default function Logos() {
  return (
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
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </section>
  );
}
