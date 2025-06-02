/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author @u-sho (Shouhei Uechi)
 * @copyright 2025 @u-sho
 */

// @ts-check

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Forbid any invalid exports, i.e. re-export of the same name.
	'import/export': logLevel,

	// Forbid imported names marked with
	'import/no-deprecated': logLevel, // Rel. '@typescript-eslint/consistent-type-imports'

	// Forbid empty named import blocks.
	'import/no-empty-named-blocks': logLevel,

	// Forbid the use of extraneous packages.
	'import/no-extraneous-dependencies': [logLevel, {includeTypes: true}],

	// Forbid the use of mutable exports with var or let.
	'import/no-mutable-exports': logLevel,

	// Forbid use of exported name as identifier of default export.
	'import/no-named-as-default': logLevel,

	// Forbid use of exported name as property of default export.
	'import/no-named-as-default-member': logLevel,

	// Forbid modules without exports, or exports without matching import in another module.
	'import/no-unused-modules': [logLevel, {missingExports: true, unusedExports: true}]
});
