import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs';
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), commonjs()],
  server: {
    open: '/index.html',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    watch: {},
    commonjsOptions: {
      input: 'src/core/content.js',
      output: {
        file: 'dist/content.js',
        format: 'es'
      }
    },
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        popup: path.resolve(__dirname, 'popup.html'),
        content: path.resolve(__dirname, 'src/core/content.js'),
      },
      output: {
        entryFileNames: '[name].js'
      }
    },
  },
})
