import React from "react";

import { ContactSection } from "../../components/contactSectionsComponents/contactSection/ContactSection";

import styles from "./contactPage.module.scss";

export const ContactPage = () => {
  return (
    <div className={styles.contact_page}>
      <div className={styles.container}>
        <ContactSection />
      </div>
    </div>
  );
};
