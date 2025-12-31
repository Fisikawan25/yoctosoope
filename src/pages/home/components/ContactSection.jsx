import React from 'react';
import { useToast } from '../../context/ToastContext';
import styles from '../../pages/home/home.module.css';

/**
 * ContactSection Component
 * 
 * Menampilkan bagian kontak dengan tombol sosial media.
 * Menggunakan array data untuk rendering dinamis (eliminating hardcoded buttons).
 * 
 * Props:
 *   - contactRef: ref untuk scroll reveal
 *   - isContactVisible: boolean untuk visibility state
 */
const ContactSection = ({ contactRef, isContactVisible }) => {
  const { showToast } = useToast();

  // Data struktur untuk tombol kontak
  const contactLinks = [
    {
      id: 'email',
      label: 'Email',
      url: 'mailto:your-email@example.com',
      icon: '📧',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: 'https://github.com/yourprofile',
      icon: '💻',
    },
  ];

  const handleContactClick = (url, label) => {
    showToast(`Membuka protokol komunikasi: ${label}...`);
    setTimeout(() => window.open(url, '_blank'), 800);
  };

  return (
    <section
      ref={contactRef}
      className={`${styles.contactSection} ${isContactVisible ? styles.visible : ''}`}
    >
      <h2 className={styles.contactTitle}>Hubungi Saya</h2>
      <p className={styles.contactSubtitle}>Mari berdiskusi tentang fisika dan teknologi</p>

      {/* Contact Buttons - Rendered from array */}
      <div className={styles.contactButtonsContainer}>
        {contactLinks.map((link) => (
          <button
            key={link.id}
            className={styles.contactButton}
            onClick={() => handleContactClick(link.url, link.label)}
          >
            <span className={styles.contactIcon}>{link.icon}</span>
            <span className={styles.contactLabel}>{link.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
