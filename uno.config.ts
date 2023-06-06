import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetRemToPx(),
    presetUno({
      variablePrefix: 'butter-',
      attributifyPseudo: true
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
