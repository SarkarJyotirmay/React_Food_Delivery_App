import React from "react";
import styles from "./no_such_item.module.css";

const OoopsNoSuchItem = () => {
  return (
    <div className={styles.itemNotFound}>
      <div className={styles.itemNotFound__messageBox}>
        <h2 className={styles.itemNotFound__title}>Item Not Found</h2>
        <p className={styles.itemNotFound__text}>
          Oops! The item you're searching for isn't available right now. We're working hard to expand our menu.
        </p>
        <p className={styles.itemNotFound__text}>
          Let us know what you're looking for and we'll try to add it soon!
        </p>
      </div>

      <form className={styles.itemNotFound__form}>
        <label className={styles.itemNotFound__label} htmlFor="feedback">Suggest an item or give feedback:</label>
        <textarea
          id="feedback"
          className={styles.itemNotFound__textarea}
          placeholder="E.g., More vegan options, sushi, etc."
        ></textarea>
        <button type="submit" className={styles.itemNotFound__button}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default OoopsNoSuchItem;
