import React from "react";

import styles from "./hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero({ scrollToMenu }) {
  const navigate = useNavigate()
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>Craving Something Good? DineDash Delivers.</h1>
        <p>
          From your favorite local spots to trending new tastes – get hot, fresh
          meals delivered in minutes.
        </p>
        <button className={styles["go-to-menu-btn"]} onClick={scrollToMenu}>Go To Menu</button>
        <button className={styles["ai-resipie-btn"]} onClick={()=>navigate("/findrecipie")} >Get Any Recipie</button>
      </div>
    </div>
  );
}

export default Hero;
