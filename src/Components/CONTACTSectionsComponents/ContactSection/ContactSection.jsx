import React from "react";
import "./ContactSection.scss";
import emailjs from "emailjs-com";
import { SocialIcons } from "../../SocialIcons/SocialIcons";
import { IoMail, IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

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
      <div className="contact-container">
        <div className="contact-links">
          <SocialIcons />
          <div className="f-con-item">
            <ul>
              <li>
                <IoMail className="icon" />
                <a href="mailto:anita@calviantique.hr" className="link">
                  anita@calviantique.hr
                </a>
              </li>
              <li>
                <IoCall className="icon" />
                <a href="tel:+385992882894" className="link">
                  <span>Anita</span> +385992882894
                </a>
              </li>
              <li>
                <IoCall className="icon" />
                <a href="tel:+38598229078" className="link">
                  <span>Ivica</span> +38598229078
                </a>
              </li>
              <li>
                <FaMapMarkerAlt className="icon" />
                <p className="link">Praška 10, Zagreb</p>
              </li>
            </ul>
          </div>
        </div>
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
    </div>
  );
};
