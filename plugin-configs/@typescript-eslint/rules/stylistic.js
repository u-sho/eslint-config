/**
 * @see https://typescript-eslint.io/rules/?=stylistic
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check

/* eslint sort-keys: 'off' -- grouping the same rules */

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (formatLogLevel = 'warn') => ({
	// Require that function overload signatures be consecutive
	'@typescript-eslint/adjacent-overload-signatures': formatLogLevel,

	// Require consistently using either `T[]` or `Array<T>` for arrays
	'@typescript-eslint/array-type': [formatLogLevel, {default: 'array-simple'}],

	// Disallow `// tslint:<rule-flag>` comments
	'@typescript-eslint/ban-tslint-comment': formatLogLevel,

	// Enforce that literals on classes are exposed in a consistent style
	'@typescript-eslint/class-literal-property-style': formatLogLevel,

	// Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
	'@typescript-eslint/consistent-generic-constructors': formatLogLevel,

	// Require or disallow the Record type
	'@typescript-eslint/consistent-indexed-object-style': formatLogLevel,

	// Enforce consistent usage of type assertions
	'@typescript-eslint/consistent-type-assertions': [formatLogLevel, {assertionStyle: 'never'}], // Use `satisfies` instead.

	// Enforce type definitions to consistently use either interface or type
	'@typescript-eslint/consistent-type-definitions': [formatLogLevel, 'type'],

	// Enforce dot notation whenever possible
	'dot-notation'                   : 0,
	'@typescript-eslint/dot-notation': [formatLogLevel, {allowPattern: '^[a-z]+((_|-).+)+$'}],

	// Disallow non-null assertion in locations that may be confusing
	'@typescript-eslint/no-confusing-non-null-assertion': formatLogLevel,

	// Disallow empty functions
	'no-empty-function'                   : 0,
	'@typescript-eslint/no-empty-function': formatLogLevel,

	// Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
	'@typescript-eslint/no-inferrable-types': [formatLogLevel, {ignoreParameters: true, ignoreProperties: true}],

	// Enforce non-null assertions over explicit type assertions
	'@typescript-eslint/non-nullable-type-assertion-style': formatLogLevel,

	/* Enforce the use of `Array.prototype.find()` over `Array.prototype.filter()`
	   followed by `[0]` when looking for a single result. */
	'@typescript-eslint/prefer-find': formatLogLevel,

	// Enforce the use of `for`-`of` loop over the standard `for` loop where possible
	'@typescript-eslint/prefer-for-of': formatLogLevel,

	// Enforce using function types instead of interfaces with call signatures
	'@typescript-eslint/prefer-function-type': formatLogLevel,

	// Enforce `includes` method over `indexOf` method
	'@typescript-eslint/prefer-includes': formatLogLevel,

	// Enforce using the nullish coalescing operator instead of logical assignments or chaining
	'@typescript-eslint/prefer-nullish-coalescing': formatLogLevel,

	/* Enforce using concise optional chain expressions
	   instead of chained logical ands, negated logical ors, or empty objects. */
	'@typescript-eslint/prefer-optional-chain': formatLogLevel,

	// Enforce RegExp#exec over String#match if no global flag is provided
	'@typescript-eslint/prefer-regexp-exec': formatLogLevel,

	// Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings
	'@typescript-eslint/prefer-string-starts-ends-with': formatLogLevel
});
