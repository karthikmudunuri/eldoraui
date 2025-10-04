"use client"

import { motion } from "motion/react"

function Marker({
  src,
  top,
  offset,
  delay,
}: {
  src: string
  top: number
  offset: number
  delay: number
}) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: "easeOut" }}
      style={{ "--offset": `${offset}px`, top } as React.CSSProperties}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white"
        />
      </svg>
      <img
        alt=""
        src={src}
        className="absolute top-[4px] left-[7px] size-6 rounded-full"
      />
    </motion.div>
  )
}

export function Map() {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      aria-hidden="true"
      className="relative size-full"
    >
      <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/eldoraui/image/upload/v1734021299/map_pcqdwb.png)] mask-[linear-gradient(to_bottom,black_50%,transparent)] bg-size-[530px_430px] bg-position-[center_-75px] bg-no-repeat dark:mask-[linear-gradient(to_bottom,black_50%,transparent)]" />
      <div className="absolute inset-0">
        <Marker
          src="https://avatar.vercel.sh/karthik"
          top={96}
          offset={-128}
          delay={0.15}
        />
        <Marker
          src="https://avatar.vercel.sh/varma"
          top={160}
          offset={-16}
          delay={0.4}
        />
        <Marker
          src="https://avatar.vercel.sh/pawan"
          top={144}
          offset={96}
          delay={0.3}
        />
        <Marker
          src="https://avatar.vercel.sh/mark"
          top={192}
          offset={64}
          delay={0.6}
        />
        <Marker
          src="https://avatar.vercel.sh/jeff"
          top={224}
          offset={-32}
          delay={0.8}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[50%] dark:from-neutral-950 dark:to-[70%]" />
    </motion.div>
  )
}
