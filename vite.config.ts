import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      // 页面中注入scss变量，避免在用的页面中重复引入冗余问题
      scss: {
        additionalData: `@import "@/assets/styles/variable.scss";`
      }
    }
  }
})
