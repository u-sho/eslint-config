/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/#best-practices
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error') => ({
	// Require a `eslint-enable` comment for every `eslint-disable` comment
	'eslint-comments/disable-enable-pair': [logLevel, {allowWholeFile: false}],

	// Disallow a `eslint-enable` comment for multiple `eslint-disable` comments
	'eslint-comments/no-aggregating-enable': 0,
   // I think that this rule enforces unnecessary complexity.

	// Disallow duplicate `eslint-disable` comments
	'eslint-comments/no-duplicate-disable': logLevel,

	// Disallow `eslint-disable` comments without rule names
	'eslint-comments/no-unlimited-disable': logLevel,

	// Disallow unused `eslint-disable` comments
	'eslint-comments/no-unused-disable': logLevel,
   // I think this and the below rules are replaced by linterOptions

	// Disallow unused `eslint-enable` comments
	'eslint-comments/no-unused-enable': logLevel
});
