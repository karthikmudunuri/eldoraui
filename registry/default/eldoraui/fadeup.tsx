"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface FadeUpStaggerProps {
  text?: string;
  className?: string;
}

export const FadeUpStagger: React.FC<FadeUpStaggerProps> = ({
  text = "",
  className = "",
}) => {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h1
        className={clsx(
          "text-center font-display font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
          className,
        )}
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        {text}
      </motion.h1>
    </motion.div>
  );
};
