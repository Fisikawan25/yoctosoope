import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScroll';
import { useToast } from '../../context/ToastContext';

// Import komponen-komponen kecil
import HeroSection from '../../components/features/HeroSection';
import SplitContainer from '../../components/features/SplitContainer';
import AboutSection from '../../components/features/AboutSection';
import EquationDisplay from '../../components/features/EquationDisplay';
import ContactSection from '../../components/features/ContactSection';

import styles from './home.module.css';

/**
 * Home Page Component
 * 
 * Main assembler yang mengorkestra semua sub-components.
 * Menghandle scroll reveal logic dan navigation handlers.
 * 
 * Tanggung jawab:
 * - Setup scroll reveal hooks untuk semua sections
 * - Handle mouse tracking untuk spotlight effect
 * - Handle navigation ke pages lain
 * - Mengorganisir layout halaman
 */
const Home = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  // --- SCROLL REVEAL HOOKS ---
  const [heroRef, isHeroVisible] = useScrollReveal(0.1);
  const [splitRef, isSplitVisible] = useScrollReveal(0.1);
  const [aboutRef, isAboutVisible] = useScrollReveal(0.2);
  const [eqVoidRef, isEqVoidVisible] = useScrollReveal(0.2);
  const [contactRef, isContactVisible] = useScrollReveal(0.1);

  // --- SPOTLIGHT MOUSE TRACKING ---
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  // --- NAVIGATION HANDLERS ---
  const handleNav = (path, label) => {
    showToast(`Memuat modul: ${label}...`);
    setTimeout(() => navigate(path), 800);
  };

  const handleToolsClick = () => handleNav('/tools', 'Tools');
  const handleJournalClick = () => handleNav('/journal', 'Journal');

  return (
    <main className={styles.home}>
      {/* Hero Section */}
      <HeroSection 
        heroRef={heroRef}
        isHeroVisible={isHeroVisible}
        onMouseMove={handleMouseMove}
      />

      {/* Split Container (Tools & Journal) */}
      <SplitContainer
        splitRef={splitRef}
        isSplitVisible={isSplitVisible}
        onToolsClick={handleToolsClick}
        onJournalClick={handleJournalClick}
      />

      {/* About Section */}
      <AboutSection
        aboutRef={aboutRef}
        isAboutVisible={isAboutVisible}
      />

      {/* Equation Display (Slideshow) */}
      <section ref={eqVoidRef} className={`${styles.eqVoidWrapper} ${isEqVoidVisible ? styles.visible : ''}`}>
        <EquationDisplay />
      </section>

      {/* Contact Section */}
      <ContactSection
        contactRef={contactRef}
        isContactVisible={isContactVisible}
      />
    </main>
  );
};

export default Home;
