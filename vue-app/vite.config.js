import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },

  /*
  // 在這裡添加代理設置
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // Spring Boot 端口
        changeOrigin: true,
        secure: false,
      },
    },
  },
  */

})