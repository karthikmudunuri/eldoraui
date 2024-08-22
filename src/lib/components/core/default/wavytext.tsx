import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

export function WavyText() {
  const word = "Wavy Text";
  const variants1 = {
    hidden: { y: 10 },
    visible: { y: -10 },
  };
  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.h1
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ yoyo: Infinity, duration: 0.5, delay: i * 0.2 }}
            className={clsx(
            "text-center font-display font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
          )}
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}