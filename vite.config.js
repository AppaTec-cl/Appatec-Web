import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Appatec-Web/', // Asegúrate de que esto sea correcto
});
