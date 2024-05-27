import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagemin({
      quality: 80,
      progressive: true,
    }),
  ],
  assetsInclude: ["**/*.JPG"],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    chunkSizeWarningLimit: 1000, // Αύξηση του ορίου για να αποφύγουμε τις προειδοποιήσεις
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Δημιουργία ξεχωριστού chunk για τα node_modules
          }
        },
      },
    },
  },
});
