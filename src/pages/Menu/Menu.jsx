import React, { useEffect, useState } from "react";
import styles from "./menu.module.css";
import { menu_list } from "../../assets/assets";
import { setCategory } from "../../store/slices/foodListSlice";

// icons
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 5;
  const [showArr, setShowArr] = useState([]); // for carousel

  // redux seetup
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.foodReducers);
   
  // carousel content setup
  function populateShowArr() {
    let copy = [];
    for (let i = startIndex; i <= endIndex; i++) {
      copy.push(menu_list[i]);
    }
    setShowArr(copy);
  }

  useEffect(() => {
    populateShowArr();
  }, [startIndex, endIndex]);

  // carousel manuver functions
  const goToNext = () => {
    setStartIndex((prev) =>
      endIndex === menu_list.length - 1 ? menu_list.length - 6 : prev + 1
    );
  };

  const goToPrevious = () => {
    setStartIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <>
      <div className={styles.menu}>
        <h1>We Serve 🍜</h1>

        <div className={styles["menu-list"]}>
          <button onClick={() => goToPrevious()}>
            <FaChevronLeft />
          </button>

          {showArr.map((obj, idx) => {
            return (
              <div
                key={idx}
                className={`${styles.item} `}
                onClick={() => dispatch(setCategory(obj.menu_name))}
              >
                <img
                  src={obj.menu_image}
                  alt=""
                  className={`${
                    initState.category === obj.menu_name ? styles.active : ""
                  }`}
                />
                <p>{obj.menu_name}</p>
              </div>
            );
          })}

          <button onClick={() => goToNext()}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Menu;
