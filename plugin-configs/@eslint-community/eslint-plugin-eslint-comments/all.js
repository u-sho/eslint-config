/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');

const   bestPracticeRules = require('./rules/best-practices');
const stylisticIssueRules = require('./rules/stylistic-issues');

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {{pluginName?: string}} [options]
 * @returns {import('eslint').Linter.Config} 
 */
module.exports = (logLevel = 'error', {pluginName = '@eslint-community/eslint-comments'}) => {
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
