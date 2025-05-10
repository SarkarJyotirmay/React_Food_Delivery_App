import React from "react";

import styles from "./hero.module.css";

function Hero({ scrollToMenu }) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Craving Something Good? DineDash Delivers.</h1>
        <p>
          From your favorite local spots to trending new tastes – get hot, fresh
          meals delivered in minutes.
        </p>
        <button onClick={scrollToMenu}>Go To Menu</button>
      </div>
    </div>
  );
}

export default Hero;
