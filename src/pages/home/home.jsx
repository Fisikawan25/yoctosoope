import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'; // Pastikan file CSS bernama home.module.css

// Import Utilities & Hooks
import { EQUATIONS_DATA } from '../../utils/stringhelpers'; 
import { useScrollReveal } from '../../hooks/useScroll';
import { useToast } from '../../context/ToastContext';

const Home = () => {
    const { showToast } = useToast();
    const navigate = useNavigate();

    // --- 1. LOGIC: EQUATION SLIDESHOW (Fixed Parameter) ---
    const [eqIndex, setEqIndex] = useState(0);
    const [isEqActive, setIsEqActive] = useState(false); // Mengontrol kelas .active CSS

    useEffect(() => {
        // Init: Munculkan rumus pertama dengan delay sedikit
        const initTimer = setTimeout(() => setIsEqActive(true), 100);

        // Loop Animasi
        const interval = setInterval(() => {
            // A. Trigger Fade Out (Hapus kelas .active)
            setIsEqActive(false);

            // B. Tunggu durasi transisi CSS (800ms) selesai, baru ganti data
            setTimeout(() => {
                setEqIndex((prev) => (prev + 1) % EQUATIONS_DATA.length);
                // C. Trigger Fade In (Tambah kelas .active)
                setIsEqActive(true);
            }, 800); // Waktu ini sinkron dengan transition-duration di CSS
        }, 5000); // Ganti setiap 5 detik

        return () => {
            clearTimeout(initTimer);
            clearInterval(interval);
        };
    }, []);

    const currentEq = EQUATIONS_DATA[eqIndex];

    // --- 2. LOGIC: SCROLL REVEAL (CSS Class Based) ---
    const [heroRef, isHeroVisible] = useScrollReveal(0.1);
    const [splitRef, isSplitVisible] = useScrollReveal(0.1);
    const [aboutRef, isAboutVisible] = useScrollReveal(0.2);
    const [eqVoidRef, isEqVoidVisible] = useScrollReveal(0.2);
    const [contactRef, isContactVisible] = useScrollReveal(0.1);

    // --- 3. LOGIC: SPOTLIGHT MOUSE TRACKING ---
    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    // --- 4. NAVIGATION HANDLERS ---
    const handleNav = (path, label) => {
        showToast(`Memuat modul: ${label}...`);
        setTimeout(() => navigate(path), 800);
    };

    const handleExternalLink = (url, label) => {
        showToast(`Membuka protokol komunikasi: ${label}...`);
        setTimeout(() => window.open(url, '_blank'), 800);
    };

    return (
        <div className={styles.homeWrapper}>
            
            {/* ================= HERO SECTION ================= */}
            <section 
                ref={heroRef} 
                className={`${styles.hero} ${isHeroVisible ? styles.isVisible : ''}`}
            >
                <div className={styles.heroContent}>
                    <div className={`${styles.heroMeta} mono`}>
                        <span>~</span><span className={styles.pathSep}>/</span>
                        <span>physics</span><span className={styles.pathSep}>/</span>
                        <span>portfolio</span><span className={styles.cursorBlink}></span>
                    </div>
                    <h1 className={`${styles.heroTitle} serif`}>
                        Bridging <span className="italic">Reality</span><br/>with Digital Logic.
                    </h1>
                    <p className={`${styles.heroDesc} mono`}>
                        Sebuah arsip digital alat simulasi fisika dan jurnal pemikiran mahasiswa.
                    </p>
                    
                    <div className={styles.heroEquation}>
                        <span className="math-flow">
                            &rho; ( &part;v&#8407;/&part;t + v&#8407; &sdot; &nabla;v&#8407; ) = &minus;&nabla;p + &mu;&nabla;&sup2;v&#8407; + f&#8407;
                        </span>
                    </div>
                </div>
            </section>

            {/* ================= SPLIT CONTAINER (TOOLS & JOURNAL) ================= */}
            <main 
                ref={splitRef} 
                className={`${styles.splitContainer} ${isSplitVisible ? styles.isVisible : ''}`}
            >
                {/* Panel 01: ALAT */}
                <div className={styles.splitPanel} onMouseMove={handleMouseMove} onClick={() => handleNav('/tools', 'Alat Fisika')}>
                    <div className={`${styles.panelNum} mono`}>01</div>
                    <svg className={styles.panelIllustration} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="viridisTools" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--grad-1)" />
                                <stop offset="50%" stopColor="var(--grad-2)" />
                                <stop offset="100%" stopColor="var(--grad-3)" />
                            </linearGradient>
                        </defs>
                        <path className={styles.wavePath1} d="M0,100 Q50,0 100,100 T200,100" fill="none" stroke="url(#viridisTools)" strokeWidth="1.5" />
                        <path className={styles.wavePath2} d="M0,100 Q50,200 100,100 T200,100" fill="none" stroke="url(#viridisTools)" strokeWidth="1.5" />
                    </svg>
                    
                    <div className={styles.panelContent}>
                        <h2 className={`${styles.panelTitle} serif`}>ALAT</h2>
                        <p className={`${styles.panelDesc} mono`}>Kalkulator, Simulasi, & Eksperimen Kode.</p>
                        <button className={`${styles.panelCta} mono`}>AKSES MODUL <span className={styles.nablaIcon}>∇</span></button>
                    </div>
                </div>

                {/* Panel 02: JURNAL */}
                <div className={styles.splitPanel} onMouseMove={handleMouseMove} onClick={() => handleNav('/blog', 'Jurnal & Opini')}>
                    <div className={`${styles.panelNum} mono`}>02</div>
                    <svg className={styles.panelIllustration} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="viridisJournal" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--grad-3)" />
                                <stop offset="50%" stopColor="var(--grad-2)" />
                                <stop offset="100%" stopColor="var(--grad-1)" />
                            </linearGradient>
                        </defs>
                        <ellipse className={styles.orbitPath1} cx="100" cy="100" rx="80" ry="25" fill="none" stroke="url(#viridisJournal)" strokeWidth="1.5" />
                        <ellipse className={styles.orbitPath2} cx="100" cy="100" rx="80" ry="25" fill="none" stroke="url(#viridisJournal)" strokeWidth="1.5" transform="rotate(90 100 100)" />
                        <circle cx="100" cy="100" r="4" fill="var(--accent-color)" opacity="0.8" />
                    </svg>

                    <div className={styles.panelContent}>
                        <h2 className={`${styles.panelTitle} serif`}>JURNAL</h2>
                        <p className={`${styles.panelDesc} mono`}>Opini, Catatan Belajar, & Filosofi.</p>
                        <button className={`${styles.panelCta} mono`}>BACA JURNAL <span className={styles.nablaIcon}>∇</span></button>
                    </div>
                </div>
            </main>

            {/* ================= ABOUT SECTION ================= */}
            <section 
                ref={aboutRef}
                // Menggunakan CSS Module Class agar style terpanggil
                className={`${styles.aboutSection} ${isAboutVisible ? styles.isVisible : ''}`}
            >
                <div className={styles.aboutContent}>
                    <span className={`${styles.sectionTag} mono`}>// THE OBSERVER</span>
                    <h2 className={`${styles.aboutTitle} serif`}>Philosophy of Code</h2>
                    <p className={`${styles.aboutQuote} serif`}>
                        "Sama seperti fisika yang mencoba menjelaskan kompleksitas alam semesta dengan persamaan yang elegan, 
                        <em> kode yang baik harus mampu menyederhanakan masalah rumit menjadi antarmuka yang indah.</em>"
                    </p>
                    <p className={`${styles.aboutText} mono`}>
                        Saya menggabungkan prinsip <strong>First Principles Thinking</strong> dari fisika dengan <strong>User-Centered Design</strong>.
                        Setiap piksel memiliki tujuan, setiap baris kode memiliki fungsi.
                    </p>
                </div>
            </section>

            {/* ================= EQUATION VOID (SLIDESHOW FIX) ================= */}
            <section 
                ref={eqVoidRef}
                className={`${styles.equationVoid} ${isEqVoidVisible ? styles.isVisible : ''}`}
            >
                {/* KEY FIX: Menggunakan kelas .active dari CSS Module.
                   Animasi sekarang dihandle oleh CSS (transition: all 0.8s cubic-bezier...)
                   yang didefinisikan di home.module.css
                */}
                <div 
                    className={`${styles.equationDisplay} ${isEqActive ? styles.active : ''}`}
                    style={{
                        backgroundImage: currentEq.grad,
                        filter: `drop-shadow(0 0 15px ${currentEq.shadow})`
                    }}
                    dangerouslySetInnerHTML={{ __html: currentEq.tex }}
                />
            </section>

            {/* ================= CONTACT SECTION ================= */}
            <section 
                ref={contactRef}
                className={`${styles.contactSection} ${isContactVisible ? styles.isVisible : ''}`}
            >
                <h3 className={`${styles.contactTitle} serif`}>Initiate Communication Protocol</h3>
                <div className={styles.contactGrid}>
                    <button className={`${styles.contactLink} mono`} onClick={() => handleExternalLink('mailto:email@example.com', 'Email')}>
                        <svg className={styles.iconSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                        <span>EMAIL</span>
                    </button>
                    
                    <button className={`${styles.contactLink} mono`} onClick={() => handleExternalLink('https://linkedin.com', 'LinkedIn')}>
                         <svg className={styles.iconSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        <span>LINKEDIN</span>
                    </button>
                    
                    <button className={`${styles.contactLink} mono`} onClick={() => handleExternalLink('https://github.com', 'GitHub')}>
                        <svg className={styles.iconSvg} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        <span>GITHUB</span>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Home;