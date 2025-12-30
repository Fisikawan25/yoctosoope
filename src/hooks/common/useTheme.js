import { useState, useEffect } from 'react';

export const useTheme = () => {
    // Cek localStorage atau preferensi sistem saat load awal
    const getInitialTheme = () => {
        if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches) {
            return 'light';
        }
        return 'dark'; // Default
    };

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        // Manipulasi atribut root HTML agar CSS variables di styles/variables.css bereaksi
        // Kita asumsikan di variables.css Anda mungkin perlu menambahkan selector [data-theme="light"] 
        // jika ingin support toggle manual selain media query.
        document.documentElement.setAttribute('data-theme', theme);
        
        // Opsional: jika Anda menggunakan class based styling
        if (theme === 'light') {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [theme]);

    return { theme, toggleTheme };
};
