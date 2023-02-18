import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    "IZRADA NAKITA PO NARUĐBI",
    "POPRAVCI I RESTAURIRANJE NAKITA",
    "KOMISIONA PRODAJA",
    "FRANCUSKI ANTIKVITETI",
  ];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i === texts.length) i = 0;
      else setCurrentWord(i);
      i++;
    }, 8100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="anim-heading">
      <h2>
        {" "}
        <motion.span
          className="animated-headline"
          transition={{ staggerChildren: 2 }}
        >
          {texts.map((word, index) =>
            index === currentWord ? (
              <motion.span>
                {word.split("").map((r, id) => (
                  <motion.span
                    initial="offscreen"
                    animate="onscreen"
                    exit="exit"
                    variants={TextVariants}
                    transition={{
                      duration: 0.4,
                      delay: id * 0.15,
                    }}
                    key={index}
                  >
                    {r}
                  </motion.span>
                ))}
              </motion.span>
            ) : null
          )}
        </motion.span>
      </h2>
    </div>
  );
};
