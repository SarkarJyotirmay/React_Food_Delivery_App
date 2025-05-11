import React, { useState } from "react";
import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

// icons
import { IoIosSearch } from "react-icons/io";
import { LuShoppingBag } from "react-icons/lu";
import { HiMenu, HiX } from "react-icons/hi"; // for hamburger and close icon

import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { app } from "../../auth/firebase";
import { clearUser } from "../../store/slices/authSlice";

const auth = getAuth(app)


function Header() {
  const [menu, setmenu] = useState("Home"); // for having the active link styling
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // state for hamburger menu
  
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

        {/* Hamburger Toggle */}
        <div className={styles.hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <HiX className={styles.cross} size={25} /> : <HiMenu size={25} />}
        </div>

         <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.showMenu : ""}`}>
        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li onClick={() => setmenu("Home")}>
            <Link className={menu === "Home" ? styles.active : ""} to="/">Home</Link>
          </li>
          <li onClick={() => setmenu("About")}>
            <Link className={menu === "About" ? styles.active : ""} to="/about">About</Link>
          </li>
          <li onClick={() => setmenu("Contact")}>
            <Link className={menu === "Contact" ? styles.active : ""} to="/contact">Contact</Link>
          </li>
        </ul>

        {/* Right Section */}
        <ul className={styles.navActions}>
          <li className={styles.cart}>
            <Link to="/cart">
              <LuShoppingBag className={styles["cart-logo"]}/>
            </Link>
            <div className={`${styles.dot} ${cart.length === 0 ? styles.hide : ""}`}></div>
          </li>
          <li className={styles["sign-up"]}>
            {user ? (
              <p  onClick={handleLogOut}>Sign Out</p>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
