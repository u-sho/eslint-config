/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error') => ({
	// Enforce either `Buffer` or `require("buffer").Buffer`
	'n/prefer-global/buffer': logLevel,

	// Enforce either `console` or `require("console")`
	'n/prefer-global/console': logLevel,

	// Enforce either `process` or `require("process")`
	'n/prefer-global/process': logLevel,

	// Enforce either `TextDecoder` or `require("util").TextDecoder`
	'n/prefer-global/text-decoder': logLevel,

	// Enforce either `TextEncoder` or `require("util").TextEncoder`
	'n/prefer-global/text-encoder': logLevel,

	// Enforce either `URL` or `require("url").URL`
	'n/prefer-global/url': logLevel,

	// Enforce either `URLSearchParams` or `require("url").URLSearchParams`
	'n/prefer-global/url-search-params': logLevel,
});
