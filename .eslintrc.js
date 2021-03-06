module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
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
    'jsx-max-len',
    'jest',
  ],
  rules: {
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    'no-redeclare': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'func-names': ['error', 'as-needed'],
    'no-param-reassign': 'off',
    'import/no-cycle': [2, { maxDepth: 1 }],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'no-plusplus': 'off',
    semi: ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'no-use-before-define': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
    }],
    'max-len': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'jsx-max-len/jsx-max-len': [
      2,
      {
        lineMaxLength: 120,
        tabWidth: 2,
        maxAttributesPerLine: 4,
      },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/display-name': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'no-continue': 'off',
    'no-empty-function': 'off',
    'no-useless-constructor': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
}
