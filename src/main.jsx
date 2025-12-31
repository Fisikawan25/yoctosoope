import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/* --- COMPONENTS --- */
import AppRoutes from './app/AppRoutes';

/* --- CONTEXT --- */
// PENTING: Import Provider ini agar useToast di Home.jsx tidak error
import { ToastProvider } from '@/context';

/* --- STYLES --- */
// Import style global agar variabel CSS dan font terbaca
import '@/styles/variables.css';
import '@/styles/typography.css';
import '@/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 1. Bungkus dengan ToastProvider paling luar (atau di dalam Router) */}
    <ToastProvider>
      {/* 2. Bungkus dengan BrowserRouter untuk routing */}
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>
);
