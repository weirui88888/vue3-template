import { defineConfig, presetAttributify, presetUno, presetWebFonts } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetRemToVw from './src/preset-rem-to-vw'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetRemToVw(),
    presetUno({
      variablePrefix: 'butter-',
      attributifyPseudo: true
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Indie Flower'
      }
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
