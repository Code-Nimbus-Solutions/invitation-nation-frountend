import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default {
  plugins: [react()],
  server: {
    host: "192.168.68.112",
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: "src/main.jsx", // Adjust the path accordingly
    },
  },
};