import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../assets/crapo logo.svg";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.logo}>
        <img src={Logo} alt="logo" />
        <h3 className={styles.logoName}>Crappo</h3>
      </div>

      <ul>
        <li>Products</li>
        <li>Feattures</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className={styles.auth}>
        <div className={`btn ${styles.login}`}>Login</div>
        <div className={`btn btn_accent ${styles.navBtn}`}>Register</div>
      </div>
    </nav>
  );
}
