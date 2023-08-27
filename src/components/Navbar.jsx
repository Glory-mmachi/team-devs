import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../assets/crapo logo.svg";

export default function Navbar() {
  return (
    <nav>
      <div>
        <img src={Logo} alt="logo" />
        <h3 className={styles.logoName}>Crappo</h3>
      </div>

      <ul>
        <li>Products</li>
        <li>Feattures</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div>
        <div>Login</div>
        <div>Register</div>
      </div>
    </nav>
  );
}
