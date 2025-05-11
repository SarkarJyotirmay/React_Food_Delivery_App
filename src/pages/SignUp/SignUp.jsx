import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../../auth/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./sign_up.module.css"
import { toast } from "react-toastify";

const auth = getAuth(app);

function SignUp() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  function handleChange(e){
    const {name, value} = e.target
    setForm((prev)=>{
        return {...prev, [name] : value}
    })
  }

 async function handleSubmit(e){
    e.preventDefault()
    try {
        const userDetails = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
    )
    const user = userDetails.user
    notify()
    setMessage({ type: "success", text: "Registration successful!" });
    } catch (error) {
        setMessage({ type: "error", text: error.message});
    }
 }

 const notify = () =>
     toast ("Signed Up Successfully !", {
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
        <h2 className={styles.heading}>Sign Up</h2>
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
          Register
        </button>
        <p className={styles.footerText}>
          Already have an account?{" "}
          <Link to="/login" className={styles.link}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
