import React from "react";

import { SocialIcons } from "components/socialIcons/SocialIcons";

import { IoMail, IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";

import "./contactLinks.scss";

export const ContactLinks = () => {
  return (
    <div className="contact_links" data-testid="links">
      {" "}
      <SocialIcons />
      <div className="f_con_item">
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
  );
};
