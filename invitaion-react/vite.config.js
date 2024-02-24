import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default {
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