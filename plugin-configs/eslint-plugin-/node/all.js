/**
 * @see https://github.com/eslint-community/eslint-plugin-n#eslintconfigjs-requires-eslintv8230
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

import globals from 'globals';
import nodePlugin from 'eslint-plugin-n';

import nodeRecommendedRules        from './rules/recommended.js';
import nodeWithoutRecommendedRules from './rules/without-recommended.js';
import nodeDeprecatedRules         from './rules/deprecated.js';


import { getPackageJson } from '../../../lib/util/get-package-json.cjs';
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {{short?: boolean; pluginName?: string}} [options]
 * @returns {import('eslint').Linter.Config} 
 */
export default (logLevel = 'error', {short = false, pluginName = 'n'} = {}) => {
	let rules = {
		...nodeRecommendedRules(logLevel),
		...nodeWithoutRecommendedRules(logLevel, {short}),
		...nodeDeprecatedRules(),
	};
	if (pluginName !== 'n') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^n\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		languageOptions: {
			sourceType: isModule ? 'module' : 'commonjs',
			globals: {
				...globals.node,
				...globals.es2021,
				__dirname : isModule ? 'off' : 'readonly',
				__filename: isModule ? 'off' : 'readonly',
				exports   : isModule ? 'off' : 'writable',
				module    : isModule ? 'off' : 'readonly',
				require   : isModule ? 'off' : 'readonly',
			}
		},
		plugins: {
			[pluginName]: nodePlugin,
		},
		rules
	};
}
