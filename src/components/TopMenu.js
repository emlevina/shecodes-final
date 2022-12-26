import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import styles from '../styles/TopMenu.module.css'

const TopMenu = () => {
    return (
        <nav className={styles.menu}>
            <Logo />
          <ul  className={styles.links}>
            <li>
              <Link to="/" className={styles.link}>Chart</Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>About Us</Link>
            </li>
          </ul>
        </nav>
    );
};

export default TopMenu;