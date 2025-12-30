import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* --- LAYOUTS --- */
import MainLayout from '../layouts/MainLayout';

/* --- PAGES --- */
import Home from '../pages/home/home';
import NotFound from '../pages/NotFound'; // Pastikan file ini ada sesuai struktur folder Anda

/* --- PLACEHOLDER COMPONENTS --- */
/* Note: Komponen ini hanya sementara agar link tidak error (404/Crash).
   Nanti Anda bisa menggantinya dengan import halaman asli, 
   misalnya: import LogicPage from '../pages/logic/LogicPage';
*/
const LogicPage = () => (
    <div style={{ 
        padding: '10rem 2rem', 
        textAlign: 'center', 
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)' 
    }}>
        <h1>[ SYSTEM MODULE: LOGIC ]</h1>
        <p>Analyzing algorithms... (Page Under Construction)</p>
    </div>
);

const DesignPage = () => (
    <div style={{ 
        padding: '10rem 2rem', 
        textAlign: 'center', 
        color: 'var(--text-primary)', 
        fontFamily: 'var(--font-serif)'
    }}>
        <h1>[ SYSTEM MODULE: DESIGN ]</h1>
        <p>Rendering aesthetics... (Page Under Construction)</p>
    </div>
);

const AppRoutes = () => {
    return (
        <Routes>
            {/* Route Utama dengan Layout */}
            <Route path="/" element={<MainLayout />}>
                
                {/* Halaman Depan (Home) */}
                <Route index element={<Home />} />
                
                {/* Halaman Modul (Tujuan Navigasi) */}
                <Route path="logic" element={<LogicPage />} />
                <Route path="design" element={<DesignPage />} />
                
                {/* Halaman Blog (Opsional, jika sudah ada) */}
                {/* <Route path="blog" element={<BlogList />} /> */}
                
            </Route>

            {/* 404 Handler (Halaman Tidak Ditemukan) */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;