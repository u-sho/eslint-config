/**
 * @description `@stylistic/eslint-plugin` rules config by @u-sho.
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
'use strict';

import stylisticPlugin from '@stylistic/eslint-plugin';
import stylisticDefaultRules from './rules/default.js';

/** get stylistic default (`@stylistic/eslint-plugin`) rules config
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
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
 * 	quotes      : 'single',
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
	{
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
	} = {}
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
	if (pluginName !== '@stylistic') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^@stylistic\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}
	if (tsPluginName !== '@typescript-eslint') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^@typescript-eslint\//, `${tsPluginName}/`),
					ruleConfig
				])
		);
	}
	if (reactPluginName !== 'react') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^react\//, `${reactPluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		// @ts-ignore `configs` type of `@stylistic/eslint-plugin` doesn't apply
		plugins: { [pluginName]: stylisticPlugin },
		rules
	}
};
