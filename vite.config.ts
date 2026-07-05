import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: false,
    watch: {
      ignored: ['**/dist/**', '**/node_modules/**', '**/.git/**', '**/SPA-SULTANA-main.zip'],
    },
  },
});
