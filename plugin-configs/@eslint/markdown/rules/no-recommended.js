/**
 * @see https://github.com/eslint/markdown#rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default: `'error'`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Disallow duplicate headings in the same document
	'markdown/no-duplicate-headings': logLevel,

	// Disallow HTML tags
	'markdown/no-html': [logLevel, {allowed: ['details', 'summary']}]
});
