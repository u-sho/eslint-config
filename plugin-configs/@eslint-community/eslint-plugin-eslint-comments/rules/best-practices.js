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
module.exports = (formatLogLevel = 'warn') => ({
	// Require a `eslint-enable` comment for every `eslint-disable` comment
	'eslint-comments/disable-enable-pair': [formatLogLevel, {allowWholeFile: false}],

	// Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
	'eslint-comments/no-aggregating-enable': 0,
   // I think that this rule enforces unnecessary complexity.

	// Disallow duplicate `eslint-disable` comments
	'eslint-comments/no-duplicate-disable': formatLogLevel,

	// Disallow `eslint-disable` comments without rule names
	'eslint-comments/no-unlimited-disable': formatLogLevel,

	// Disallow unused `eslint-disable` comments
	'eslint-comments/no-unused-disable': formatLogLevel,
   // I think this and the below rules are replaced by linterOptions

	// Disallow unused `eslint-enable` comments
	'eslint-comments/no-unused-enable': formatLogLevel
});
