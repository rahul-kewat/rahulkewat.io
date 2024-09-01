// .vitepress/vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: 'esbuild', // Use 'terser' for more advanced minification options so that it becomes difficult for scrapping
    chunkSizeWarningLimit: 1000, // Adjust chunk size limit if necessary
  },
  plugins: [
    // Add any Vite plugins here if needed
  ],
});