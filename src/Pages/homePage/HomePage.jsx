import React from "react";

import { Home } from "features/home/Home";

import styles from "./homePage.module.scss";

export const HomePage = () => {
  return (
    <div className={styles.home}>
      <Home />
    </div>
  );
};
