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
    'import-notation': 'string',
    'max-empty-lines': 1,
    'block-opening-brace-space-before': 'always',
    'block-closing-brace-empty-line-before': ['never'],
    'selector-class-pattern': null
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.md', 'analyzer.html'],
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
