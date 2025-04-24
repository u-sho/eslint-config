/**
 * @see https://eslint.style/packages/default
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

'use strict';

const stylisticPlugin = require('@stylistic/eslint-plugin');
const stylisticDefaultRules = require('./rules/default');

/**
 * @typedef {import('@stylistic/eslint-plugin/dist/dts/rule-options').RuleOptions} RuleOptions
 * @typedef {RuleOptions['@stylistic/comma-dangle']} CommaDangleRuleOptions
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 *
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {Omit<StylisticCustomizeOptions, 'commaDangle'>
 *         & {short?: boolean;
 *            printWidth?: number;
 *            tabWidth?:   number;
 *            commaDangle?: CommaDangleRuleOptions;
 *            tsPluginName?:    string;
 *            reactPluginName?: string;
 *           }} options
 * @returns {import('eslint').Linter.Config}
 */
module.exports = (
	formatLogLevel = 'warn',
	{
		short        = false,
		printWidth   = 100,
		tabWidth     = 3,
		arrowParens  = true,
		blockSpacing = true,
		braceStyle   = "1tbs",
		commaDangle  = 'never',
		indent       = 'tab',
		jsx          = true,
		quoteProps   = "consistent-as-needed",
		quotes       = "single",
		semi         = false,
		pluginName      = '@stylistic',
		tsPluginName    = '@typescript-eslint',
		reactPluginName = 'react'
	}
) => {
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
		plugins: { [pluginName]: stylisticPlugin },
		rules
	}
};
