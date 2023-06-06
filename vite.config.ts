import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  server: {
    host: true,
    port: 8686,
    open: true
  },
  resolve: {
    // 别名，这边添加完之后，需要在tsconfig.json中path进行配置
    alias: {
      '@': resolve(__dirname, './src'),
      '@comps': resolve(__dirname, './src/components')
    }
  },
  css: {
    preprocessorOptions: {
      // 页面中注入scss变量，避免在用的页面中重复引入冗余问题
      scss: {
        additionalData: '@import "@/assets/styles/variable.scss";'
      }
    }
  }
})
