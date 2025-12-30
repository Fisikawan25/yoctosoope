import React, { createContext, useContext, useState, useCallback } from 'react';

// 1. Buat Context (Wadah data)
const ToastContext = createContext();

// 2. Buat Provider (Penyedia data untuk seluruh aplikasi)
export const ToastProvider = ({ children }) => {
    const [toast, setToast] = useState({ message: '', active: false });

    // Fungsi ini yang nanti dipanggil dari Home.jsx
    const showToast = useCallback((msg) => {
        setToast({ message: msg, active: true });
        
        // Timer otomatis mati setelah 3 detik
        setTimeout(() => {
            setToast((prev) => ({ ...prev, active: false }));
        }, 3000);
    }, []);

    return (
        <ToastContext.Provider value={{ toast, showToast }}>
            {children}
        </ToastContext.Provider>
    );
};

// 3. Custom Hook agar mudah dipanggil
export const useToast = () => useContext(ToastContext);