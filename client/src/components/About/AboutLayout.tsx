import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AboutNav from "./AboutNav";

function AboutLayout() {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="font-[aspekta]">
      <AboutNav />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AboutLayout;
