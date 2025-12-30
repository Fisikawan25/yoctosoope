import React from 'react';
import styles from '../../pages/home/home.module.css';

/**
 * HeroSection Component
 * 
 * Bagian hero dengan spotlight effect dan deskripsi awal.
 * 
 * Props:
 *   - heroRef: ref untuk scroll reveal
 *   - isHeroVisible: boolean untuk visibility state
 *   - onMouseMove: callback untuk spotlight tracking
 */
const HeroSection = ({ heroRef, isHeroVisible, onMouseMove }) => {
  return (
    <section
      ref={heroRef}
      className={`${styles.hero} ${isHeroVisible ? styles.visible : ''}`}
      onMouseMove={onMouseMove}
    >
      <div className={styles.spotlightOverlay} />
      <h1 className={styles.heroTitle}>Arsip Digital</h1>
      <p className={styles.heroSubtitle}>
        Sebuah arsip digital alat simulasi fisika dan jurnal pemikiran mahasiswa.
      </p>
    </section>
  );
};

export default HeroSection;
