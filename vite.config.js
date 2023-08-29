import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'


/** @type {import('vite').UserConfig} */
export default {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
    },
  },
  server: {
    port: 8989,
    open: true,
  },
  plugins: [reactRefresh()],
}

