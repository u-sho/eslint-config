/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

import noUnsupportedFeatures from './no-unsupported-features.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Require correct usage of hashbang
	'n/hashbang': logLevel,

	// Disallow deprecated APIs
	'n/no-deprecated-api': logLevel,

	// Disallow the assignment to `exports`
	'n/no-exports-assign': logLevel,

	// Disallow `import` declarations which import extraneous modules
	'n/no-extraneous-import': logLevel,

	// Disallow `require()` expressions which import extraneous modules
	'n/no-extraneous-require': logLevel,

	// Disallow `import` declarations which import non-existence modules
	'n/no-missing-import': [logLevel, {ignoreTypeImport: true}],

	// Disallow `require()` expressions which import non-existence modules
	'n/no-missing-require': logLevel,

	// Disallow the use of `process.exit()`
	'n/no-process-exit': logLevel,

	// Disallow `bin` files that npm ignores
	'n/no-unpublished-bin': logLevel,

	// Disallow `import` declarations which import private modules
	'n/no-unpublished-import': [logLevel, {ignoreTypeImport: true, ignorePrivate: true}],

	// Disallow `require()` expressions which import private modules
	'n/no-unpublished-require': [logLevel, {ignorePrivate: true}],

	...noUnsupportedFeatures(),

	// Require that `process.exit()` expressions use the same code path as `throw`
	'n/process-exit-as-throw': logLevel,
});
