const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        header: 'var(--header-height)',
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities, addComponents, theme}) {
      const newUtilities = {
        '.h-screen-safe': {
          height: 'calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom))',
          'padding-left': 'env(safe-area-inset-left)',
          'padding-right': 'env(safe-area-inset-right)',
        },
        '.fill-transparent': {
          '& svg': {
            fill: 'transparent !important',
            stroke: 'currentColor !important',
          },
        },
        '.stroke-transparent': {
          '& svg': {
            fill: 'currentColor !important',
            stroke: 'transparent !important',
          },
        },
        '.full-svg': {
          '& > svg': {
            width: '100%',
            height: '100%',
          },
        },
        '.container-fluid': {
          width: '100%',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
        },
      };

      addComponents({
        '.card': {
          boxShadow: theme('boxShadow.lg'),
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
        },
      });

      addUtilities(newUtilities, ['responsive', 'hover']);
    }),
  ],
};
