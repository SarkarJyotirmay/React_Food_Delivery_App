import React, { useState } from "react";
import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

// icons
import { IoIosSearch } from "react-icons/io";

import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../../auth/firebase";
import { clearUser } from "../../store/slices/authSlice";

const auth = getAuth(app)


function Header() {
  const [menu, setmenu] = useState("Home"); // for having the active link styling
  const cart = useSelector((state)=>state.cartReducers);
  const { user, loading } = useSelector((state) => state.authReducers);
  const dispatch = useDispatch()

  const navigate = useNavigate()
  

  function handleLogOut (){
    auth.signOut();
    navigate("/login")
    dispatch(clearUser())

  }

  return (
    <>
      <nav className={styles.header}>
        <Link to={"/"}><h1 className={styles.logo}>DineDash</h1></Link>

        <ul>
          <li
            onClick={() => setmenu("Home")}
            className={`${menu === "Home" ? styles.active : ""}`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setmenu("About")}
            className={`${menu === "About" ? styles.active : ""}`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => setmenu("Contact")}
            className={`${menu === "Contact" ? styles.active : ""}`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul>
          <li className={styles.cart}>
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={`${styles.dot} ${cart.length === 0 ? styles.hide : ""}`}></div>
          </li>
          <li className={styles["sign-up"]}>
            {user ? (
              <button className={styles["sign-out-btn"]} onClick={handleLogOut}>Sign Out</button>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
