import React from "react";

import { Services } from "features/services/Services";

import styles from "./servicesPage.module.scss";

export const ServicesPage = () => {
  return (
    <div className={styles.services_page}>
      <Services />
    </div>
  );
};
