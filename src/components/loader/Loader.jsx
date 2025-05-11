import React from "react";
import styles from "./loader.module.css"; // If you want to extract CSS, see note below

const Loader = () => {
  return (
    <>
      <div className={styles.pizzaLoader}>
        <div className={styles.pizzaSlice + " " + styles.slice1}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={styles.peperoni + " " + styles.p1}></div>
              <div className={styles.peperoni + " " + styles.p2}></div>
              <div className={styles.peperoni + " " + styles.p3}></div>
              <div className={styles.olive + " " + styles.o1}></div>
              <div className={styles.olive + " " + styles.o3}></div>
              <div className={styles.olive + " " + styles.o4}></div>
              <div className={styles.olive + " " + styles.o6}></div>
              <div className={styles.olive + " " + styles.o7}></div>
            </div>
          </div>
        </div>
        <div className={styles.pizzaSlice + " " + styles.slice2}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={styles.peperoni + " " + styles.p1}></div>
              <div className={styles.peperoni + " " + styles.p2}></div>
              <div className={styles.peperoni + " " + styles.p3}></div>
              <div className={styles.olive + " " + styles.o1}></div>
              <div className={styles.olive + " " + styles.o2}></div>
              <div className={styles.olive + " " + styles.o3}></div>
              <div className={styles.olive + " " + styles.o6}></div>
              <div className={styles.olive + " " + styles.o7}></div>
            </div>
          </div>
        </div>
        <div className={styles.pizzaSlice + " " + styles.slice3}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={styles.peperoni + " " + styles.p1}></div>
              <div className={styles.peperoni + " " + styles.p2}></div>
              <div className={styles.peperoni + " " + styles.p3}></div>
              <div className={styles.olive + " " + styles.o3}></div>
              <div className={styles.olive + " " + styles.o4}></div>
              <div className={styles.olive + " " + styles.o5}></div>
              <div className={styles.olive + " " + styles.o6}></div>
            </div>
          </div>
        </div>
        <div className={styles.pizzaSlice + " " + styles.slice4}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={styles.peperoni + " " + styles.p1}></div>
              <div className={styles.peperoni + " " + styles.p2}></div>
              <div className={styles.peperoni + " " + styles.p3}></div>
              <div className={styles.olive + " " + styles.o1}></div>
              <div className={styles.olive + " " + styles.o2}></div>
              <div className={styles.olive + " " + styles.o3}></div>
              <div className={styles.olive + " " + styles.o4}></div>
            </div>
          </div>
        </div>
        <div className={styles.pizzaSlice + " " + styles.slice5}>
          <div className={styles.border}>
            <div className={styles.crust}></div>
            <div className={styles.cheese}>
              <div className={styles.peperoni + " " + styles.p1}></div>
              <div className={styles.peperoni + " " + styles.p2}></div>
              <div className={styles.peperoni + " " + styles.p3}></div>
              <div className={styles.olive + " " + styles.o1}></div>
              <div className={styles.olive + " " + styles.o2}></div>
              <div className={styles.olive + " " + styles.o6}></div>
              <div className={styles.olive + " " + styles.o7}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;
