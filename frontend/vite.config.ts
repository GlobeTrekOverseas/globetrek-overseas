import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

/**
 * Copies dist/index.html to dist/404.html. Vercel serves 404.html (with a real
 * 404 status) for any URL that doesn't match a rewrite in vercel.json, and the
 * React app then renders the NotFound page.
 */
const spa404 = (): Plugin => ({
  name: "spa-404",
  apply: "build",
  closeBundle() {
    const out = path.resolve(__dirname, "dist");
    const index = path.join(out, "index.html");
    if (fs.existsSync(index))
      fs.copyFileSync(index, path.join(out, "404.html"));
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    spa404(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Long-lived vendor chunks: they change rarely, so browsers keep them cached across deploys.
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
}));
