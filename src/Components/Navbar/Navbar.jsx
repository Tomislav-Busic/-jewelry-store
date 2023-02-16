import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h3>CALVI</h3>
      <nav className={toggle ? "resposive_nav" : ""}>
        <Link className="nav-link" to="/" onClick={() => setToggle(!toggle)}>
          Početna
        </Link>
        <Link
          className="nav-link"
          to="/prodaja"
          onClick={() => setToggle(!toggle)}
        >
          Umjetnine
        </Link>
        <Link
          className="nav-link"
          to="/usluge "
          onClick={() => setToggle(!toggle)}
        >
          Usluge
        </Link>
        <Link
          className="nav-link"
          to="/admin"
          onClick={() => setToggle(!toggle)}
        >
          Login
        </Link>
        <Link
          className="nav-link"
          to="/kontakt"
          onClick={() => setToggle(!toggle)}
        >
          Kontakt
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
    </header>
  );
};
