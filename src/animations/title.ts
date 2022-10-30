import { AnimationProps } from "framer-motion";

interface Props {
  start: number;
  end: number;
  opacity: number;
  delay?: number;
  duration?: number;
}

export default ({
  start,
  end,
  opacity,
  delay = 0,
  duration = 1.5,
}: Props): AnimationProps => {
  return {
    variants: {
      initial: {
        top: start,
        opacity: 0,
      },
      animate: {
        top: end,
        opacity: opacity,
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
