import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { goToTopOfPage } from "../../utilities/tools";

import logo from "../../images/calvi.png";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.navbar}>
      <header>
        <Link
          className={styles.logo_name}
          to="/"
          onClick={() => goToTopOfPage()}
        >
          <h3>CALVI</h3>
        </Link>
        <nav className={toggle ? `${styles.resposive_nav}` : ""}>
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
            className={styles.nav_btn && styles.nav_close_btn}
            onClick={() => setToggle(!toggle)}
          >
            <FaTimes />
          </button>
        </nav>
        <button className={styles.nav_btn} onClick={() => setToggle(!toggle)}>
          <FaBars />
        </button>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
};
