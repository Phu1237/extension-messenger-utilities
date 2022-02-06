module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    webextensions: true,
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
