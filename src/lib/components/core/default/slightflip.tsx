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
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
            style={{ transformOrigin: "50% 50%" }}
          >
            {char}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}