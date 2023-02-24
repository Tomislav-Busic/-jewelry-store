import React from "react";
import "./ContactPage.scss";
import { ContactSection } from "../../Components/CONTACTSectionsComponents/ContactSection/ContactSection";

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <ContactSection />
      </div>
    </div>
  );
};
