import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const path = require("path");
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  optimizeDeps: {
    exclude: ["generated"],
  },
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  },
});
