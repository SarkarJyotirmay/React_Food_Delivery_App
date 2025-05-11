import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.aboutSection__content}>
        <h1 className={styles.aboutSection__title}>Welcome to DineDash!</h1>
        <p className={styles.aboutSection__text}>
          At DineDash, we deliver your favorite meals hot and fresh, right to your
          doorstep. Whether you crave something spicy, sweet, or savory, our curated
          restaurant partners offer something for every palate. Our lightning-fast
          delivery and easy-to-use app make ordering food a delightful experience.
        </p>
        <p className={styles.aboutSection__text}>
          We believe in flavor, speed, and satisfaction. Explore mouthwatering
          dishes from local gems to well-known eateries, all with a few taps.
        </p>
        <p className={styles.aboutSection__highlight}>
          DineDash – where taste meets convenience.
        </p>
      </div>
      <div className={styles.aboutSection__imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Delicious food on the table"
          className={styles.aboutSection__image}
        />
      </div>
    </div>
  );
};

export default About;
