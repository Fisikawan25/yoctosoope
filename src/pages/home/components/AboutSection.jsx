import React from 'react';
import styles from '../../pages/home/home.module.css';

/**
 * AboutSection Component
 * 
 * Bagian tentang filosofi dan pendekatan.
 * 
 * Props:
 *   - aboutRef: ref untuk scroll reveal
 *   - isAboutVisible: boolean untuk visibility state
 */
const AboutSection = ({ aboutRef, isAboutVisible }) => {
  return (
    <section
      ref={aboutRef}
      className={`${styles.aboutSection} ${isAboutVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.aboutTitle}>Filosofi</h2>
      
      <blockquote className={styles.aboutQuote}>
        "Sama seperti fisika yang mencoba menjelaskan kompleksitas alam semesta dengan 
        persamaan yang elegan, kode yang baik harus mampu menyederhanakan masalah rumit 
        menjadi antarmuka yang indah."
      </blockquote>

      <p className={styles.aboutContent}>
        Saya menggabungkan prinsip{' '}
        <strong>First Principles Thinking</strong> dari fisika dengan{' '}
        <strong>User-Centered Design</strong>.
      </p>

      <p className={styles.aboutClosure}>
        Setiap piksel memiliki tujuan, setiap baris kode memiliki fungsi.
      </p>
    </section>
  );
};

export default AboutSection;
