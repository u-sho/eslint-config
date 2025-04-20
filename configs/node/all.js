'use strict';

const { globals } = require('globals');
const nodePlugin = require('eslint-plugin-n');

const nodeRecommendedRules        = require('./rules/recommended');
const nodeWithoutRecommendedRules = require('./rules/without-recommended');
const nodeDeprecatedRules         = require('./rules/deprecated');


const { getPackageJson } = require('../../utils/get-package-json');
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
module.exports = (logLevel = 'error', {short = false, pluginName = 'n'}) => {
	let rules = {
		...nodeRecommendedRules(logLevel),
		...nodeWithoutRecommendedRules(logLevel, {short}),
		...nodeDeprecatedRules(logLevel),
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
				__dirname:  isModule ? 'off' : 'readonly',
				__filename: isModule ? 'off' : 'readonly',
				exports:    isModule ? 'off' : 'writable',
				module:     isModule ? 'off' : 'readonly',
				require:    isModule ? 'off' : 'readonly',
			}
		},
		plugins: {
			[pluginName]: nodePlugin,
		},
		rules
	};
}
