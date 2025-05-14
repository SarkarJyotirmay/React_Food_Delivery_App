import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { displayCart, clearcart } from "../../store/slices/cartSlice";
import styles from "./cart.module.css";
import CartItem from "../../components/cartItem/CartItem";
import RazorPayButton from "../../components/razorPayButton/RazorPayButton";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducers);
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  function calculateTotal(cart) {
    return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  }

  const notify = () =>
    toast("Cleared all items", {
      position: "top-center",
      type: "error",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  if (cart.length === 0) {
    return (
      <h1 className={styles["nothing-message"]}>
        Nothing in the cart try add some !
      </h1>
    );
  }

  return (
    <>
      <div className={styles["cart-container"]}>
        {cart.length > 0 && (
          <>
            <h1>Your orders are on the way</h1>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item._id}>
                    <CartItem item={item} />
                  </li>
                );
              })}
            </ul>
            <div className={styles["cart-details"]}>
              <h2>Total Bill : $ {calculateTotal(cart)}</h2>
              <div className={styles.actions}>
                <button
                  onClick={() => {
                    dispatch(clearcart());
                    notify();
                  }}
                >
                  Clear Cart
                </button>
                <button>
                  <Link to="/checkout">Chekout</Link>
                </button>
              </div>
            </div>
          </>
        )}

      </div>
    </>
  );
}

export default Cart;
