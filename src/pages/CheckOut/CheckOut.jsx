import React, { useState } from "react";
import styles from "./checkout.module.css";
import RazorPayButton from "../../components/razorPayButton/RazorPayButton";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cartReducers);

  const getTotalAmount = () => {
    return cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field.trim() !== "");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Checkout</h2>
      <div className={styles.grid}>
        <div className={styles.form}>
          <h3>Billing Details</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Street Address"
            value={formData.address}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className={styles.input}
          />

          <RazorPayButton
            formData={formData}
            isFormValid={isFormValid}
            amount={getTotalAmount()}
            cart={cart}
          />
        </div>

        <div className={styles.summary}>
          <h3 className={styles.summaryTitle}>Order Summary</h3>
          {cart.map((item) => (
            <div key={item.name} className={styles.summaryItem}>
              <span>
                {item.name} x{item.quantity}
              </span>
              <span>${item.quantity * item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
