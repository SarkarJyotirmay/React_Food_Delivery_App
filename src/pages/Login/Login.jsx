/* eslint-disable no-unused-vars */
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../auth/firebase";
import styles from "./login.module.css";
import { toast } from "react-toastify";

const auth = getAuth(app);

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const userDetails = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userDetails.user;
      setMessage({ type: "success", text: "Login successful!" });
      setForm({
        email: "",
        password: "",
      });
      notify();
      navigate("/"); // Redirect after login
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    }
  }

  const notify = () =>
    toast("Logged-in Successfully !", {
      position: "top-center",
      type: "success",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        <p className={styles.footerText}>
          Don't have an account?{" "}
          <Link to="/signup" className={styles.link}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
