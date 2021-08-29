module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'object-curly-spacing': [2, 'never'],
        quotes: ['error', 'single'],
        'keyword-spacing': ['error'],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }],
        'space-before-blocks': ['error', 'always'],
        'no-multiple-empty-lines': ['error', {
            max: 1,
        }],
        'no-trailing-spaces': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        'react/prop-types': 'error',
        'react/react-in-jsx-scope': 'off',
        semi: [2, 'always'],
    },
    overrides: [
        {
            files: ['*.js', '*.jsx'],
            rules: {
                indent: ['error', 4, {
                    SwitchCase: 1,
                }],
            },
        },
    ],
};
