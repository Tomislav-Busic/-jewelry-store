import React from "react";

import styles from "./contactForm.module.scss";

export const ContactForm = ({ sendEmail }) => {
  return (
    <form onSubmit={sendEmail} className={styles.form} data-testid="form">
      <input type="text" name="name" placeholder="Vaše ime" required />
      <input
        type="email"
        name="user_email"
        placeholder="Vaša email adresa"
        required
      />
      <textarea placeholder="Poruka..." name="message" required />
      <button type="submit" value="Send">
        Slanje
      </button>
      <br />
    </form>
  );
};
