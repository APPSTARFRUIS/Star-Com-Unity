
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Permet de garder la compatibilité avec process.env si nécessaire
    'process.env': {}
  }
});
