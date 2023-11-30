/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    plugins: [
        plugin(function ({addComponents, theme}) {
            addComponents({
                '.card': {
                    backgroundColor: theme('colors.white'),
                    borderRadius: theme('borderRadius.lg'),
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
            },
        },
    },
};
