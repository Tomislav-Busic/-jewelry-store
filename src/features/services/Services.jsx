import React from "react";

import { ServicesSectionOne } from "./components/servicesSectionOne/ServicesSectionOne";
import { ServicesSectionTwo } from "./components/servicesSectionTwo/ServicesSectionTwo";
import { ServicesSectionThree } from "./components/servicesSectionThree/ServicesSectionThree";

import styles from "./services.module.scss";

export const Services = () => {
  return (
    <div className={styles.container}>
      <ServicesSectionOne />
      <ServicesSectionTwo />
      <ServicesSectionThree />
    </div>
  );
};
