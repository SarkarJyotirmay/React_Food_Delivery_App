import React from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.logoSection}>
          <h2>Dine Dash</h2>
          <p>Delivering happiness to your door.</p>
        </div>

        <div className={styles.linksSection}>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/"}>Menu</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h4>Contact Us</h4>
          <p>Email: support@dinedash.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>

        <div className={styles.socialSection}>
          <h4>Follow Us</h4>
          <div className={styles.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <p className={styles.copyright}>
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
