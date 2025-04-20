'use strict';

const { globals } = require('globals');

const eslintJs = require('@eslint/js');

const eslintPossibleProblems    = require('./rules/possible-problems');
const eslintLayoutAndFormatting = require('./rules/layout-and-formatting');
const eslintSuggestions         = require('./rules/suggestions');
const eslintDeprecated          = require('./rules/deprecated');

/**
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 *
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {Pick<StylisticCustomizeOptions, 'semi'> & {complexityDepth?: number}} [options]
 * @returns {import('eslint').Linter.Config} 
 */
module.exports = (logLevel = 'error', formatLogLevel = 'warn', {semi = true, complexityDepth = 2}) => ({
	files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
	languageOptions: {
		globals: globals.browser
	},
	plugins: { eslintJs },
	rules: {
		...eslintPossibleProblems(logLevel, formatLogLevel, {semi}),
		...eslintLayoutAndFormatting(formatLogLevel),
		...eslintSuggestions(logLevel, formatLogLevel, {complexityDepth}),
		...eslintDeprecated(),
	}
});
