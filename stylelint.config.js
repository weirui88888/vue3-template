module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  customSyntax: 'postcss-html',
  rules: {
    'color-named': 'never',
    'color-hex-length': 'long',
    'declaration-block-trailing-semicolon': null,
    'selector-id-pattern': null,
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['include', 'mixin']
    }],
    'max-empty-lines': 1,
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-empty-line-before': ['never']
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.md'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue', 'stylelint-config-recess-order'],
      rules: {}
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue', 'stylelint-config-recess-order']
    }
  ]
}
