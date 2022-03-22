module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    env: {
        browser: true,
        es2021: true
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {

    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}