import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { goToTopOfPage } from "../../utilities/tools";
import logo from "../../images/calvi.png";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="navbar">
      <header>
        <Link className="logo-name" to="/" onClick={() => goToTopOfPage()}>
          <h3>CALVI</h3>
        </Link>
        <nav className={toggle ? "resposive_nav" : ""}>
          <Link
            className="nav-link"
            to="/"
            onClick={() => (setToggle(!toggle), goToTopOfPage())}
          >
            POČETNA
          </Link>
          <Link
            className="nav-link"
            to="/prodaja"
            onClick={() => (setToggle(!toggle), goToTopOfPage())}
          >
            PRODAJA
          </Link>
          <Link
            className="nav-link"
            to="/usluge "
            onClick={() => (setToggle(!toggle), goToTopOfPage())}
          >
            USLUGE
          </Link>
          <Link
            className="nav-link"
            to="/kontakt"
            onClick={() => (setToggle(!toggle), goToTopOfPage())}
          >
            KONTAKT
          </Link>
          <button
            className="nav-btn nav-close-btn"
            onClick={() => setToggle(!toggle)}
          >
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};
