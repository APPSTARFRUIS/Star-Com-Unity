
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Cette ligne est CRUCIALE : elle crée un objet process.env vide dans le navigateur
    // pour éviter les plantages des bibliothèques qui le cherchent.
    'process.env': {}
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});