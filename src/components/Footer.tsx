import { motion } from "framer-motion";

import Link from "./Link";

const Footer = () => {
  return (
    <motion.footer className="absolute flex flex-row justify-between bottom-2 left-0 w-full py-2 px-8 md:px-32 bg-black-500 bg-opacity-50 text-sm">
      <p>
        &copy; tinytengu, 2022.
        <br />
        All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/tinytengu"
          target="_blank"
          className="hover:bg-white hover:text-black font-medium transition-all duration-500 h-fit"
        >
          GitHub
        </Link>
        <Link
          href="https://github.com/tinytengu"
          target="_blank"
          className="hover:bg-white hover:text-black font-medium transition-all duration-500 h-fit"
        >
          Telegram
        </Link>
        <Link
          href="https://github.com/tinytengu"
          target="_blank"
          className="hover:bg-white hover:text-black font-medium transition-all duration-500 h-fit"
        >
          VK
        </Link>
      </div>
    </motion.footer>
  );
};

export default Footer;
