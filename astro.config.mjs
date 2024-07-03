import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: 'app.js',
                    assetFileNames: 'assets/[name][extname]',
                },
            },
        },
    },
});
