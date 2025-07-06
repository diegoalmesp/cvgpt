import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    chunkSizeWarningLimit: 1000, // Set the limit in KB (default is 500 KB)
  },
});
