/**
 * @description `@stylistic/eslint-plugin` rules config by @u-sho.
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */
/* eslint @stylistic/curly-newline        : ['warn', 'always']     -- this has low statements. */


import stylisticPlugin from '@stylistic/eslint-plugin';

import stylisticDefaultRules from './rules/default.js';

/** Get stylistic default (`@stylistic/eslint-plugin`) rules config
 * @param {import('./rules/types').RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {import('./rules/types').CustomizeOptions
 *         & {tsPluginName?: string, reactPluginName?: string}} [options = {}] - defaults:
 * ```javascript
 * {
 * 	short       : false,
 * 	printWidth  : 100,
 * 	tabWidth    : 3,
 * 	arrowParens : true,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	jsx         : false,
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',\
 * 	semi        : true,
 *
 * 	pluginName     : '@stylistic',
 * 	tsPluginName   : '@typescript-eslint',
 * 	reactPluginName: 'react'
 * }
 * ```
 * @returns {import('eslint').Linter.Config}
 */
export default (
	formatLogLevel = 'warn',
	{/* eslint-disable @stylistic/no-multi-spaces */
		short        = false,
		printWidth   = 100,
		tabWidth     = 3,
		arrowParens  = true,
		blockSpacing = true,
		braceStyle   = '1tbs',
		commaDangle  = 'never',
		indent       = 'tab',
		jsx          = false,
		quoteProps   = 'consistent-as-needed',
		quotes       = 'single',
		semi         = true,

		pluginName      = '@stylistic',
		tsPluginName    = '@typescript-eslint',
		reactPluginName = 'react'
	} = {} /* eslint-enable @stylistic/no-multi-spaces */
) => {
	/** @type {import('eslint').Linter.RulesRecord} */
	let rules = stylisticDefaultRules(formatLogLevel, {
		short,
		printWidth,
		tabWidth,
		arrowParens,
		blockSpacing,
		braceStyle,
		commaDangle,
		indent,
		jsx,
		quoteProps,
		quotes,
		semi
	});
	if ('@stylistic' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^@stylistic\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}
	if ('@typescript-eslint' !== tsPluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^@typescript-eslint\//u, `${tsPluginName}/`),
					ruleConfig
				])
		);
	}
	if ('react' !== reactPluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^react\//u, `${reactPluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		// @ts-ignore `configs` type of `@stylistic/eslint-plugin` doesn't apply
		plugins: {[pluginName]: stylisticPlugin},
		rules
	};
};
