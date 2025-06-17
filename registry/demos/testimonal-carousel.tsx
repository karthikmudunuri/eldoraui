import Image from "next/image";
import { MdOutlineFormatQuote } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/eldoraui/carousel";
import Section from "@/registry/ui/section";

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

export default function Component() {
  return (
    <Section
      title="Testimonial Highlight"
      subtitle="What our customers are saying"
    >
      <Carousel>
        <div className="relative mx-auto max-w-2xl">
          <CarouselContent>
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-2 pb-5">
                  <div className="text-center">
                    <MdOutlineFormatQuote className="text-themeDarkGray mx-auto my-4 text-4xl" />
                    <h4 className="text-1xl mx-auto max-w-lg px-10 font-semibold">
                      {getTestimonialQuote(index)}
                    </h4>
                    <div className="mt-8">
                      <Image
                        width={0}
                        height={40}
                        src={companies[index % companies.length].url}
                        alt={`${companies[index % companies.length].name} Logo`}
                        className="mx-auto h-[40px] w-auto "
                      />
                    </div>
                    <div>
                      <h4 className="text-1xl my-2 font-semibold">
                        {getTestimonialName(index)}
                      </h4>
                    </div>
                    <div className="mb-3">
                      <span className="text-themeDarkGray text-sm">
                        {getTestimonialRole(index)}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-2/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 h-full  w-2/12 bg-gradient-to-l from-background"></div>
        </div>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </Section>
  );
}

function getTestimonialQuote(index: number): string {
  const quotes = [
    "nexus.ai has revolutionized our security testing process. We're now able to identify and address vulnerabilities faster than ever before.",
    "With nexus.ai, we've significantly improved our security posture. It's like having an AI-powered ethical hacker working around the clock.",
    "The AI-driven insights from nexus.ai have transformed how we approach cybersecurity. It's a game-changer for our platform's security.",
    "nexus.ai's automated penetration testing has saved us countless hours and dramatically enhanced our security measures.",
    "Implementing nexus.ai was seamless, and the results were immediate. We're now proactively addressing potential security issues before they become threats.",
    "The continuous monitoring capabilities of nexus.ai give us peace of mind. We're always one step ahead in protecting our users' data.",
    "nexus.ai's compliance mapping feature has streamlined our security audit processes. It's an essential tool for maintaining trust with our users.",
  ];
  return quotes[index % quotes.length];
}

function getTestimonialName(index: number): string {
  const names = [
    "Alex Rivera",
    "Samantha Lee",
    "Raj Patel",
    "Emily Chen",
    "Michael Brown",
    "Linda Wu",
    "Carlos Gomez",
  ];
  return names[index % names.length];
}

function getTestimonialRole(index: number): string {
  const roles = [
    "Head of Cybersecurity",
    "Chief Information Security Officer",
    "VP of Engineering",
    "Security Operations Manager",
    "Director of IT Security",
    "Lead Security Architect",
    "Chief Technology Officer",
  ];
  return roles[index % roles.length];
}
