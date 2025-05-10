import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// 1️⃣ import the auto-import plugin here:
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(async () => ({
  root: path.resolve(process.cwd(), "client"),

  plugins: [
    react(),
    // 2️⃣ then insert AutoImport immediately after:
    AutoImport({
      imports: [
        {
          // automatically inject:
          //   import React from 'react'
          //   import { useState, useEffect, ... } from 'react'
          react: [
            ["default", "React"],
            "useState",
            "useEffect",
            "useCallback",
            "useMemo",
            "useContext",
            // add any other hooks or APIs you commonly use…
          ],
        },
      ],
      // generate a d.ts file inside your client folder
      dts: path.resolve(process.cwd(), "client", "auto-imports.d.ts"),
      // optional: scan .tsx/.ts/.vue/... for usages
      eslintrc: {
        enabled: true,           // <-- if you want an ESLint config
        filepath: "./.eslintrc-auto-import.json",
        globalsPropValue: true,
      },
    }),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID
      ? [
          (await import("@replit/vite-plugin-cartographer")).cartographer(),
        ]
      : []),
  ],

  resolve: {
    alias: {
      "@":       path.resolve(process.cwd(), "client/src"),
      "@shared": path.resolve(process.cwd(), "shared"),
      "@assets": path.resolve(process.cwd(), "attached_assets"),
    },
  },

  build: {
    outDir:      path.resolve(process.cwd(), "dist/public"),
    emptyOutDir: true,
  },
}));
