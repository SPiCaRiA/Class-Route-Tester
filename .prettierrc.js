/**
 * The Prettier configuration.
 *
 * @author Weixuan Lin
 */

'use strict';

module.exports = {
  arrowParens: 'avoid',
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  jsxBracketSameLine: true,
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'flow',
      },
    },
    {
      files: '*.md',
      options: {
        printWidth: 80,
      },
    },
  ],
};
