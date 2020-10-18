module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      screens: {
        'dark-mode': { raw: '(prefers-color-scheme: dark)' },
        'light-mode': { raw: '(prefers-color-scheme: light)' }
      }
    },
  },
  variants: {
  },
  plugins: [
  ],
}
