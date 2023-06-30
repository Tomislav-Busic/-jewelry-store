import { HomeSectionOne } from "./components/homeSectionOne/HomeSectionOne";
import { HomeSectionTwo } from "./components/homeSectionTwo/HomeSectionTwo";
import { HomeSectionThree } from "./components/homeSectionThree/HomeSectionThree";
import { HomeSectionFour } from "./components/homeSectionFour/HomeSectionFour";
import { HomeSectionFive } from "./components/homeSectionFive/HomeSectionFive";

import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.container}>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
    </div>
  );
};
