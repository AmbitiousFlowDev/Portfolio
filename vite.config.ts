import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        return path.resolve(
          __dirname,
          "src/assets",
          id.replace("figma:asset/", ""),
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [figmaAssetResolver(), react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  assetsInclude: ["**/*.svg", "**/*.csv"],

  server: {
    open: true,
    port: 5173,
  },

  preview: {
    port: 4173,
  },

  build: {
    target: "es2022",

    outDir: "dist",

    assetsDir: "assets",

    emptyOutDir: true,

    sourcemap: false,

    cssCodeSplit: true,

    reportCompressedSize: true,

    chunkSizeWarningLimit: 1000,

    modulePreload: {
      polyfill: true,
    },

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) {
              return "react";
            }

            if (id.includes("@radix-ui")) {
              return "radix";
            }

            if (id.includes("framer-motion")) {
              return "motion";
            }

            if (id.includes("lucide-react")) {
              return "icons";
            }

            return "vendor";
          }
        },

        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});
