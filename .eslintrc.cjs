module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "airbnb-base"
  ],
  // parser: "@babel/eslint-parser",
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': ['error', { allow: ['log', 'error', 'warn'] }],
    'no-unused-vars': 'warn', 
    'no-param-reassign': 'off',

  },
}
