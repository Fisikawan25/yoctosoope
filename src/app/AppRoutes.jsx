import React from 'react';
import { Routes, Route } from 'react-router-dom';

/* --- LAYOUTS --- */
import { MainLayout } from '@/layouts';

/* --- PAGES --- */
import { Home } from '@/pages/home';
import { LogicPage } from '@/pages/logic';
import { DesignPage } from '@/pages/design';
import { NotFound } from '@/pages';

/**
 * AppRoutes Component
 * 
 * Defines the routing structure dan navigation map untuk seluruh aplikasi.
 * 
 * Route Mapping:
 * - "/" → Home page
 * - "/logic" → Logic & Algorithms page
 * - "/design" → Design & Aesthetics page
 * - "*" → Not Found (404) page
 * 
 * Setiap route dibungkus dengan MainLayout untuk konsistensi UI.
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Logic Route */}
        <Route path="/logic" element={<LogicPage />} />

        {/* Design Route */}
        <Route path="/design" element={<DesignPage />} />

        {/* Catch-all untuk 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
