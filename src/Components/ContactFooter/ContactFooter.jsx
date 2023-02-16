import React from "react";
import "./ContactFooter.scss";
import { IoMail, IoCall } from "react-icons/io5";
import { FaUser, FaKey, FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ContactFooter = () => {
  return (
    <div className="footer-contact">
      <div className="footer-contact-container">
        <div className="f-con-item">
          <ul>
            <h2>Stranica</h2>
            <li>
              <FaLink className="icon" />
              <Link to="/" className="link">
                Početna
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/prodaja" className="link">
                Prodaja
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/usluge" className="link">
                Usluge
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/kontakt" className="link">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
        <div className="f-con-item">
          <ul>
            <h2>Kontakt</h2>
            <li>
              <IoMail className="icon" />
              <a href="mailto:anita@calviantique.hr" className="link">
                anita@calviantique.hr
              </a>
            </li>
            <li>
              <IoCall className="icon" />
              <a href="tel:+385992882894" className="link">
                +385992882894(Anita)
              </a>
            </li>
            <li>
              <IoCall className="icon" />
              <a href="tel:+38598229078" className="link">
                +38598229078(Ivica)
              </a>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <p className="link">Praška 10, Zagreb</p>
            </li>
          </ul>
        </div>
        <div className="f-con-item">
          <ul>
            <h2>Calvi antique</h2>
            <li>
              <FaUser className="icon" />
              <p className="link">Anita Calvi</p>
            </li>
            <li>
              <FaMapMarkerAlt className="icon" />
              <p className="link">Praška 10, Zagreb</p>
            </li>
            <li>
              <FaKey className="icon" />
              <Link to="/login" className="link">
                Administrator
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="social"></div>
    </div>
  );
};
