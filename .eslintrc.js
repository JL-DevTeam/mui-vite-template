module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
  settings: {
    react: {
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect',
    },
  },
};
