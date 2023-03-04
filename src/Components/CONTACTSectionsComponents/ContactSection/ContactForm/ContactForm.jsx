import React from "react";

export const ContactForm = ({ sendEmail }) => {
  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="name" placeholder="ime" />
      <input type="email" name="user_email" placeholder="email" />
      <textarea placeholder="Poruka..." name="message" />
      <button type="submit" value="Send">
        Slanje
      </button>
      <br />
    </form>
  );
};
