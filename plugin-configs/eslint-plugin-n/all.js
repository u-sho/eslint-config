/**
 * @see https://github.com/eslint-community/eslint-plugin-n#eslintconfigjs-requires-eslintv8230
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

import nodeRulesDeprecated from './rules/deprecated.js';
import nodeRulesExceptRecommended from './rules/without-recommended.js';
import nodeRulesRecommended from './rules/recommended.js';


import {getPackageJson} from '../../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
	&& 'object' == typeof packageJson
	&& 'type' in packageJson
	&& 'module' === packageJson.type;

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {{short?: boolean; pluginName?: string}} [options={}] - defaults:
 * 	`{short: false, pluginName: 'n'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (logLevel = 'error', {short = false, pluginName = 'n'} = {}) => {
	let rules = {
		...nodeRulesRecommended(logLevel),
		...nodeRulesExceptRecommended(logLevel, {short}),
		...nodeRulesDeprecated()
	};
	if ('' === pluginName) {
		console.warn('`pluginName` is empty. Use default `n`');
	} else if ('n' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^n\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		languageOptions: {
			sourceType: isModule ? 'module' : 'commonjs',
			globals   : {
				...globals.node,
				...globals.es2021,
				__dirname : isModule ? 'off' : 'readonly',
				__filename: isModule ? 'off' : 'readonly',
				exports   : isModule ? 'off' : 'writable',
				module    : isModule ? 'off' : 'readonly',
				require   : isModule ? 'off' : 'readonly'
			}
		},
		plugins: {[pluginName]: nodePlugin},
		rules
	};
};
