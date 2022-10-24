/**
 * The ESLint configuration.
 *
 * @author Weixuan Lin
 */

'use strict';

const restrictedGlobals = require('confusing-browser-globals');

const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['fbjs', 'prettier', 'plugin:react/recommended'],
  plugins: [
    'prettier',
    'import',
    'simple-import-sort',
    'no-for-of-loops',
    'no-function-declare-after-return',
    'ft-flow',
    'react',
  ],
  rules: {
    'prettier/prettier': WARNING,
    'no-var': ERROR,
    'no-for-of-loops/no-for-of-loops': ERROR,
    'prefer-const': ERROR,
    'no-function-declare-after-return/no-function-declare-after-return': ERROR,
    'no-restricted-globals': [ERROR].concat(restrictedGlobals),
    'no-useless-computed-key': ERROR,

    // sort imports
    'simple-import-sort/imports': [
      WARNING,
      {
        // The default grouping, but with type imports first as a separate group.
        // See: https://github.com/lydell/eslint-plugin-simple-import-sort/blob/d9a116f71302c5dcfc1581fc7ded8d77392f1924/examples/.eslintrc.js#L122-L133
        groups: [
          // Type imports.
          ['^.*\\u0000$'],
          // Side effect imports
          ['^\\u0000'],
          // Source modules.
          // Anything starting with an upper case letter or './'.
          ['^(\\./)?[A-Z]'],
          // Packages.
          // Anything starting with a lower case letter/'@'/underscore/digit.
          ['^[@_a-z0-9]'],
          // Others.
          ['^'],
        ],
      },
    ],
    // (This helps configure simple-import-sort) Make sure all imports are at the top of the file
    'import/first': WARNING,
    // (This helps configure simple-import-sort) Make sure there's a newline after the imports
    'import/newline-after-import': WARNING,
    // (This helps configure simple-import-sort) Merge imports of the same file
    'import/no-duplicates': WARNING,

    'ft-flow/require-indexer-name': [WARNING, 'always'],
    'ft-flow/require-readonly-react-props': ERROR,
    'ft-flow/no-duplicate-type-union-intersection-members': WARNING,
    'ft-flow/require-types-at-top': WARNING,
    'ft-flow/type-id-match': [WARNING, '^[A-Z]\\w*$'],
  },
  overrides: [
    {
      files: ['src/*'],
      rules: {
        'react/jsx-filename-extension': ['error', {extensions: ['.react.js']}],
        strict: ERROR,
      },
    },
    {
      files: ['index.js'],
      rules: {
        'react/jsx-filename-extension': OFF,
      },
    },
    {
      files: ['setupProxy.js'],
      rules: {
        strict: OFF,
      },
    },
  ],
};
