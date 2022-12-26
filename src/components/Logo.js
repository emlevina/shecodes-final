import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Logo.module.css'

const Logo = () => {
    return (
        <Link to='/' className={styles.logo}>
            <img src="/img/logo.png" alt="Logo" className={styles.logoImg} />
            <h1 className={styles.logoText}>Company</h1>
        </Link>
    );
};

export default Logo;