import { AnimationProps } from "framer-motion";

export default {
  variants: {
    initial: {
      opacity: 0,
      top: "-100%",
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      top: "100%",
      transition: {
        duration: 0.5,
      },
    },
  },
  initial: "initial",
  animate: "animate",
  exit: "exit",
} as AnimationProps;
