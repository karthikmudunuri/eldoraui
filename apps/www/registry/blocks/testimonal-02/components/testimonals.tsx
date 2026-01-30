"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/blocks/testimonal-02/components/marquee"

export function Highlight({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        "bg-cyan-200 p-1 py-0.5 font-bold text-cyan-400 dark:bg-cyan-950 dark:text-cyan-300",
        className
      )}
    >
      {children}
    </span>
  )
}

export interface TestimonialCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  role: string
  img?: string
  description: React.ReactNode
  className?: string
}

export function TestimonialCard({
  description,
  name,
  img,
  role,
  className,
  ...props // Capture the rest of the props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "mb-4 flex w-full cursor-pointer break-inside-avoid flex-col items-center justify-between gap-6 rounded-xl p-4",
        // light styles
        "border border-neutral-200 bg-white",
        // dark styles
        "dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]",
        className,
        className
      )}
      {...props}
    >
      <div className="text-sm font-normal text-neutral-700 select-none dark:text-neutral-400">
        {description}
        <div className="flex flex-row py-1">
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
          <Star className="size-4 fill-yellow-500 text-yellow-500" />
        </div>
      </div>

      <div className="flex w-full items-center justify-start gap-5 select-none">
        <Image
          width={40}
          height={40}
          src={img || ""}
          alt={name}
          className="size-10 rounded-full"
        />

        <div>
          <p className="font-medium text-neutral-500">{name}</p>
          <p className="text-xs font-normal text-neutral-400">{role}</p>
        </div>
      </div>
    </div>
  )
}
const testimonials = [
  {
    name: "Alex Rivera",
    role: "UI/UX Lead at InnovateTech",
    img: "https://avatar.vercel.sh/alex",
    description: (
      <p>
        Using EldoraUI has revolutionized our design process.
        <Highlight>
          Its reusable, animated components make it easy to deliver cutting-edge
          designs.
        </Highlight>{" "}
        A must-have for any design team.
      </p>
    ),
  },
  {
    name: "Samantha Lee",
    role: "Frontend Engineer at NextGen Solutions",
    img: "https://avatar.vercel.sh/samantha",
    description: (
      <p>
        EldoraUI&apos;s templates have drastically improved our development
        speed.
        <Highlight>
          We&apos;ve reduced project timelines by 70%, delivering high-quality
          UIs effortlessly.
        </Highlight>{" "}
        Highly recommend it to fellow developers.
      </p>
    ),
  },
  {
    name: "Raj Patel",
    role: "Founder at Startup Studio",
    img: "https://avatar.vercel.sh/raj",
    description: (
      <p>
        As a startup founder, I need tools that help us grow fast without
        sacrificing quality. EldoraUI&apos;s stunning designs and simple
        integration have made it an essential part of our workflow.
        <Highlight>Our clients love our modern interfaces.</Highlight>
      </p>
    ),
  },
  {
    name: "Emily Chen",
    role: "Product Designer at Global Systems",
    img: "https://avatar.vercel.sh/emily",
    description: (
      <p>
        EldoraUI&apos;s prebuilt components have made it so easy to create
        intuitive and compliant designs.
        <Highlight>
          It&apos;s perfect for tackling complex workflows with style.
        </Highlight>{" "}
        A must-have for any product designer.
      </p>
    ),
  },
  {
    name: "Michael Brown",
    role: "Creative Director at FinTech Innovations",
    img: "https://avatar.vercel.sh/michael",
    description: (
      <p>
        EldoraUI&apos;s animations and design elements have elevated our fintech
        app&apos;s user experience.
        <Highlight>
          The feedback on our new design is phenomenal.
        </Highlight>{" "}
        It&apos;s a game-changer for user-centric applications.
      </p>
    ),
  },
  {
    name: "Linda Wu",
    role: "Web Developer at LogiChain Solutions",
    img: "https://avatar.vercel.sh/linda",
    description: (
      <p>
        EldoraUI&apos;s component library has simplified web development for our
        logistics dashboard.
        <Highlight>
          Building custom layouts has never been this efficient.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Carlos Gomez",
    role: "Digital Marketing Specialist at EcoTech",
    img: "https://avatar.vercel.sh/carlos",
    description: (
      <p>
        EldoraUI&apos;s responsive designs have helped us create marketing sites
        that look amazing on every device.
        <Highlight>
          It&apos;s revolutionized how we approach branding online.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Aisha Khan",
    role: "E-commerce Product Manager at FashionForward",
    img: "https://avatar.vercel.sh/aisha",
    description: (
      <p>
        EldoraUI&apos;s beautifully crafted components have completely
        transformed our fashion storefront.
        <Highlight>
          Customers love the dynamic shopping experience.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Tom Chen",
    role: "Healthcare App Designer at HealthTech Solutions",
    img: "https://avatar.vercel.sh/tom",
    description: (
      <p>
        EldoraUI has made it easy to create user-friendly, accessible interfaces
        for our healthcare apps.
        <Highlight>
          It&apos;s a crucial part of our design system.
        </Highlight>{" "}
      </p>
    ),
  },
  {
    name: "Sofia Patel",
    role: "EdTech Founder at EduSafe Innovations",
    img: "https://avatar.vercel.sh/sofia",
    description: (
      <p>
        EldoraUI&apos;s education-focused templates have doubled our
        platform&apos;s usability.
        <Highlight>
          It&apos;s tailor-made for addressing student and teacher needs.
        </Highlight>{" "}
      </p>
    ),
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-10">
      <h2 className="text-foreground mb-4 text-center text-5xl leading-[1.2] font-bold tracking-tighter">
        What People Are Saying
      </h2>
      <h3 className="text-foreground/80 mx-auto mb-8 max-w-lg text-center text-lg font-medium tracking-tight text-balance">
        Don&apos;t just take our word for it. Here&apos;s what people are saying
        about <span className="from-fg-onAccent text-cyan-500">Eldora UI</span>
      </h3>
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(testimonials.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  "[--duration:60s]": i === 1,
                  "[--duration:30s]": i === 2,
                  "[--duration:70s]": i === 3,
                })}
              >
                {testimonials.slice(i * 3, (i + 1) * 3).map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: Math.random() * 0.8,
                      duration: 1.2,
                    }}
                  >
                    <TestimonialCard {...card} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20%"></div>
        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20%"></div>
      </div>
    </section>
  )
}
