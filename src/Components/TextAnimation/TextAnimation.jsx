import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./textAnimation.module.scss";

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
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      if (i === texts.length) i = 0;
      setCurrentWord(i);
    }, 6100);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <AnimatePresence>
      {" "}
      <motion.span>
        <div className={styles.anim_heading}>
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
