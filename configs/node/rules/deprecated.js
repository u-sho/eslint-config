/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/** @returns {import('eslint').Linter.RulesRecord} */
module.exports = () => ({
	// Disallow third-party modules which are hiding core modules
	'n/no-hide-core-modules': 0, // due to https://github.com/mysticatea/eslint-plugin-node/issues/69

	// Require correct usage of hashbang
	'n/shebang': 0, // replaced by `n/hashbang` in eslint-plugin-n
});
