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
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {{pluginName?: string}} options default:`{pluginName:'@eslint-community/eslint-comments'}`
 * @returns {import('eslint').Linter.Config} 
 */
module.exports = (logLevel = 'error', {pluginName = '@eslint-community/eslint-comments'} = {}) => {
	let rules = {
		...bestPracticeRules(logLevel),
      ...stylisticIssueRules(logLevel),
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
		plugins: {
			[pluginName]: eslintCommentsPlugin,
		},
		rules
	};
}
