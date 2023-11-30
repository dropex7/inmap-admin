import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        exclude: ['generated'],
    },
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    server: {
        port: 3000,
    },
});
