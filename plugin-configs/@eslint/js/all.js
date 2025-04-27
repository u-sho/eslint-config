/**
 * @see https://eslint.org/docs/latest/use/getting-started#manual-set-up
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

const globals = require('globals');
const eslintJs = require('@eslint/js');

const eslintPossibleProblems    = require('./rules/possible-problems');
const eslintLayoutAndFormatting = require('./rules/layout-and-formatting');
const eslintSuggestions         = require('./rules/suggestions');
const eslintDeprecated          = require('./rules/deprecated');

const { getPackageJson } = require('../../../lib/util/get-package-json');
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 *
 * @param {import('eslint').Linter.RuleSeverity} [      logLevel='error'] default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']  default:`'warn'`
 * @param {Pick<StylisticCustomizeOptions, 'semi'|'jsx'>
 *         & {complexityDepth?: number}} options default:`{semi:true,jsx:false,complexityDepth:2}`
 * @returns {import('eslint').Linter.Config<import('eslint/rules').ESLintRules>}
 */
module.exports = (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{semi = true, jsx = false, complexityDepth = 2} = {}
) => ({
	languageOptions: {
		ecmaVersion: 'latest',
		sourceType: isModule ? 'module' : 'commonjs',
		globals: {
			...globals.browser,
			...globals.node,
			...globals.es2021,
			__dirname:  isModule ? 'off' : 'readonly',
			__filename: isModule ? 'off' : 'readonly',
			exports:    isModule ? 'off' : 'writable',
			module:     isModule ? 'off' : 'readonly',
			require:    isModule ? 'off' : 'readonly',
		},
		...jsx ? {parserOptions: {ecmaFeatures: {jsx: true}}} : {},
	},
	plugins: { eslintJs },
	rules: {
		...eslintPossibleProblems(logLevel, formatLogLevel, {semi}),
		...eslintLayoutAndFormatting(formatLogLevel),
		...eslintSuggestions(logLevel, formatLogLevel, {complexityDepth}),
		...eslintDeprecated(),
	}
});
