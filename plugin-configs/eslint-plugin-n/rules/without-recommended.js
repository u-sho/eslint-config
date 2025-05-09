/**
 * @see https://github.com/eslint-community/eslint-plugin-n#-rules
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


import preferGlobal from './prefer-global.js';
import preferPromises from './prefer-promises.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {{short?: boolean}} [option={}]
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error', {short = false} = {}) => ({
	// Require `return` statements after callbacks
	'n/callback-return': 0, // I think this is too strict.

	// Enforce either `module.exports` or `exports`
	'n/exports-style': logLevel,

	// Enforce the style of file extensions in `import` declarations
	'n/file-extension-in-import': [logLevel, 'always', {
		'.js' : 'never',
		'.ts' : 'never',
		'.cjs': 'never',
		'.cts': 'never',
		'.mjs': 'never',
		'.mts': 'never',
		'.jsx': 'never',
		'.tsx': 'never'
	}],

	// Require `require()` calls to be placed at top-level module scope
	'n/global-require': logLevel,

	// Require error handling in callbacks
	'n/handle-callback-err': [logLevel, '^(err|error|.+Error)$'],

	// Enforce Node.js-style error-first callback pattern is followed
	'n/no-callback-literal': 0, // I think this is too strict.

	// Disallow `require` calls to be mixed with regular variable declarations
	'n/no-mixed-requires': [logLevel, {grouping: true, allowCall: !!short}],

	// Disallow `new` operators with calls to `require`
	'n/no-new-require': short ? 0 : logLevel,

	// Disallow string concatenation with `__dirname` and `__filename`
	'n/no-path-concat': logLevel,

	// Disallow the use of `process.env`
	'n/no-process-env': logLevel, // Use configs file

	// Disallow specified modules when loaded by `import` declarations
	'n/no-restricted-import': 0, // User defined

	// Disallow specified modules when loaded by `require`
	'n/no-restricted-require': 0, // User defined

	// Disallow synchronous methods
	'n/no-sync': logLevel,

	...preferGlobal(logLevel),

	// Enforce using the node: protocol when importing Node.js builtin modules.
	'n/prefer-node-protocol': logLevel,

	...preferPromises(logLevel)
});
