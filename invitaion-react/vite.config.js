import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 8000,
  },
  build: {
    rollupOptions: {
      input: "src/main.jsx", // Adjust the path accordingly
    },
  },
};
