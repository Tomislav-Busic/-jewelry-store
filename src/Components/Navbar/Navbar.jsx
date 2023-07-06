import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { goToTopOfPage } from "utilities/tools";

import logo from "../../assets/images/calvi.png";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <header>
        <Link
          data-testid="nav_header"
          className={styles.logo_name}
          to="/"
          onClick={() => goToTopOfPage()}
        >
          <h3>CALVI</h3>
        </Link>
        <nav
          data-testid="navbar"
          className={toggle ? `${styles.resposive_nav}` : ""}
        >
          <Link
            className={styles.nav_link}
            to="/"
            onClick={() => {
              setToggle(!toggle);
              goToTopOfPage();
            }}
          >
            POČETNA
          </Link>
          <Link
            data-testid="prodaja"
            className={styles.nav_link}
            to="/prodaja"
            onClick={() => {
              setToggle(!toggle);
              goToTopOfPage();
            }}
          >
            PRODAJA
          </Link>
          <Link
            data-testid="usluge"
            className={styles.nav_link}
            to="/usluge "
            onClick={() => {
              setToggle(!toggle);
              goToTopOfPage();
            }}
          >
            USLUGE
          </Link>
          <Link
            data-testid="kontakt"
            className={styles.nav_link}
            to="/kontakt"
            onClick={() => {
              setToggle(!toggle);
              goToTopOfPage();
            }}
          >
            KONTAKT
          </Link>
          <button
            data-testid="close_icon"
            className={styles.nav_btn}
            style={{ position: "fixed", top: "2rem", right: "2rem" }}
            onClick={() => setToggle(!toggle)}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          data-testid="hamburger_icon"
          className={styles.nav_btn}
          onClick={() => setToggle(!toggle)}
        >
          <FaBars />
        </button>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};
