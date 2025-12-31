import React from 'react';
import SplitPanel from '@/components/ui/SplitPanel.jsx';
import styles from '../../pages/home/home.module.css';

/**
 * SplitContainer Component
 * 
 * Container untuk Tools dan Journal panels.
 * Mengelola layout dan rendering panel dengan data array.
 * 
 * Props:
 *   - splitRef: ref untuk scroll reveal
 *   - isSplitVisible: boolean untuk visibility state
 *   - onToolsClick: handler ketika Tools panel diklik
 *   - onJournalClick: handler ketika Journal panel diklik
 */
const SplitContainer = ({ 
  splitRef, 
  isSplitVisible, 
  onToolsClick, 
  onJournalClick 
}) => {
  // Data untuk split panels
  const panels = [
    {
      id: 'tools',
      number: '01',
      title: 'ALAT',
      description: 'Kalkulator, Simulasi, & Eksperimen Kode.',
      gradientId: 'grad-tools',
      onClick: onToolsClick,
      icon: '🧮',
    },
    {
      id: 'journal',
      number: '02',
      title: 'JURNAL',
      description: 'Opini, Catatan Belajar, & Filosofi.',
      gradientId: 'grad-journal',
      onClick: onJournalClick,
      icon: '📚',
    },
  ];

  return (
    <section
      ref={splitRef}
      className={`${styles.splitContainer} ${isSplitVisible ? styles.visible : ''}`}
    >
      {panels.map((panel) => (
        <SplitPanel
          key={panel.id}
          number={panel.number}
          title={panel.title}
          description={panel.description}
          gradientId={panel.gradientId}
          onClick={panel.onClick}
        >
          <span className={styles.panelIcon}>{panel.icon}</span>
        </SplitPanel>
      ))}
    </section>
  );
};

export default SplitContainer;
