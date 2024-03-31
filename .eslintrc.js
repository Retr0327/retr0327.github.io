module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'newline-per-chained-call': 'off',
    'import/extensions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-closing-bracket-location': 'off',
    '@typescript-eslint/method-signature-style': ['error', 'property'],
    '@typescript-eslint/no-loop-func': 'off',
    'no-console': ['error'],
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
};
