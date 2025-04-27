/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/#best-practices
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default: `'error'`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Require languages for fenced code blocks	yes
	'markdown/fenced-code-language': logLevel,
	
	// Enforce heading levels increment by one	yes
	'markdown/heading-increment': logLevel,

	// Disallow duplicate headings in the same document	no
	'markdown/no-duplicate-headings': logLevel,

	// Disallow empty links	yes
	'markdown/no-empty-links': logLevel,

	// Disallow HTML tags	no
	'markdown/no-html': 0,

	// Disallow invalid label references	yes
	'markdown/no-invalid-label-refs': logLevel,

	// Disallow missing label references	yes
	'markdown/no-missing-label-refs': logLevel
});
