"use client";
import { motion } from "framer-motion";

export const AnimatedTextUnderlign = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.5, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay: 0.5, duration: 1 }
      }
    }
  };
  return (
    <div>
      <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
        {' '}
        <span className="relative whitespace-nowrap text-teal-800 font-alliance">
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-1/3 fill-teal-500"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="100%"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203"
              variants={draw}
              strokeWidth="6"
              fill="none"
              stroke="#009080"
            />
          </motion.svg>
          <span className="relative text-teal-800 font-alliance">Animated</span>
        </span>
        {' '} Drawing Effect
      </h1>
    </div>
  );
};
