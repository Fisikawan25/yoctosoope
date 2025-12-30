import React from 'react';
import styles from '../../../pages/home/home.module.css';

/**
 * SplitPanel Component (Reusable Card Component)
 * 
 * Komponen untuk menampilkan panel dengan gradient border dan deskripsi.
 * Digunakan untuk "Tools" dan "Journal" sections.
 * 
 * Props:
 *   - number: nomor panel (untuk display)
 *   - title: judul panel (e.g., "ALAT", "JURNAL")
 *   - description: deskripsi singkat
 *   - gradientId: ID unik untuk SVG gradient (e.g., "grad-tools", "grad-journal")
 *   - onClick: callback function ketika card diklik
 *   - children: SVG icon atau konten lainnya
 */
const SplitPanel = ({ 
  number, 
  title, 
  description, 
  gradientId, 
  onClick, 
  children 
}) => {
  return (
    <div 
      className={styles.splitPanel}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* SVG Gradient Border */}
      <svg
        className={styles.panelBorder}
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(50, 184, 198, 0.5)" />
            <stop offset="100%" stopColor="rgba(33, 128, 141, 0.5)" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="400"
          height="300"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="2"
        />
      </svg>

      {/* Content */}
      <div className={styles.panelContent}>
        <span className={styles.panelNumber}>{number}</span>
        <h3 className={styles.panelTitle}>{title}</h3>
        <p className={styles.panelDescription}>{description}</p>
        
        {/* Icon dari props */}
        {children}
      </div>
    </div>
  );
};

export default SplitPanel;
