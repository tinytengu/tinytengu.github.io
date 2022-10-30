import { FC, HTMLAttributes } from "react";
import { motion } from "framer-motion";

import { titleAnimation } from "@/animations";

interface Props extends HTMLAttributes<HTMLHeadingElement> {}

const Title: FC<Props> = ({ children, ...props }) => {
  return (
    <h1 className="relative" {...props}>
      <motion.span
        className="font-bold text-5xl text-white"
        {...titleAnimation({
          start: 0,
          end: 0,
          opacity: 1,
          duration: 2,
        })}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute font-bold text-5xl text-transparent left-0 -z-10"
        style={{
          WebkitTextStroke: "1px white",
        }}
        {...titleAnimation({ start: 16 * 4, end: 4, opacity: 0.5, delay: 0.5 })}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute font-bold text-5xl text-transparent left-0 -z-20"
        style={{
          WebkitTextStroke: "1px white",
        }}
        {...titleAnimation({ start: 16 * 8, end: 8, opacity: 0.2, delay: 0.5 })}
      >
        {children}
      </motion.span>
    </h1>
  );
};

export default Title;
