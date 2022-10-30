import { AnimationProps } from "framer-motion";

interface Props {
  start: number;
  end: number;
  delay?: number;
  duration?: number;
}

export default ({
  start,
  end,
  delay = 0,
  duration = 1,
}: Props): AnimationProps => {
  return {
    variants: {
      initial: {
        right: start,
        opacity: 0,
      },
      animate: {
        right: end,
        opacity: 1,
      },
    },
    initial: "initial",
    animate: "animate",
    transition: {
      delay: delay,
      duration: duration,
      type: "spring",
    },
  };
};
