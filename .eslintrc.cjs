module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'prettier',
        'plugin:prettier/recommended',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:perfectionist/recommended-natural',
        'plugin:tailwindcss/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'react-refresh', 'react','react-hooks', 'perfectionist', 'tailwindcss'],
    rules: {
        'react-refresh/only-export-components': [2, {allowConstantExport: true}],

        '@typescript-eslint/ban-ts-comment': [2],
        '@typescript-eslint/consistent-type-imports': [2],
        '@typescript-eslint/no-namespace': [2],
        '@typescript-eslint/no-unused-vars': [2, {argsIgnorePattern: '^_'}],
        '@typescript-eslint/no-explicit-any': [0],
        '@typescript-eslint/array-type': [
            2,
            {
                default: 'generic',
            },
        ],

        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: 'react',
                        importNames: ['default'],
                        message: "Dont use 'import React from 'react''.",
                    },
                    {
                        name: 'react-router',
                        message: 'Please use import from react-router-dom instead.',
                    },
                ],
            },
        ],

        'react/react-in-jsx-scope': [0],
        'react/display-name': [0],
        'react/prop-types': [0],

        'react-hooks/rules-of-hooks': [2],
        'react-hooks/exhaustive-deps': [2],

        'no-console': [2],
    },
    settings: {
        react: {
            version: 'detect',
        },
        tailwindcss: {
            config: 'tailwind.config.js',
        }
    },
};
