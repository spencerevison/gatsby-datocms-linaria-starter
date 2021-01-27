module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'react-app',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'semi': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-alert': 0,
    'max-len': 0,
    'no-console': 0,
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'spaced-comment': 0,
    'react/no-danger': 0,
    'no-multiple-empty-lines': 0,
    'import/no-anonymous-default-export': 0,
    'no-ignore': 0,
  },
}
