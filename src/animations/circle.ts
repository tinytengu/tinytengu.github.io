import { AnimationProps } from "framer-motion";

interface Props {
  size: number;
  opacity: number;
  delay?: number;
  duration?: number;
}

export default ({
  size,
  opacity,
  delay = 0,
  duration = 1,
}: Props): AnimationProps => {
  return {
    variants: {
      initial: {
        width: 0,
        height: 0,
        opacity: 0,
      },
      animate: {
        width: size,
        height: size,
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
