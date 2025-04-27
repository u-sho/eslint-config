/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Enforce `require("dns").promises`
	'n/prefer-promises/dns': logLevel,

	// Enforce `require("fs").promises`
	'n/prefer-promises/fs': logLevel,
});
