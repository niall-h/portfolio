import React from "react";
import styles from "./Landing.module.css";
import scrollIcon from "./scroll-icon.png";

function Landing() {
  return (
    <div className={styles["landing-page"]}>
      <div className={styles.welcome}>
        <div className={styles["welcome-text"]}>Hey there!</div>
        <img
          src={scrollIcon}
          alt="scroll"
          className={styles["scroll-icon"]}
        ></img>
        <div className={styles.scroll}>Scroll down</div>
      </div>
    </div>
  );
}

export default Landing;
