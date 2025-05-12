import React, { useEffect, useState } from "react";
import styles from "./single_food_item.module.css";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";

import {
  displayCart,
  addFirst,
  increaseQuantity,
  decreaseQuantity,
} from "../../store/slices/cartSlice";
import { useNavigate } from "react-router-dom";

function SingleFoodItem({ obj }) {
  const [orderQuantity, setOrderQuantity] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducers);
  let existing = cart.find((object) => obj._id === object._id);

  // useEffect(()=>{console.log(cart);
  // },[cart])

  const navigate = useNavigate();

  return (
    <div className={styles["single-food-item"]}>
      <div className={styles.image}>
        <img src={obj.image} alt="" />
      </div>

      {existing ? (
        <div className={styles["food-item-buttons"]}>
          <img
            src={assets.remove_icon_red}
            alt=""
            onClick={() => dispatch(decreaseQuantity(obj))}
          />
          <p>{existing.quantity}</p>
          <img
            src={assets.add_icon_green}
            alt=""
            onClick={() => dispatch(increaseQuantity(obj))}
          />
        </div>
      ) : (
        // <img
        //   src={assets.add_icon_white}
        //   alt=""
        //   className={styles.add}
        //   onClick={() => dispatch(addFirst(obj))}
        // />
        <button className={styles.add} onClick={() => dispatch(addFirst(obj))}>
          Add to Cart
        </button>
      )}

      <div className={styles.info}>
        <h2>{obj.name}</h2>
        <p>{obj.description}</p>
        <div className={styles["cart-actions"]}>
          <h3>$ {obj.price}</h3>
          <button
            onClick={() => navigate("/cart")}
            className={styles["add-to-cart"]}
          >
            Go To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleFoodItem;
