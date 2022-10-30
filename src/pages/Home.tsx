import { motion } from "framer-motion";

import { Title } from "@/components";
import { sectionAnimation } from "@/animations";

const Home = () => {
  return (
    <motion.section
      className="absolute w-full h-full flex flex-col justify-center items-center"
      {...sectionAnimation()}
    >
      <Title>tinytengu</Title>
    </motion.section>
  );
};

export default Home;
