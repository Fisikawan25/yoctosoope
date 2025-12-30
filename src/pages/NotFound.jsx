import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-primary)',
            textAlign: 'center',
            fontFamily: 'var(--font-mono)',
            padding: '2rem'
        }}>
            {/* Header Error dengan gaya minimalis */}
            <h1 style={{ 
                fontSize: 'clamp(4rem, 15vw, 8rem)', 
                margin: 0, 
                color: 'var(--accent-color)',
                textShadow: '0 0 20px var(--accent-color)'
            }}>
                404
            </h1>
            
            <h2 className="serif" style={{ 
                fontSize: '1.5rem', 
                fontWeight: '400',
                marginBottom: '2rem' 
            }}>
                [ ENTROPY INCREASED: PAGE LOST ]
            </h2>

            <p style={{ 
                maxWidth: '500px', 
                color: 'var(--text-muted)', 
                lineHeight: '1.6',
                marginBottom: '3rem'
            }}>
                Koordinat ruang-waktu yang Anda tuju tidak ditemukan dalam database sistem. 
                Kemungkinan halaman telah terhapus atau pindah ke dimensi lain.
            </p>

            {/* Tombol kembali ke Beranda */}
            <button 
                onClick={() => navigate('/')}
                style={{
                    background: 'none',
                    border: '1px solid var(--accent-color)',
                    color: 'var(--accent-color)',
                    padding: '1rem 2rem',
                    cursor: 'pointer',
                    letterSpacing: '2px',
                    transition: 'all 0.3s ease',
                    fontFamily: 'var(--font-mono)',
                    textTransform: 'uppercase'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--accent-color)';
                    e.target.style.color = 'var(--bg-color)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = 'var(--accent-color)';
                }}
            >
                REBOOT TO HOME
            </button>
        </div>
    );
};

// WAJIB: Ini adalah baris yang menyelesaikan error "doesn't provide an export named default"
export default NotFound;