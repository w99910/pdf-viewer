import {defineConfig} from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, './index.ts'),
            name: 'js-utils',
            formats: ['es'],
            fileName: (format) => `js-utils.js`
        },
        outDir: "./dist/",
        emptyOutDir: true,
    }
});
