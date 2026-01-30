import Image from "next/image"

const testimonials: TestimonialCardProps[] = [
  {
    quote:
      "The real-time code suggestions from Pointer feel like having a senior engineer reviewing every line of code as you write. The accuracy of its recommendations has improved our overall code quality, reduced review time.",
    name: "Annette Black",
    company: "Sony",
    avatar: "https://avatar.vercel.sh/annette",
    type: "large-cyan",
  },
  {
    quote:
      "Integrating Pointer into our stack was smooth, and the MCP server connections saved us days of configuration work",
    name: "Dianne Russell",
    company: "McDonald's",
    avatar: "https://avatar.vercel.sh/russell",
    type: "small-dark",
  },
  {
    quote:
      "Pointer’s multi-agent coding feature has been a game changer. We’re fixing complex bugs in hours instead of spending entire sprints on them.",
    name: "Cameron Williamson",
    company: "IBM",
    avatar: "https://avatar.vercel.sh/cameron",
    type: "small-dark",
  },
  {
    quote:
      "We no longer juggle multiple tools. Pointer brought all our integrations together in one place, which simplified our entire workflow.",
    name: "Robert Fox",
    company: "MasterCard",
    avatar: "https://avatar.vercel.sh/robert",
    type: "small-dark",
  },
  {
    quote:
      "We started with the free plan just to test it out, but within a week we upgraded to Pro. Now, we can’t imagine coding without it",
    name: "Darlene Robertson",
    company: "Ferrari",
    avatar: "https://avatar.vercel.sh/darlene",
    type: "small-dark",
  },
  {
    quote:
      "Collaborative coding feels effortless now. With Pointer’s real-time previews, pair programming has become faster and more productive.",
    name: "Cody Fisher",
    company: "Apple",
    avatar: "https://avatar.vercel.sh/cody",
    type: "small-dark",
  },
  {
    quote:
      "Deploying on Vercel with Pointer was not just simple, it felt seamless. We went from coding to seeing our changes live in minutes without worrying about build pipelines or configuration issues.",
    name: "Albert Flores",
    company: "Louis Vuitton",
    avatar: "https://avatar.vercel.sh/louis",
    type: "large-light",
  },
]

interface TestimonialCardProps {
  quote: string
  name: string
  company: string
  avatar: string
  type: "large-cyan" | "large-light" | "small-dark"
}

const TestimonialCard = ({
  quote,
  name,
  company,
  avatar,
  type,
}: TestimonialCardProps) => {
  const isLargeCard = type.startsWith("large")
  const avatarSize = isLargeCard ? 48 : 36
  const avatarBorderRadius = isLargeCard
    ? "rounded-[41px]"
    : "rounded-[30.75px]"
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-cyan") {
    cardClasses += " bg-cyan-300"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8"
    nameClasses += " text-primary-foreground text-base font-normal leading-6"
    companyClasses +=
      " text-primary-foreground/60 text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/large-card-background.svg)",
          zIndex: 0,
        }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    nameClasses += " text-foreground text-base font-normal leading-6"
    companyClasses += " text-muted-foreground text-base font-normal leading-6"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            "url(https://pub-b3533f2e1c954842824758490b95c9d5.r2.dev/large-card-background.svg)",
          zIndex: 0,
        }}
      />
    )
  } else {
    cardClasses +=
      " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    nameClasses += " text-foreground text-sm font-normal leading-[22px]"
    companyClasses +=
      " text-muted-foreground text-sm font-normal leading-[22px]"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>
        {quote}
      </div>
      <div className="relative z-10 flex items-center justify-start gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${avatarSize / 4} ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col items-start justify-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="flex w-full flex-col justify-start overflow-hidden px-5 py-6 md:py-8 lg:py-14">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-start justify-center gap-4 pt-0.5 pb-4 md:flex-row md:gap-4 md:pb-6 lg:gap-6 lg:pb-10">
        <div className="flex flex-1 flex-col items-start justify-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex flex-1 flex-col items-start justify-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
