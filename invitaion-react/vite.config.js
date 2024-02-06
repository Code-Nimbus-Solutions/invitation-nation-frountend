// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// // vite.config.js
// export default {
//   // other Vite configuration options

//   optimizeDeps: {
//     findEntry: "src/main.jsx", // Specify the directory where Vite should look for the entry point
//   },
// };

// vite.config.js
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// export default defineConfig({
//   // other Vite configuration options
//   plugins: [react()],
//   optimizeDeps: {
//     findEntry: "src/main.jsx", // Specify the directory where Vite should look for the entry point
//   },
// });
export default {
  plugins: [react()],
  server: {
    host: "192.168.68.104",
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: "src/main.jsx", // Adjust the path accordingly
    },
  },
};
