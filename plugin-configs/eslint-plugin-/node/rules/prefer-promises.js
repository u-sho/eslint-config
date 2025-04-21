/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {{short?: boolean}} [option]
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error') => ({
	// Enforce `require("dns").promises`
	'n/prefer-promises/dns': logLevel,

	// Enforce `require("fs").promises`
	'n/prefer-promises/fs': logLevel,
});
