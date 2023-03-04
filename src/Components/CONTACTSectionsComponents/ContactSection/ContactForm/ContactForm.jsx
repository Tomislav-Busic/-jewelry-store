import React from "react";

export const ContactForm = ({ sendEmail }) => {
  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="Vaše ime" />
      <input type="email" name="user_email" placeholder="Vaša email adresa" />
      <textarea placeholder="Poruka..." name="message" />
      <button type="submit" value="Send">
        Slanje
      </button>
      <br />
    </form>
  );
};
