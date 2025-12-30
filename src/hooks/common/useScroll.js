import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook untuk mendeteksi kapan elemen masuk ke viewport (layar).
 * @param {number} threshold - Berapa persen elemen harus terlihat sebelum trigger (0.1 = 10%)
 * @returns {[React.RefObject, boolean]} - Array berisi ref untuk elemen dan status visible
 */
export const useScrollReveal = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const trigger = ref.current;
        
        // Safety check: Pastikan elemen sudah dirender sebelum diamati
        if (!trigger) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // Jika elemen masuk ke layar
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    
                    // PENTING: Matikan observer setelah muncul sekali
                    // Ini mencegah animasi berulang-ulang (flickering) saat scroll naik-turun
                    observer.unobserve(trigger);
                }
            });
        }, { 
            threshold,
            // rootMargin memberikan sedikit offset (misal: animasi mulai 50px sebelum elemen benar-benar muncul)
            rootMargin: "0px 0px -50px 0px" 
        });

        observer.observe(trigger);

        // Cleanup: Hapus observer saat komponen di-unmount agar tidak memakan memori
        return () => {
            if (trigger) observer.unobserve(trigger);
        };
    }, [threshold]); // Re-run effect jika threshold berubah

    // Kembalikan ref (untuk ditempel ke elemen) dan status isVisible (untuk logika CSS class)
    return [ref, isVisible];
};