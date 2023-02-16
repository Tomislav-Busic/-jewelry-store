import React from "react";
import "./ContactFooter.scss";
import { RxLink2 } from "react-icons/rx";
import { IoMail, IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ContactFooter = () => {
  return (
    <div className="footer-contact">
      <div className="footer-contact-container">
        <div className="f-con-item">
          <ul>
            <h2>Stranica</h2>
            <li>
              <RxLink2 className="icon" />
              <Link to="/" className="link">
                Početna
              </Link>
            </li>
            <li>
              <RxLink2 className="icon" />
              <Link to="/prodaja" className="link">
                Prodaja
              </Link>
            </li>
            <li>
              <RxLink2 className="icon" />
              <Link to="/usluge" className="link">
                Usluge
              </Link>
            </li>
            <li>
              <RxLink2 className="icon" />
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
          </ul>
        </div>
        <div className="f-con-item">
          <ul>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social"></div>
    </div>
  );
};
