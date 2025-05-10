import React from "react";
import styles from "./display_food.module.css";
import { useDispatch, useSelector } from "react-redux";
import { food_list } from "../../assets/assets";
import SingleFoodItem from "../singleFoodItem/SingleFoodItem";

function DisplayFood() {
  const initState = useSelector((state) => state.foodReducers);
  const dispatch = useDispatch();
  console.log(initState);

  return (
    <>
      <h1 className={styles["food-list-heading"]}>
        Selected Category ~{" "}
        <span className={styles["selected-category"]}>
          {initState.category}
        </span>
      </h1>
      <div className={styles["food-list"]}>
        {initState.category === "All"
          ? initState.foods.map((obj) => {
              return <SingleFoodItem key={obj._id} obj={obj} />;
            })
          : initState.foods.map((obj) => {
              if (obj.category === initState.category) {
                return <SingleFoodItem key={obj._id} obj={obj} />;
              }
            })}
      </div>
    </>
  );
}

export default DisplayFood;
