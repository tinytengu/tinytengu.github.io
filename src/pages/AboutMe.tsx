import { FC } from "react";
import { AnimationProps, motion } from "framer-motion";

import { Title } from "@/components";
import { sectionAnimation } from "@/animations";
import fireGif from "@/assets/fire.gif";

const aboutTextAnimation: AnimationProps = {
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
    delay: 0.8,
    duration: 1,
    type: "spring",
  },
};

interface Props {
  title: string;
}

const AboutMe: FC<Props> = (props) => {
  return (
    <motion.section
      className="absolute w-full h-full flex flex-col gap-8 justify-center items-center"
      {...sectionAnimation()}
    >
      <Title>{props.title}</Title>
      <motion.div
        className="flex flex-col text-2xl gap-4 font-light text-center px-2 md:px-0"
        {...aboutTextAnimation}
      >
        <p>Let's get straight to the point.</p>
        <p>
          My name's Daniel, I am 21 y.o. full stack developer based in Russia.
        </p>
        <p>
          I do web, mobile and desktop development.
          <br />
          <br />
        </p>
        <p>
          In my spare time, I draw, learn languages and master my UI/UX skills.
        </p>
        <p>
          I wish I was a{" "}
          <span className="relative text-orange-100 group transition-all duration-700">
            <span
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[150%] -z-10 opacity-0 group-hover:opacity-100 transition-all duration-700"
              style={{
                backgroundImage: `url(${encodeURI(fireGif)})`,
                backgroundSize: "500% 700%",
                backgroundRepeat: "repeat",
                backgroundPositionX: "50%",
                backgroundPositionY: "60%",
              }}
            ></span>
            firebender
          </span>
          , but I only bend my spine when working...
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
