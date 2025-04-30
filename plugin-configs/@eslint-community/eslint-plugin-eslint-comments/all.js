/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent']       -- good to understand. */
/* eslint @stylistic/curly-newline        : ['warn', 'always']      -- this has low statements. */

/* eslint @stylistic/multiline-ternary: 'off' -- prefer the immutable declaration. */
/* eslint no-nested-ternary           : 'off' -- prefer the immutable declaration. */


import eslintCommentsPlugin from '@eslint-community/eslint-plugin-eslint-comments';

import bestPracticeRules from './rules/best-practices.js';
import stylisticIssueRules from './rules/stylistic-issues.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @param {{pluginName?: string}} options default:`{pluginName:'@eslint-community/eslint-comments'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (formatLogLevel = 'warn', {pluginName = '@eslint-community/eslint-comments'} = {}) => {
	let rules = {
		...bestPracticeRules(formatLogLevel),
		...stylisticIssueRules(formatLogLevel)
	};
	if ('eslint-comments' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^eslint-comments\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	/** @type {import('eslint').Linter.StringSeverity} */
	const logLevel = 0 === formatLogLevel ? 'off'  /* eslint-disable @stylistic/indent */
	               : 1 === formatLogLevel ? 'warn'
	               : 2 === formatLogLevel ? 'error'
	               : formatLogLevel;               /* eslint-enable @stylistic/indent */

	return {
		linterOptions: {
			noInlineConfig               : 'off' !== logLevel,
			reportUnusedDisableDirectives: logLevel,
			reportUnusedInlineConfigs    : logLevel
		},
		plugins: {
			[pluginName]: eslintCommentsPlugin
		},
		rules
	};
};
