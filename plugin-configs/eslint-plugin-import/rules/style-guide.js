/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author @u-sho (Shouhei Uechi)
 * @copyright 2025 @u-sho
 */

// @ts-check

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] - default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {Readonly<{short?:boolean; typescript?:boolean; jsx?:boolean; webpack?:boolean}>} [option={}] - --- default:
 * 	`{short: false, typescript: false, jsx: false, webpack: false}`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{
		short      = false,
		typescript = false,
		jsx        = false,
		webpack    = false
	} = {}
) => ({
	// Enforce or ban the use of inline type-only markers for named imports.
	'import/consistent-type-specifier-style': 0, // I'm using TypeScript 4.5+.
	// Rel. '@typescript-eslint/consistent-type-imports'

	// Enforce a leading comment with the webpackChunkName for dynamic imports.
	'import/dynamic-import-chunkname': webpack ? logLevel : 0,

	// Ensure all exports appear after other statements.
	'import/exports-last': short ? 0 : formatLogLevel,

	// Ensure consistent use of file extension within the import path.
	'import/extensions': [logLevel, 'always', {
		js : 'never',
		jsx: jsx ? 'never' : 'always',
		ts : typescript ? 'never' : 'always',
		tsx: (typescript && jsx) ? 'never' : 'always'
	}],

	// Ensure all imports appear before other statements.
	'import/first': formatLogLevel, // Option `absolute-first` is a part of `import/order`.

	// Prefer named exports to be grouped together in a single export declaration
	'import/group-exports': short ? 0 : formatLogLevel,

	/* // Replaced by `import/first`.
	   'import/imports-first': logLevel, // deprecated */

	// Enforce the maximum number of dependencies a module can have.
	'import/max-dependencies': [formatLogLevel, {max: 5, ignoreTypeImports: true}],

	// Enforce a newline after import statements.
	'import/newline-after-import': [formatLogLevel, {considerComments: true}],

	// Forbid anonymous values as default exports.
	'import/no-anonymous-default-export': [logLevel, {allowObject: true}],

	// Forbid default exports.
	'import/no-default-export': formatLogLevel,

	// Forbid repeated import of the same module in multiple places.
	'import/no-duplicates': formatLogLevel,

	// Forbid named default exports.
	'import/no-named-default': formatLogLevel,

	// Forbid named exports.
	'import/no-named-export': 0,

	// Forbid namespace (a.k.a. "wildcard" `*`) imports.
	'import/no-namespace': logLevel,

	// Forbid unassigned imports
	'import/no-unassigned-import': logLevel,

	// Enforce a convention in module import order.
	'import/order': [formatLogLevel, {
		groups: ['builtin', 'external', 'internal', 'parent', 'index', 'sibling', 'object']
	}],

	// Prefer a default export if module exports a single name or multiple names.
	'import/prefer-default-export': formatLogLevel
});
