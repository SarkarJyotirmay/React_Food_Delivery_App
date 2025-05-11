import React, { useState } from "react";
import styles from "./display_food.module.css";
import { useDispatch, useSelector } from "react-redux";
import { food_list } from "../../assets/assets";
import SingleFoodItem from "../singleFoodItem/SingleFoodItem";
import OoopsNoSuchItem from "../oopsNoSuchItem/OopsNoSuchItem";

function DisplayFood() {
  const initState = useSelector((state) => state.foodReducers);
  const dispatch = useDispatch();
  console.log(initState);
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(query) {
    setSearchQuery(query);
  }

  let searchedFoods = initState.foods.filter((obj) =>
    obj.name.toLowerCase().includes(searchQuery)
  );
  return (
    <>
      {searchQuery.length === 0 ? (
        <h1 className={styles["food-list-heading"]}>
          Selected Category ~{" "}
          <span className={styles["selected-category"]}>
            {initState.category}
          </span>
        </h1>
      ) : (
        <h1 className={styles["food-list-heading"]}>
          Searching for your desired{" "}
          <span className={styles["selected-category"]}>food?</span>
        </h1>
      )}
      <input
        type="text"
        placeholder="Search For Food"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className={styles.search}
      />
      <div className={styles["food-list"]}>
        {searchQuery.length > 3 ? (
          searchedFoods.length === 0 ? (
            <OoopsNoSuchItem />
          ) : (
            initState.foods
              .filter((obj) =>
                obj.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((obj) => {
                return <SingleFoodItem key={obj._id} obj={obj} />;
              })
          )
        ) : initState.category === "All" ? (
          initState.foods.map((obj) => {
            return <SingleFoodItem key={obj._id} obj={obj} />;
          })
        ) : (
          initState.foods.map((obj) => {
            if (obj.category === initState.category) {
              return <SingleFoodItem key={obj._id} obj={obj} />;
            }
          })
        )}
      </div>
    </>
  );
}

export default DisplayFood;
