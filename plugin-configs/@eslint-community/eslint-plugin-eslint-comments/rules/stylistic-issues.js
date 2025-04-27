/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/#best-practices
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (formatLogLevel = 'warn') => ({
	// Disallow `eslint-disable` comments about specific rules
	'eslint-comments/no-restricted-disable': [formatLogLevel, '*', '!no-console'],

	// Disallow ESLint directive-comments
	'eslint-comments/no-use': formatLogLevel,

	// Require include descriptions in ESLint directive-comments
	'eslint-comments/require-description': formatLogLevel
});
