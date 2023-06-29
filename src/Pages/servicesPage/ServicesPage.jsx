import React from "react";

import { ServicesSectionOne } from "../../components/servicesSectionsComponents/servicesSectionOne/ServicesSectionOne";
import { ServicesSectionThree } from "../../components/servicesSectionsComponents/servicesSectionThree/ServicesSectionThree";
import { ServicesSectionTwo } from "../../components/servicesSectionsComponents/servicesSectionTwo/ServicesSectionTwo";

import styles from "./servicesPage.module.scss";

export const ServicesPage = () => {
  return (
    <div className={styles.services_page}>
      <div className={styles.container}>
        <ServicesSectionOne />
        <ServicesSectionTwo />
        <ServicesSectionThree />
      </div>
    </div>
  );
};
