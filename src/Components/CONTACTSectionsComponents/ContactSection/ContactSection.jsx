import React, { useState } from "react";
import "./ContactSection.scss";
import emailjs from "emailjs-com";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactLinks } from "./ContactLinks/ContactLinks";

export const ContactSection = () => {
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
        setTimeout(() => {
          setEmailRes(true);
          console.log(res);
          e.target.reset();
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contact-section">
      <h1>Kontakt</h1>
      <div className="contact-container">
        <ContactForm
          sendEmail={sendEmail}
          emailRes={emailRes}
          setEmailRes={setEmailRes}
        />
        <ContactLinks />
      </div>
    </div>
  );
};
