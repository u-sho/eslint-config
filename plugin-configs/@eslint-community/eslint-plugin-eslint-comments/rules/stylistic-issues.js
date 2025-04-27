/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/#best-practices
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error') => ({
	// Disallow `eslint-disable` comments about specific rules
	'eslint-comments/no-restricted-disable': [logLevel, '*', '!no-console'],

	// Disallow ESLint directive-comments
	'eslint-comments/no-use': logLevel,

	// Require include descriptions in ESLint directive-comments
	'eslint-comments/require-description': logLevel
});
