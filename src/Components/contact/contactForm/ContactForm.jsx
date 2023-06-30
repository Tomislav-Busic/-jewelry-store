import React from "react";

import styles from "./contactForm.module.scss";

export const ContactForm = ({ sendEmail, emailRes, setEmailRes }) => {
  return (
    <form onSubmit={sendEmail}>
      {!emailRes ? (
        <>
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
        </>
      ) : (
        <div className={styles.response}>
          <h2>
            Poštovani, <br />
            Hvala vam na poruci.
            <br />
            Odgovorit ćemo vam u što kraćem roku.
            <br />
            Srdačan pozdrav
            <br />
            Calvi
          </h2>
          <button onClick={() => setEmailRes(false)}>U redu</button>
        </div>
      )}
    </form>
  );
};
