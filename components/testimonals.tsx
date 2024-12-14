'use client'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'
import { Marquee } from '@/registry/default/eldoraui/marquee'
import Section from '@/components/section'
import { ClientTweetCard } from '@/registry/default/eldoraui/clienttweetcard'

const tweets = [
  "1814496850134946210",
  "1860031241325584796",
  "1858816175121088962",
  "1858433973489430841",
  "1851222039413330414",
  "1838408787381883347",
  "1822728938507956633",
  "1815138485440803034",
  "1836064706185892062",
  "1841116574649913593",
  "1845156485887672551",
  "1823274177639440741"
  
]

export default function Testimonials() {
  return (
    <Section
      title="Testimonials"
      subtitle="What people says"
      className="max-w-8xl"
    >
      <div className="relative mt-6 max-h-screen overflow-hidden">
        <div className="gap-4 md:columns-2 xl:columns-3 2xl:columns-4">
          {Array(Math.ceil(tweets.length / 3))
            .fill(0)
            .map((_, i) => (
              <Marquee
                vertical
                key={i}
                className={cn({
                  '[--duration:60s]': i === 1,
                  '[--duration:30s]': i === 2,
                  '[--duration:70s]': i === 3,
                })}
              >
                {tweets.slice(i * 3, (i + 1) * 3).map((tweet, idx) => (
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
                    {/* <TestimonialCard {...card} /> */}
                    <ClientTweetCard id={tweet} />
                  </motion.div>
                ))}
              </Marquee>
            ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-background from-20%"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-background from-20%"></div>
      </div>
    </Section>
  )
}