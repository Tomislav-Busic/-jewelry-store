import React from "react";
import "./contactPage.scss";
import { ContactSection } from "../../components/contactSectionsComponents/contactSection/ContactSection";

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <ContactSection />
      </div>
    </div>
  );
};
