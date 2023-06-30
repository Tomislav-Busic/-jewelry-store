import React from "react";

import { SocialIcons } from "components/socialIcons/SocialIcons";

import { IoMail, IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import styles from "./contactLinks.module.scss";

export const ContactLinks = () => {
  return (
    <div className={styles.contact_links}>
      {" "}
      <SocialIcons />
      <div className={styles.f_con_item}>
        <ul>
          <li>
            <IoMail className={styles.icon} />
            <a href="mailto:anita@calviantique.hr" className={styles.link}>
              anita@calviantique.hr
            </a>
          </li>
          <li>
            <IoCall className={styles.icon} />
            <a href="tel:+385992882894" className={styles.link}>
              <span>Anita</span> +385992882894
            </a>
          </li>
          <li>
            <IoCall className={styles.icon} />
            <a href="tel:+38598229078" className={styles.link}>
              <span>Ivica</span> +38598229078
            </a>
          </li>
          <li>
            <FaMapMarkerAlt className={styles.icon} />
            <p className={styles.link}>Praška 10, Zagreb</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
