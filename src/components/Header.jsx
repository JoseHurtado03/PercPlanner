import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from '../CSS/Header.module.css';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.barra}>
      <FaBars className={styles.menuIcon} onClick={toggleMenu} />
      <div className={`${styles.menu} ${menuOpen ? styles.show : ''}`}>
        <Link to={'/homePage'} className={styles.text} onClick={toggleMenu}>Inicio</Link>
        <Link to={'/repertoire'} className={styles.text} onClick={toggleMenu}>Repertorio</Link>
        <Link to={'/profile'} className={styles.text} onClick={toggleMenu}>Perfil</Link>
        <Link to={'/'}>
          <button className={styles.button} onClick={toggleMenu}>Cerrar Sesión</button>
        </Link>
      </div>
    </div>
  );
}
