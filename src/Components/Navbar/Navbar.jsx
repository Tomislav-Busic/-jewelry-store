import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header>
      <h3>Logo</h3>
      <nav className={toggle ? "resposive_nav" : ""}>
        <Link className="nav-link" to="/" onClick={() => setToggle(!toggle)}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/work"
          onClick={() => setToggle(!toggle)}
        >
          My Work
        </Link>
        <Link className="nav-link" to="/" onClick={() => setToggle(!toggle)}>
          Blog
        </Link>
        <Link
          className="nav-link"
          to="/admin"
          onClick={() => setToggle(!toggle)}
        >
          Admin
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
