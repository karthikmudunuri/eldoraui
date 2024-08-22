import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

export function SlightFlip() {
  const word = "Slight Flip Text";
  const variants1 = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: { rotateX: 0, opacity: 1 },
  };
  return (
    <div className="flex space-x-2 justify-center">
      <AnimatePresence>
        {word.split("").map((char, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants1}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={clsx(
            "text-center font-display font-bold drop-shadow-sm",
            "text-4xl md:text-5xl lg:text-6xl xl:text-7xl",
            "tracking-[-0.02em]",
            "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
          )}
            style={{ transformOrigin: "50% 50%" }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}