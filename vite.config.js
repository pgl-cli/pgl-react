import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'


/** @type {import('vite').UserConfig} */
 export default {
    server: {
        port: 8989,
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },  
    plugins: [reactRefresh()],
}

