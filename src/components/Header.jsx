import React from "react";
import styles from "./Header.module.css";
import header from "../assets/Illustration-Header.png";
import barChart from "../assets/Bar Chart.svg";
import people from "../assets/Person.svg";
import earth from "../assets/Earth.svg";

export default function Header() {
  const imgAnalytics = [
    {
      src: barChart,
      title: "$30B",
      detail: "Digital currency exchanged",
    },
    {
      src: people,
      title: "10M+",
      detail: "Trusted Wallets Investors",
    },
    {
      src: earth,
      title: "195",
      detail: "Countries Supported",
    },
  ];

  return (
    <>
      <header>
        <div className={styles.hero}>
          <p className={styles.discount}>
            <span>75% save</span> For the black friday weekend
          </p>
          <h2>Fastest & secure platform to invest in crypto</h2>
          <p className={styles.heroDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            debitis dicta officia adipisci porro molestiae recusandae id nam!
            Hic, minim.
          </p>
          <div className={`btn btn_accent ${styles.btnHeader}`}>
            Try for free <span>&gt;</span>
          </div>
        </div>
        <img src={header} alt="image header" />
      </header>

      <section className={styles.analytics}>
        {imgAnalytics.map((data, i) => (
          <div key={i} className={styles.analysis}>
            <div className={styles.img}>
              <img src={data.src} alt={data.src} />
            </div>
            <div>
              <h3>{data.title}</h3>
              <p>{data.detail}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
