import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TextAnimation.scss";

const TextVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const TextAnimation = () => {
  const texts = [
    "IZRADA NAKITA PO NARUDŽBI",
    "POPRAVCI I RESTAURIRANJE NAKITA",
    "KOMISIONA PRODAJA",
    "FRANCUSKI ANTIKVITETI",
  ];
  const [currentWord, setCurrentWord] = useState(-1);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === texts.length) i = -1;
      else setCurrentWord(i);
      i++;
    }, 8100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {" "}
      <motion.span className="animated-headline">
        <div className="anim-heading">
          <h2>
            {texts.map((word, index) =>
              index === currentWord ? (
                <motion.span
                  initial="offscreen"
                  animate="onscreen"
                  exit="exit"
                  variants={TextVariants}
                  transition={{
                    duration: 2,
                    delay: 1,
                  }}
                  key={index}
                >
                  {word}
                </motion.span>
              ) : null
            )}
          </h2>
        </div>
      </motion.span>
    </AnimatePresence>
  );
};
