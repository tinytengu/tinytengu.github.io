import { AnimationProps, motion } from "framer-motion";

import { Footer, Link, Section } from "@/components";

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

const ContectMe = () => {
  return (
    <Section>
      <motion.div
        className="flex flex-col text-2xl font-light px-2 md:px-0 gap-1"
        {...aboutTextAnimation}
      >
        <p>Got an interesting offer?</p>
        <span className="flex flex-row gap-2">
          <h1 className="text-7xl font-bold">
            <Link
              href="mailto:tinytengu@yandex.ru"
              target="_blank"
              className="underline hover:bg-white hover:text-black transition-all duration-500"
            >
              Email
            </Link>{" "}
            me
          </h1>
        </span>
        <h2 className="text-6xl text-right">
          or
          <br />
          get in touch
          <br />
          via social
          <br />
          media
        </h2>
      </motion.div>
      <Footer />
    </Section>
  );
};

export default ContectMe;
