import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Ini memberitahu Vite: "Setiap kali ketemu '@', arahkan ke folder 'src'"
      '@': path.resolve(__dirname, './src'),
    },
  },
});
