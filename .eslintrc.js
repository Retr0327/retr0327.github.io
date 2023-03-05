module.exports = {
  extends: ['mantine', 'plugin:@next/next/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-pascal-case': 'off',
    'no-console': ['error'],
  },
  ignorePatterns: ['.eslintrc.js', 'next.config.js'],
};
