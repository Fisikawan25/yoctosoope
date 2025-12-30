import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useToast } from '@context';
import '../assets/styles/global.css'; // Memastikan variabel warna & font global termuat

const MainLayout = () => {
    // 1. Ambil data toast global
    const { toast } = useToast();
    
    // 2. Deteksi perubahan lokasi (URL) untuk memicu animasi
    const location = useLocation();

    // --- LOGIC: AUTOMATIC PAGE TRANSITION ---
    // Efek ini membuat layar berkedip estetik (CRT effect) setiap kali halaman berganti
    useEffect(() => {
        const overlay = document.getElementById('transitionOverlay');
        if (overlay) {
            // Reset animasi agar bisa diputar ulang
            overlay.classList.remove('active');
            
            // Trik 'Reflow' agar browser menyadari adanya restart animasi
            void overlay.offsetWidth; 
            
            // Mulai animasi
            overlay.classList.add('active');
            
            // Hapus kelas aktif setelah durasi transisi selesai (sesuai CSS, misal 0.5s)
            const timer = setTimeout(() => {
                overlay.classList.remove('active');
            }, 500);

            return () => clearTimeout(timer);
        }
    }, [location]); // Dijalankan setiap kali 'location' berubah

    return (
        <>
            {/* --- 1. GLOBAL ATMOSPHERE --- */}
            {/* Texture bintik-bintik untuk kesan analog */}
            <div className="noise-overlay"></div>
            
            {/* Overlay transisi (dikontrol otomatis oleh useEffect di atas) */}
            <div className="crt-overlay" id="transitionOverlay"></div>
            
            {/* --- 2. GLOBAL NOTIFICATION SYSTEM --- */}
            {/* Toast muncul mengambang di atas semua konten */}
            <div className={`system-toast ${toast.active ? 'active' : ''}`} id="systemToast">
                <span className="toast-icon">ⓘ</span>
                <span className="mono" id="toastMessage">{toast.message}</span>
            </div>

            {/* --- 3. MAIN CONTENT AREA --- */}
            {/* Outlet adalah tempat halaman Home, Tools, atau Blog dirender */}
            <div className="viewport-wrapper">
                <Outlet />
            </div>

            {/* --- 4. GLOBAL FOOTER --- */}
            <footer className="footer mono">
                &copy; {new Date().getFullYear()} Physics Student Portfolio. Designed with precision.
            </footer>
        </>
    );
};

export default MainLayout;
