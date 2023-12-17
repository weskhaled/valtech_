import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetAttributify(),
    presetExtra(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // these will extend the default theme
        sans: [
          {
            name: 'Roboto',
            italic: true,
            weights: ['300', '400', '600', '700', '800'],
          },
        ],
        script: [
          {
            name: 'Kaushan Script',
            italic: false,
            weights: ['400'],
          },
        ],
        mono: [
          {
            name: 'Space Grotesk',
            italic: false,
            weights: ['300', '400', '500'],
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
