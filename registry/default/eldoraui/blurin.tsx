"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface BlurInProps {
  text?: string;
  className?: string;
}

export const BlurIn: React.FC<BlurInProps> = ({
  text = "",
  className = "",
}) => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className={clsx(
        "text-center font-display font-bold drop-shadow-sm",
        "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]",
        className,
      )}
    >
      {text}
    </motion.h1>
  );
};
