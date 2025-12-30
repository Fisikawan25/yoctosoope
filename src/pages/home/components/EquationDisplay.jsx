import React, { useState, useEffect } from 'react';
import { EQUATIONS_DATA } from '../../utils/stringhelpers';
import styles from '../../pages/home/home.module.css';

/**
 * EquationDisplay Component
 * 
 * Menampilkan slideshow persamaan fisika dengan fade in/out effect.
 * Mengelola logika animasi dan state untuk equation index.
 * 
 * Props:
 *   - none (menggunakan EQUATIONS_DATA dari utils)
 * 
 * State:
 *   - eqIndex: index persamaan saat ini
 *   - isEqActive: kontrol class .active untuk CSS animation
 */
const EquationDisplay = () => {
  const [eqIndex, setEqIndex] = useState(0);
  const [isEqActive, setIsEqActive] = useState(false);

  useEffect(() => {
    // Munculkan rumus pertama dengan delay sedikit
    const initTimer = setTimeout(() => setIsEqActive(true), 100);

    // Loop animasi persamaan
    const interval = setInterval(() => {
      // A. Trigger Fade Out
      setIsEqActive(false);

      // B. Tunggu transisi CSS (800ms) selesai sebelum ganti data
      setTimeout(() => {
        setEqIndex((prev) => (prev + 1) % EQUATIONS_DATA.length);
        // C. Trigger Fade In
        setIsEqActive(true);
      }, 800);
    }, 5000); // Ganti persamaan setiap 5 detik

    return () => {
      clearTimeout(initTimer);
      clearInterval(interval);
    };
  }, []);

  const currentEq = EQUATIONS_DATA[eqIndex];

  return (
    <section className={`${styles.eqVoid} ${isEqActive ? styles.active : ''}`}>
      <p className={styles.eqTitle}>{currentEq.name}</p>
      <p className={styles.eqFormula}>{currentEq.formula}</p>
      <p className={styles.eqDescription}>{currentEq.description}</p>
    </section>
  );
};

export default EquationDisplay;

