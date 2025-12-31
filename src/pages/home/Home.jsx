import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/common';
import { useToast } from '@/context';

// Import komponen-komponen per-section dari folder components
import { 
  HeroSection, 
  SplitContainer, 
  AboutSection, 
  EquationDisplay, 
  ContactSection 
} from './components';

import styles from './home.module.css';

/**
 * Home Page Component
 * * Main assembler yang mengorkestra semua sub-components.
 * Menghandle scroll reveal logic dan navigation handlers.
 */
const Home = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();

  // --- SCROLL REVEAL HOOKS ---
  // Threshold 0.1 berarti animasi mulai saat 10% elemen masuk layar
  const [heroRef, isHeroVisible] = useScrollReveal(0.1);
  const [splitRef, isSplitVisible] = useScrollReveal(0.1);
  const [aboutRef, isAboutVisible] = useScrollReveal(0.2);
  const [eqVoidRef, isEqVoidVisible] = useScrollReveal(0.2);
  const [contactRef, isContactVisible] = useScrollReveal(0.1);

  // --- SPOTLIGHT MOUSE TRACKING ---
  // Efek cahaya mengikuti mouse (jika didukung CSS)
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  // --- NAVIGATION HANDLERS ---
  const handleNav = (path, label) => {
    showToast(`Memuat modul: ${label}...`);
    // Delay sedikit agar user sempat melihat feedback toast/animasi
    setTimeout(() => navigate(path), 800);
  };

  const handleToolsClick = () => handleNav('/tools', 'Tools');
  const handleJournalClick = () => handleNav('/journal', 'Journal');

  return (
    // PERBAIKAN: Gunakan styles.homeWrapper sesuai definisi di CSS Module
    <main className={styles.homeWrapper}>
      
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

      {/* Equation Display (Slideshow Rumus) */}
      <section 
        ref={eqVoidRef} 
        className={`${styles.equationVoid} ${isEqVoidVisible ? styles.visible : ''}`}
      >
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
