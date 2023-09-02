module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "import/no-unresolved": "off",
    "no-console": "warn",
    "prefer-const": "error",
    "indent": ["warn", 4],
    "max-len": ["error", {"code": 120}],
    "comma-dangle": ["error", "always-multiline"],
    "semi": "error",
    "import/named": "off",
  },
}
