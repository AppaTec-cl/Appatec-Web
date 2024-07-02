import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Detectar el entorno (desarrollo o producción)
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/Appatec-Web/' : '/', // Usar '/' para desarrollo y '/Appatec-Web/' para producción
});
