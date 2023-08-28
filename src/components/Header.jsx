import React from "react";
import styles from "./Header.module.css";
import header from "../assets/Illustration-Header.png";
import barChart from "../assets/Bar Chart.svg";
import people from "../assets/Person.svg";
import earth from "../assets/Earth.svg";
import imgWhy from "../assets/Illustrations.png";

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
      {/* ANALYTICS */}

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

      {/* WHY ME 😭😭 */}

      <section className={styles.why}>
        <img src={imgWhy} alt="why" />
        <div className={styles.whyHero}>
          <h2>Why you should Choose Crappo</h2>
          <p className={styles.whyDetails}>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <div className={`btn btn_accent ${styles.btnWhy}`}>Learn More</div>
        </div>
      </section>

      <section className={styles.earn}>
        <div className={styles.earnDetails}>
          <h3>Check how much you can earn</h3>
          <p>
            Let's check your hash rate and see how much youu will earn today
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className={styles.hash}>
          <div>
            <form className={styles.hash_rate}>
              <input type="text" placeholder="Enter your hash rate" />
              <select>
                <option value="Th/s" selected>
                  TH/s
                </option>
                <option value="mh/s">MH/s</option>
                <option value="gh/s">GH/s</option>
              </select>
              <button className="btn btn_accent">Calculate</button>
            </form>
          </div>
          <div className={styles.estimate}>
            <h4>Estimated 24 hours earning:</h4>
            <p className={styles.amt}>
              0.055 130 59 ETH <span>($127s)</span>
            </p>
            <p>
              Revenue will change based on mining difficulty and Ethereum price
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
