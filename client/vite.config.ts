import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components/ui"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
    // alias: [
    //   { find: "@", replacement: path.resolve(__dirname, "./src") },
    //   { find: "@components", replacement: path.resolve(__dirname, "./src/components/ui") },
    //   { find: "@pages", replacement: path.resolve(__dirname, "./src/pages") },
    //   { find: "@hooks", replacement: path.resolve(__dirname, "./src/hooks") },
    //   { find: "@lib", replacement: path.resolve(__dirname, "./src/lib") },
    //   { find: "@assets", replacement: path.resolve(__dirname, "./src/assets") },
    // ],
  },
});
