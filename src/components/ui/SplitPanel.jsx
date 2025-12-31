import React from 'react';
/* Import CSS Module yang baru dibuat */
import styles from './SplitPanel.module.css';

/**
 * SplitPanel Component (Reusable Card Component)
 * * Komponen UI independen untuk menampilkan panel interaktif.
 * Style sekarang terisolasi di SplitPanel.module.css
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
        {/* Menggunakan class panelNumber sesuai CSS baru */}
        <span className={styles.panelNumber}>{number}</span>
        
        <h3 className={styles.panelTitle}>{title}</h3>
        
        {/* Menggunakan class panelDescription sesuai CSS baru */}
        <p className={styles.panelDescription}>{description}</p>
        
        {/* Icon/Children */}
        {children}
      </div>
    </div>
  );
};

export default SplitPanel;
