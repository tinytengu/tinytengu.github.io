import { FC } from "react";
import { AnimationProps, motion } from "framer-motion";

import { Link, Title } from "@/components";
import {
  sectionAnimation,
  projectsGridAnimation,
  projectsItemAnimation,
} from "@/animations";

const captionAnimation: AnimationProps = {
  variants: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
  },
  initial: "initial",
  animate: "animate",
  transition: {
    delay: 2.5,
    duration: 1,
    type: "spring",
  },
};

interface Props {
  title: string;
}

const Projects: FC<Props> = (props) => {
  const colors = [
    "bg-green-500",
    "bg-orange-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-blue-500",
    "bg-emerald-500",
  ];

  return (
    <motion.section
      className="absolute w-full h-full flex flex-col gap-8 justify-center items-center"
      {...sectionAnimation()}
    >
      <Title>{props.title}</Title>
      <motion.p {...captionAnimation}>
        See more on my{" "}
        <Link
          href="https://github.com/tinytengu"
          target="_blank"
          className="hover:bg-white hover:text-black font-medium transition-all duration-500"
        >
          GitHub
        </Link>
      </motion.p>
      <motion.div
        className="w-full grid grid-cols-2 md:grid-cols-6 gap-4 justify-items-center h-96 md:h-64 px-4 md:px-16"
        {...projectsGridAnimation}
      >
        {colors.map((color, idx) => (
          <motion.div className={color} {...projectsItemAnimation}></motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
