import React from "react";
import "./ContactFooter.scss";
import { IoMail, IoCall } from "react-icons/io5";
import {
  FaUser,
  FaKey,
  FaLink,
  FaMapMarkerAlt,
  FaWarehouse,
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { goToTopOfPage } from "../../Tools/Tools";

export const ContactFooter = () => {
  return (
    <div className="footer-contact">
      <div className="footer-contact-container">
        <div className="f-con-item">
          <ul>
            <h2>Stranica</h2>
            <li>
              <FaLink className="icon" />
              <Link to="/" className="link" onClick={goToTopOfPage}>
                Početna
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/prodaja" className="link" onClick={goToTopOfPage}>
                Prodaja
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/usluge" className="link" onClick={goToTopOfPage}>
                Usluge
              </Link>
            </li>
            <li>
              <FaLink className="icon" />
              <Link to="/kontakt" className="link" onClick={goToTopOfPage}>
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
        <div className="f-con-item">
          <ul>
            <h2>Calvi antique</h2>
            <li>
              <FaWarehouse className="icon" />
              <p className="link">CALVI ANTIQUE j.d.o.o.</p>
            </li>
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
              <Link to="/admin" className="link" onClick={goToTopOfPage}>
                Administrator
              </Link>
            </li>
          </ul>
        </div>
        <div className="f-con-item">
          <ul>
            <h2>Radno vrijeme</h2>
            <li>
              <p className="time">Pon-Pet:</p>
              <p className="link">8-20h</p>
            </li>
            <li>
              <p className="time">Sub:</p>
              <p className="link">8-15h</p>
            </li>
            <li>
              <p className="time">Ned:</p>
              <p className="link">Ne radimo</p>
            </li>
          </ul>
        </div>
        <div className="f-con-item">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5561.997434253886!2d15.974978527278504!3d45.81128408400844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6fc299fd2e1%3A0xe38d6d13b1fff011!2sPra%C5%A1ka%20ul.%2010%2C%2010000%2C%20Zagreb!5e0!3m2!1sbs!2shr!4v1676570422584!5m2!1sbs!2shr"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="social">
        <a>
          <FaFacebookSquare className="social-icon" />
        </a>
        <a
          href="https://www.instagram.com/calviantique_finejewellery/"
          target="_blank"
        >
          <FaInstagramSquare className="social-icon" />
        </a>
        <a>
          <FaLinkedin className="social-icon" />
        </a>
      </div>
    </div>
  );
};
