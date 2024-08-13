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
            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          >
            {char}
          </motion.h1>
        ))}
      </AnimatePresence>
    </div>
  );
}