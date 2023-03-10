import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
              <Link to='/'>Home</Link>
            </li>
            <li className={styles.item}>
              <Link to='/empresa'>empresa</Link>
            </li>
            <li className={styles.item}>
              <Link to='/contato'>Contato</Link>
            </li>
          </ul>
    );
}

export default Navbar;