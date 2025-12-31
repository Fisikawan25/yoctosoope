import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { AppRoutes } from '@/routes/AppRoutes';
import { ToastProvider } from '@/context/ToastContext'; 
import './assets/styles/variables.css'; 
import './assets/styles/typography.css'; 
import './assets/styles/global.css';     // Pastikan urutan: var -> typo -> global

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Menambahkan future flags untuk menghilangkan peringatan v7 */}
    <BrowserRouter 
      future={{ 
        v7_startTransition: true, 
        v7_relativeSplatPath: true 
      }}
    >
      <ToastProvider>
        <AppRoutes />
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);
