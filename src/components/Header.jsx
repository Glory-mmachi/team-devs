import React from "react";
import styles from "./Header.module.css";
import header from "../assets/Illustration-Header.png";

export default function Header() {
  return (
    <header>
      <div className={styles.hero}>
        <p className={styles.discount}>
          <span>75% save</span> For the black friday weekend
        </p>
        <h2>Fastest & secure platform to invest in crypto</h2>
        <p className={styles.heroDetails}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus debitis
          dicta officia adipisci porro molestiae recusandae id nam! Hic, minima.
        </p>
        <div className={`btn btn_accent ${styles.btnHeader}`}>
          Try for free <span>&gt;</span>
        </div>
      </div>
      <img src={header} alt="" />
    </header>
  );
}
