/**
 * @description `@stylistic/eslint-plugin` rules config by @u-sho.
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */


import stylisticPlugin from '@stylistic/eslint-plugin';

import stylisticDefaultRules from './rules/default.js';

/** Get stylistic default (`@stylistic/eslint-plugin`) rules config
 * @param {import('./rules/types.js').RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {Readonly<
 * 	import('./rules/types.js').CustomizeOptions & {tsPluginName?: string, reactPluginName?: string}
 * >} [options = {}] - default:
 * ```javascript
 * {
 * 	short     : false,
 * 	printWidth: 100,
 * 	  tabWidth: 3,
 *
 * 	arrowParens : false,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	jsx         : false,
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',
 * 	semi        : true,
 *
 * 	     pluginName: '@stylistic',
 * 	   tsPluginName: '@typescript-eslint',
 * 	reactPluginName: 'react'
 * }
 * ```
 * @returns {import('eslint').Linter.Config}
 */
export default (
	formatLogLevel = 'warn',
	{
		short        = false,
		printWidth   = 100,
		tabWidth     = 3,
		arrowParens  = false,
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
	} = {}
) => {
	if ('' === pluginName) throw new Error('`pluginName` is an empty string. Use like `@stylistic`.');

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

	if ('' === tsPluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.filter( ([ruleName, _ruleConfig]) => !ruleName.startsWith('@typescript-eslint/') )
		);
	} else if ('@typescript-eslint' !== tsPluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^@typescript-eslint\//u, `${tsPluginName}/`),
					ruleConfig
				])
		);
	}

	if ('' === reactPluginName) {
		if (jsx) console.warn('`jsx` is `true`, but `react` plugin name is empty string.');

		rules = Object.fromEntries(
			Object
				.entries(rules)
				.filter( ([ruleName, _ruleConfig]) => !ruleName.startsWith('react/') )
		);
	} else if ('react' !== reactPluginName) {
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
		plugins: {[pluginName]: stylisticPlugin},
		rules
	};
};
