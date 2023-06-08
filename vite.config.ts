import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'

// import legacy from '@vitejs/plugin-legacy'
import { createHtmlPlugin } from 'vite-plugin-html'
import { visualizer } from 'rollup-plugin-visualizer'

// analyzer
import externalGlobals from 'rollup-plugin-external-globals' // external cdn

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const injectScript = mode === 'development'
    ? ''
    : `<script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.prod.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/axios@1.4.0/dist/axios.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/vue-demi@0.13.1/lib/index.iife.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/pinia@2.1.3/dist/pinia.iife.min.js"></script>`
  return {
    plugins: [
      vue(),
      UnoCSS(),
      createHtmlPlugin({
        inject: {
          data: {
            title: `${env.VITE_APP_TITLE}`,
            injectScript
          }
        }
      }),
      visualizer({
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: 'analyzer.html',
        open: true
      })
      // legacy({ // 低版本兼容
      //   targets: ['defaults', 'iOS >= 14']
      // })
    ],
    base: './',
    build: {
      rollupOptions: {
        output: {
          // 拆包
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
        },
        plugins: [
          // 避免将这些文件打包到bundle中，使用cdn的方式
          externalGlobals({
            vue: 'Vue',
            axios: 'axios',
            pinia: 'Pinia'
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
