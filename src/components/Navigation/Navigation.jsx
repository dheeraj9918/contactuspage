import React from 'react'
import styles from './Navigation.module.css'

const Nevigation = () => {
  return (
    <div className={styles.navbar}>
        <div>
            <img className={styles.imglogo} src="/images/Frame 2 1.png" alt="logo" />
        </div>
        <div>
            <ul className={styles.menulist}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default Nevigation;