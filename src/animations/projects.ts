import { AnimationProps } from "framer-motion";

interface Props {
  size?: number | string;
  delay?: number;
  duration?: number;
}

export const projectsGridAnimation: AnimationProps = {
  variants: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  },
  initial: "initial",
  animate: "animate",
};

export const projectsItemAnimation: AnimationProps = {
  variants: {
    initial: {
      width: 0,
      height: 0,
      opacity: 0,
    },
    animate: {
      width: "100%",
      height: "100%",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  },
};
