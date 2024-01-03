import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      assets: path.resolve(__dirname, './src/assets'),
      widgets: path.resolve(__dirname, './src/widgets'),
      shared: path.resolve(__dirname, './src/shared'),
      features: path.resolve(__dirname, './src/features'),
      pages: path.resolve(__dirname, './src/pages'),
    },
  }
});
