/**
 * @see https://eslint.org/docs/latest/use/getting-started#manual-set-up
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


import globals from 'globals';

import eslintJs from '@eslint/js';

import eslintDeprecated          from './rules/deprecated.js';
import eslintLayoutAndFormatting from './rules/layout-and-formatting.js';
import eslintPossibleProblems    from './rules/possible-problems.js';
import eslintSuggestions         from './rules/suggestions.js';

import {getPackageJson} from '../../../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
                 && 'object' === typeof packageJson
                 && 'type' in packageJson
                 && 'module' === packageJson.type;

/**
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 * @typedef {Readonly<
 * 	Pick<StylisticCustomizeOptions, 'semi'|'jsx'> & {complexityDepth?: number}
 * >} JsConfigOptions
 *
 * @typedef {import('eslint').Linter.Config<import('eslint/rules').ESLintRules>} Config
 * @typedef {Required<Pick<Config, 'languageOptions'|'plugins'|'rules'>>} JsConfig
 */

/**
 * @param {import('eslint').Linter.RuleSeverity} [      logLevel='error'] default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']  default:`'warn'`
 * @param {JsConfigOptions} [options={}] default:`{semi: true, jsx: false, complexityDepth: Infinity}`
 * @returns {Required<Pick<Config, 'languageOptions'|'plugins'|'rules'>>}
 */
export default (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{semi = true, jsx = false, complexityDepth = Infinity} = {}
) => ({
	languageOptions: {
		...jsx ? {parserOptions: {ecmaFeatures: {jsx: true}}} : {},

		ecmaVersion: 'latest',

		globals: {
			...globals.browser,
			...globals.node,
			...globals.es2021,
			__dirname : isModule ? 'off' : 'readonly',
			__filename: isModule ? 'off' : 'readonly',
			exports   : isModule ? 'off' : 'writable',
			module    : isModule ? 'off' : 'readonly',
			require   : isModule ? 'off' : 'readonly'
		},
		sourceType: isModule ? 'module' : 'commonjs'
	},
	plugins: {eslintJs},
	rules  : {
		...eslintPossibleProblems(logLevel, formatLogLevel, {semi}),
		...eslintLayoutAndFormatting(formatLogLevel),
		...eslintSuggestions(logLevel, formatLogLevel, {complexityDepth}),
		...eslintDeprecated()
	}
});
