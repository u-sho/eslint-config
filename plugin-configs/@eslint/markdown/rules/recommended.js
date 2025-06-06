/**
 * @see https://github.com/eslint/markdown#rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error', formatLogLevel = 'warn') => ({
	// Require languages for fenced code blocks
	'markdown/fenced-code-language': logLevel,

	// Enforce heading levels increment by one
	'markdown/heading-increment': logLevel,

	// Disallow duplicate definitions
	'markdown/no-duplicate-definitions': formatLogLevel,

	// Disallow empty definitions
	'markdown/no-empty-definitions': logLevel,

	// Disallow empty images
	'markdown/no-empty-images': logLevel,

	// Disallow empty links
	'markdown/no-empty-links': logLevel,

	// Disallow invalid label references
	'markdown/no-invalid-label-refs': logLevel,

	// Disallow headings without a space after the hash characters
	'markdown/no-missing-atx-heading-space': formatLogLevel,

	// Disallow missing label references
	'markdown/no-missing-label-refs': logLevel,

	// Disallow multiple H1 headings in the same document
	'markdown/no-multiple-h1': [logLevel, {frontmatterTitle: ''}],

	// Require alternative text for images
	'markdown/require-alt-text': logLevel,

	// Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row
	'markdown/table-column-count': logLevel
});
