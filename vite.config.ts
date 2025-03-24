import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dynamicImport from "vite-plugin-dynamic-import";

const getHash = (s: string) =>
  s.split("").reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dynamicImport()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      pages: path.resolve(__dirname, "src/pages"),
      styles: path.resolve(__dirname, "src/styles"),
      types: path.resolve(__dirname, "src/types"),
      stores: path.resolve(__dirname, "src/stores"),
      hooks: path.resolve(__dirname, "src/hooks"),
      helpers: path.resolve(__dirname, "src/helpers"),
      constants: path.resolve(__dirname, "./src/constants"),
    },
  },
  base: "",
  css: {
    modules: {
      generateScopedName: (name, filename, css) => {
        const componentName = filename
          .replace(/\.module\.\w+$/, "")
          .split("/")
          .pop();

        const hash = getHash(css + componentName + name);

        return `${componentName}__${name}__${hash}`;
      },
    },
  },
});
