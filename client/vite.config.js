import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ============================================================
// Vite Configuration
// ------------------------------------------------------------
// - Sets up React plugin
// - Proxies /api requests to Node.js backend on port 5000
//   so you don't need to write full backend URLs in the code
// ============================================================

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Frontend dev server port
    proxy: {
      // Proxy /api/* → http://localhost:5000/api/*
      // This avoids CORS issues during development
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
