import { defineConfig, presetAttributify, presetUno } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno({
      variablePrefix: 'butter-',
      attributifyPseudo: true
    })
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()]
})
