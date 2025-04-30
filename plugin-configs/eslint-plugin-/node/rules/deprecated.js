/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/object-curly-newline : ['warn', 'always'] -- This returns low props. */


/** @returns {import('eslint').Linter.RulesRecord} */
export default () => ({
	// Disallow third-party modules which are hiding core modules
	'n/no-hide-core-modules': 0, // Due to https://github.com/mysticatea/eslint-plugin-node/issues/69

	// Require correct usage of hashbang
	'n/shebang': 0 // Replaced by `n/hashbang` in eslint-plugin-n
});
