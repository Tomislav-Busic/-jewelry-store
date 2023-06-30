import React from "react";

import { Contact } from "components/contact/Contact";

import styles from "./contactPage.module.scss";

export const ContactPage = () => {
  return (
    <div className={styles.contact_page}>
      <div className={styles.container}>
        <Contact />
      </div>
    </div>
  );
};
