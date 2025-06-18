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
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {import('./all.js').JsConfigOptions} [options={}] - default:`{semi:true, jsx:false, complexityDepth:Infinity}`
 * @returns {import('./all.js').JsConfig}
 */
export default (
	formatLogLevel = 'warn',
	{semi = true, jsx = false, complexityDepth = Infinity} = {}
) => ({
	languageOptions: {
		parserOptions: {
			ecmaFeatures: {
				impliedStrict: true,
				jsx
			}
		},

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
		...eslintPossibleProblems(0, formatLogLevel, {semi}),
		...eslintLayoutAndFormatting(formatLogLevel),
		...eslintSuggestions(0, formatLogLevel, {complexityDepth}),
		...eslintDeprecated()
	}
});
