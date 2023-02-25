import React from "react";
import "./ContactSection.scss";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    /* emailjs
      .sendForm(
        "service_ybqmmcr",
        "template_01whte8",
        e.target,
        "DSAGwXnCHCTrTMfi3"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  return (
    <div className="contact-section">
      <h1>Kontakt</h1>
      <form onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="ime" />
        <input type="email" name="user_email" placeholder="email" />
        <textarea placeholder="Poruka..." name="message" />
        <button type="submit" value="Send">
          Slanje
        </button>
        <br />
      </form>
    </div>
  );
};
