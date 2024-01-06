/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    plugins: [
        plugin(function ({addComponents, theme}) {
            addComponents({
                '.card': {
                    backgroundColor: theme('colors.darkBackground'),
                    boxShadow: theme('boxShadow.sm'),
                },
            });
        }),
    ],
    theme: {
        extend: {
            colors: {
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                darkBackground: '#272A30',
            },
            spacing: {
                header: 'var(--header-height)',
            },
        },
    },
};
