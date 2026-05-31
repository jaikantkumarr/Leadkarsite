import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import type { PluginOption } from "vite";

const isReplit =
  process.env.REPL_ID !== undefined && process.env.NODE_ENV !== "production";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;
const basePath = process.env.BASE_PATH ?? "/";

async function getReplitPlugins(): Promise<PluginOption[]> {
  if (!isReplit) return [];
  try {
    const [errorModal, cartographer, devBanner] = await Promise.all([
      import("@replit/vite-plugin-runtime-error-modal"),
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);
    return [
      errorModal.default(),
      cartographer.cartographer({ root: path.resolve(import.meta.dirname, "..") }),
      devBanner.devBanner(),
    ];
  } catch {
    return [];
  }
}

const replitPlugins = await getReplitPlugins();

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...replitPlugins],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
