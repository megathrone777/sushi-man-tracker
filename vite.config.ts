import { defineConfig } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint2";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [basicSsl(), eslint(), react(), tsconfigPaths()],
});
