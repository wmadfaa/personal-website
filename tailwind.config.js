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
        'light-mode': { raw: '(prefers-color-scheme: light)' },
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          maxWidth: '100%',
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.100'),
          '[class~="lead"]': {
            color: theme('colors.gray.400'),
          },
          a: {
            color: theme('colors.gray.100'),
          },
          strong: {
            color: theme('colors.gray.100'),
          },
          'ol > li::before': {
            color: theme('colors.gray.500'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.600'),
          },
          hr: {
            borderColor: theme('colors.gray.800'),
          },
          blockquote: {
            color: theme('colors.gray.100'),
            borderLeftColor: theme('colors.gray.800'),
          },
          h1: {
            color: theme('colors.gray.100'),
          },
          h2: {
            color: theme('colors.gray.100'),
          },
          h3: {
            color: theme('colors.gray.100'),
          },
          h4: {
            color: theme('colors.gray.100'),
          },
          'figure figcaption': {
            color: theme('colors.gray.500'),
          },
          code: {
            color: theme('colors.gray.100'),
          },
          pre: {
            color: theme('colors.gray.800'),
            backgroundColor: theme('colors.gray.200'),
          },
          thead: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.700'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.800'),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
