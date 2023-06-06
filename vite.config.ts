import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

import { visualizer } from 'rollup-plugin-visualizer'

// analyzer
import externalGlobals from 'rollup-plugin-external-globals' // external cdn

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const injectScript = mode === 'development'
    ? ''
    : `<script src="https://cdn.jsdelivr.net/npm/vue@3.2.20/dist/vue.global.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js"></script>`
  return {
    plugins: [vue(), UnoCSS(), createHtmlPlugin({
      inject: {
        data: {
          title: `${env.VITE_APP_TITLE}`,
          injectScript
        }
      }
    }), visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: 'analyzer.html',
      open: true
    })],
    base: './',
    build: {
      rollupOptions: {
        external: ['vue', 'vuex', 'axios', 'vue-router'],
        plugins: [
          externalGlobals({
            vue: 'Vue',
            axios: 'axios'
          })
        ]
      }
    },
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
  }
})
