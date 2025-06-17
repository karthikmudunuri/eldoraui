"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SeparateAwayProps {
  textLeft?: string;
  textRight?: string;
  className?: string;
}

export const SeparateAway: React.FC<SeparateAwayProps> = ({
  textLeft = "",
  textRight = "",
  className = "",
}) => {
  const separate = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 1.5 },
    }),
  };

  return (
    <div className={className}>
      <motion.h1
        custom={-1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className={clsx(
          "text-center font-display font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        )}
      >
        {textLeft}
      </motion.h1>
      <motion.h1
        custom={1}
        variants={separate}
        initial="hidden"
        animate="visible"
        className={clsx(
          "text-center font-display font-bold drop-shadow-sm",
          "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
          "tracking-[-0.02em]",
          "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        )}
      >
        {textRight}
      </motion.h1>
    </div>
  );
};
