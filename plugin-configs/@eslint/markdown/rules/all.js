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
	// Require languages for fenced code blocks
	'markdown/fenced-code-language': logLevel,

	// Enforce heading levels increment by one
	'markdown/heading-increment': logLevel,

	// Disallow duplicate headings in the same document
	'markdown/no-duplicate-headings': logLevel,

	// Disallow empty links
	'markdown/no-empty-links': logLevel,

	// Disallow HTML tags
	'markdown/no-html': 0,

	// Disallow invalid label references
	'markdown/no-invalid-label-refs': logLevel,

	// Disallow missing label references
	'markdown/no-missing-label-refs': logLevel
});
