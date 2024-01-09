import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        exclude: ['generated'],
    },
    plugins: [
        react(),
        svgr({
            include: '**/*.svg?react',
        }),
    ],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    server: {
        port: 3000,
    },
});
