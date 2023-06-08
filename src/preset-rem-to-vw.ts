import type { Preset } from '@unocss/core'

const remRE = /(-?[\.\d]+)rem/g

export interface RemToVmOptions {
  baseDivisor?: number
  precision?: number
}

const preciseNumber = (num: number, precision: number) => {
  return Number.parseFloat(num.toFixed(precision))
}

export default function remToVwPreset(options: RemToVmOptions = {}): Preset {
  const {
    baseDivisor = 375,
    precision = 4
  } = options

  return {
    name: '@unocss/preset-rem-to-vw',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (typeof value === 'string' && remRE.test(value)) {
          i[1] = value.replace(remRE, (_, p1) => `${preciseNumber(p1 * 4 * 100 / baseDivisor, precision)}vw`)
        }
      })
    }
  }
}
