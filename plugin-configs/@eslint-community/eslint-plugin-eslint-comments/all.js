/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

const   bestPracticeRules = require('./rules/best-practices');
const stylisticIssueRules = require('./rules/stylistic-issues');

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @param {{pluginName?: string}} options default:`{pluginName:'@eslint-community/eslint-comments'}`
 * @returns {import('eslint').Linter.Config} 
 */
module.exports = (formatLogLevel = 'warn', {pluginName = '@eslint-community/eslint-comments'} = {}) => {
	/** @type {import('eslint').Linter.StringSeverity} */
	const logLevel = formatLogLevel === 0
	               ? 'off'
	               : formatLogLevel === 1
	               ? 'warn'
	               : formatLogLevel === 2
	               ? 'error'
	               : formatLogLevel;

	let rules = {
		...bestPracticeRules(formatLogLevel),
      ...stylisticIssueRules(formatLogLevel),
	};
	if (pluginName !== 'eslint-comments') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^eslint-comments\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		linterOptions: {
			noInlineConfig: logLevel !== 'off',
			reportUnusedDisableDirectives: logLevel,
			reportUnusedInlineConfigs: logLevel,
		},
		plugins: {
			[pluginName]: eslintCommentsPlugin,
		},
		rules
	};
}
