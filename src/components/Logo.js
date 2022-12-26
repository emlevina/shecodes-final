import React from 'react';
import styles from '../styles/Logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src="/img/logo.png" alt="Logo" className={styles.logoImg}/>
            <h1 className={styles.logoText}>Company</h1>
        </div>
    );
};

export default Logo;