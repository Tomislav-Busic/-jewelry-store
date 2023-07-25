import React, { useState } from "react";
import emailjs from "emailjs-com";

import { ContactForm } from "./components/contactForm/ContactForm";
import { EmailResponse } from "./components/emailResponse/EmailResponse";
import { ContactLinks } from "./components/contactLinks/ContactLinks";

import styles from "./contact.module.scss";

export const Contact = () => {
  const [emailRes, setEmailRes] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((res) => {
        console.log(res);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });

    setEmailRes(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contact_section}>
        <h1>Kontakt</h1>
        <div className={styles.contact_container}>
          {!emailRes ? (
            <ContactForm sendEmail={sendEmail} />
          ) : (
            <EmailResponse setEmailRes={setEmailRes} />
          )}
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};
