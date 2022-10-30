import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

import { Pointer, Navbar } from "@/components";
import { Home, AboutMe, Projects, ContactMe } from "@/pages";
import { circleAnimation, navbarAnimation } from "@/animations";
import { PointerContext } from "@/contexts/pointer";
import { useBreakpointMax, usePointer } from "@/hooks";
import { clamp } from "@/utils";

const PAGE_NAMES = ["Home", "About me", "Projects", "Contact me"];

function App() {
  // State
  const isSmall = useBreakpointMax("md");
  const [page, setPage] = useState(0);
  const pointerState = usePointer();

  // Handlers
  useEffect(() => {
    document.addEventListener(
      "wheel",
      (event) => {
        setPage(
          clamp(page + (event.deltaY > 0 ? 1 : -1), 0, PAGE_NAMES.length - 1)
        );
      },
      { passive: true }
    );
  }, [page]);

  const swipeHandler = useSwipeable({
    onSwiped: (event) => {
      setPage(
        clamp(page + (event.deltaY > 0 ? -1 : 1), 0, PAGE_NAMES.length - 1)
      );
    },
  });

  return (
    <PointerContext.Provider value={pointerState}>
      <div className="w-full h-full" {...swipeHandler}>
        <Pointer />
        <motion.div
          className="absolute top-8 hidden md:block z-10"
          {...navbarAnimation({ start: 0, end: 128, delay: 0.8 })}
        >
          <Navbar items={PAGE_NAMES} itemIdx={page} onSelect={setPage} />
        </motion.div>
        <AnimatePresence mode="wait">
          {page == 0 && <Home key="home" />}
          {page == 1 && <AboutMe key="about-me" title={PAGE_NAMES[page]} />}
          {page == 2 && <Projects key="projects" title={PAGE_NAMES[page]} />}
          {page == 3 && <ContactMe key="contact-me" />}
        </AnimatePresence>
        {/* Circles */}
        <section className="absolute w-full h-screen -z-50 overflow-hidden">
          <div className="absolute w-full h-full flex justify-center items-center">
            <motion.div
              className="absolute rounded-full border border-white"
              {...circleAnimation({
                size:
                  (isSmall ? 500 : 700) *
                  (page === 0 ? 1 : page === 3 ? 1.8 : 2),
                opacity: 1,
                delay: 0.8 * (page === 0 ? 1 : 0.5),
              })}
            ></motion.div>
            <motion.div
              className="absolute rounded-full border border-white"
              {...circleAnimation({
                size:
                  (isSmall ? 400 : 600) *
                  (page === 0 ? 1 : page === 3 ? 1.8 : 2),
                opacity: 0.4,
                delay: 1 * (page === 0 ? 1 : 0.5),
              })}
            ></motion.div>
            <motion.div
              className="absolute rounded-full border border-white"
              {...circleAnimation({
                size:
                  (isSmall ? 300 : 500) *
                  (page === 0 ? 1 : page === 3 ? 1.8 : 2),
                opacity: 0.2,
                delay: 1.2 * (page === 0 ? 1 : 0.5),
              })}
            ></motion.div>
          </div>
        </section>
      </div>
    </PointerContext.Provider>
  );
}

export default App;
