import React from "react";

import { Contact } from "features/contact/Contact";

import styles from "./contactPage.module.scss";

export const ContactPage = () => {
  return (
    <div className={styles.contact_page}>
      <Contact />
    </div>
  );
};
