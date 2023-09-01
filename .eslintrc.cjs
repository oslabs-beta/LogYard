module.exports = {
  // root: true,
  // env: { browser: true, es2020: true, node: true },
  // extends: [
  //   "airbnb-base"
  // ],
  // // parser: "@babel/eslint-parser",
  // ignorePatterns: ['dist', '.eslintrc.cjs'],
  // parserOptions: { 
  //   ecmaVersion: 'latest', 
  //   sourceType: 'module', 
  //   ecmaFeatures: {
  //     jsx: true,
  //   }
  // },
  // settings: { react: { version: '18.2' } },
  // plugins: ['react-refresh', 'react'],
  // rules: {
  //   'react-refresh/only-export-components': [
  //     'warn',
  //     { allowConstantExport: true },
  //   ],
  //   'no-console': ['error', { allow: ['log', 'error', 'warn'] }],
  //   'no-unused-vars': 'warn', 
  //   'no-param-reassign': 'off',

  // },
  
  
  root: true,
  env: {
    'browser': true,
    'es2021': true,
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  parserOptions: {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  rules: {
    'no-unused-vars': ['off', { 'vars': 'local' }],
    'indent': ['warn', 2],
    'quotes': ['warn', 'single'],
    'prefer-const': 'warn',
    'semi': ['warn', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 'warn'
  },
  settings: {
    'react': {
      'version':  'detect'
    }
  }
  
  
};