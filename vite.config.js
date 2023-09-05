import {defineConfig} from "vite";
import path from "path";

export default defineConfig({
  server: {
    open: "./dev.html",
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "./index.js"),
      name: "PDFViewer",
      formats: ["es"],
      fileName: (format) => `pdf-viewer.js`,
    },
    outDir: "./dist/",
    emptyOutDir: true,
  },
});
