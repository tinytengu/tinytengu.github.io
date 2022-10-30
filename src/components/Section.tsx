import { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

import { sectionAnimation } from "@/animations";

interface Props extends HTMLMotionProps<"div"> {}

const Section: FC<Props> = (props) => {
  const { className, ...otherProps } = props;
  return (
    <motion.section
      className={`absolute w-full h-full flex flex-col gap-8 justify-center items-center ${className}`}
      {...sectionAnimation}
      {...otherProps}
    />
  );
};

export default Section;
