import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), commonjs()],
  server: {
    open: '/dashboard.html',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    watch: {},
    rollupOptions: {
      input: {
        dashboard: path.resolve(__dirname, 'dashboard.html'),
        popup: path.resolve(__dirname, 'popup.html'),
        content: path.resolve(__dirname, 'src/core/content.js'),
        background: path.resolve(__dirname, 'src/core/background.js'),
      },
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
})
