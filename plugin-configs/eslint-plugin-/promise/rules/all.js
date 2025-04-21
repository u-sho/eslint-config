/**
 * @see https://github.com/eslint-community/eslint-plugin-promise#rules
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error', formatLogLevel = 'warn') => ({
	// Require returning inside each `then()` to create readable and reusable Promise chains.
	'promise/always-return': [logLevel, {ignoreLastCallback: true}],

	// Disallow creating `new` promises outside of utility libs (use [util.promisify](https://nodejs.org/api/util.html#util_util_promisify_original) instead).
	'promise/avoid-new': logLevel,

	// Enforce the use of `catch()` on un-returned promises.
	'promise/catch-or-return': logLevel,

	// Disallow calling `cb()` inside of a `then()` (use [util.callbackify](https://nodejs.org/docs/latest/api/util.html#utilcallbackifyoriginal) instead).
	'promise/no-callback-in-promise': logLevel,

	// Disallow creating new promises with paths that resolve multiple times.
	'promise/no-multiple-resolved': logLevel,

	// Require creating a Promise constructor before using it in an ES5 environment.
	'promise/no-native': 0, // I think this is not needed.

	// Disallow nested `then()` or `catch()` statements.
	'promise/no-nesting': logLevel,

	// Disallow calling `new` on a Promise static method.
	'promise/no-new-statics': logLevel,

	// Disallow using promises inside of callbacks.
	'promise/no-promise-in-callback': logLevel,

	// Disallow return statements in `finally()`.
	'promise/no-return-in-finally': logLevel,

	// Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
	'promise/no-return-wrap': logLevel,

	// Enforce consistent param names and ordering when creating new promises.
	'promise/param-names': formatLogLevel,

	// Prefer `async`/`await` to the callback pattern.
	'promise/prefer-await-to-callbacks': logLevel,

	// Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
	'promise/prefer-await-to-then': [logLevel, {strict: true}],

	// Prefer `catch` to `then(a, b)`/`then(null, b)` for handling errors.
	'promise/prefer-catch': logLevel,

	// Disallow use of non-standard Promise static methods.
	'promise/spec-only': logLevel,

	// Enforces the proper number of arguments are passed to Promise functions.
	'promise/valid-params': logLevel,
});
