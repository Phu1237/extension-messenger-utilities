import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [vue(), commonjs()],
    server: {
      open: '/ui.html',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      watch: mode === 'development' ? {} : false,
      rollupOptions: {
        input: {
          ui: path.resolve(__dirname, 'ui.html'),
          content: path.resolve(__dirname, 'src/core/content.js'),
          background: path.resolve(__dirname, 'src/core/background.js'),
        },
        output: {
          entryFileNames: '[name].js',
        },
      },
    },
  }
})
