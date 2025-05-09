/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check

/** @returns {import('eslint').Linter.RulesRecord} */
export default () => ({
	// Disallow unsupported ECMAScript built-ins on the specified version
	'n/no-unsupported-features/es-builtins': 'error',

	// Disallow unsupported ECMAScript syntax on the specified version
	'n/no-unsupported-features/es-syntax': 'error',

	// Disallow unsupported Node.js built-in APIs on the specified version
	'n/no-unsupported-features/node-builtins': 'error'
});
