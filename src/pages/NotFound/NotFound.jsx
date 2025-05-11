import React from 'react';
import styles from './not_found.module.css';
import { Link } from 'react-router-dom';

function NotFound() {
 

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to={"/"} className={styles.button} >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
