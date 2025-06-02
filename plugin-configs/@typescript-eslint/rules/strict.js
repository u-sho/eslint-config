/**
 * @see https://typescript-eslint.io/rules/?=recommended
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check


import recommendedRules from './recommended.js';

/* eslint sort-keys: 'off' -- grouping the same rules */


/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {{readonly short?: boolean}} [options={}] default: `{short: false}`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error', formatLogLevel = 'warn', {short = false} = {}) => ({
	...recommendedRules(logLevel),

	// Require expressions of type void to appear in statement position
	'@typescript-eslint/no-confusing-void-expression': [logLevel, {
		ignoreArrowShorthand        : true,
		ignoreVoidOperator          : short,
		ignoreVoidReturningFunctions: short
	}],

	// Disallow using code marked as `@deprecated`
	'@typescript-eslint/no-deprecated': 0, // @OPTIMIZE: heavy.  Related with `import/no-deprecated` rule.

	// Disallow using the `delete` operator on computed key expressions
	'@typescript-eslint/no-dynamic-delete': logLevel, // Use `Set` or `Map` instead.

	// Disallow classes used as namespaces
	'@typescript-eslint/no-extraneous-class': [logLevel, {allowWithDecorator: true}],

	// Disallow `void` type outside of generic or return types
	'@typescript-eslint/no-invalid-void-type': [logLevel, {allowInGenericTypeArguments: ['Promise']}],

	// Disallow the `void` operator except when used to discard a value
	'@typescript-eslint/no-meaningless-void-operator': logLevel,

	// Disallow using the spread operator when it might cause unexpected behavior
	'@typescript-eslint/no-misused-spread': logLevel,

	// Disallow enums from having both number and string members
	'@typescript-eslint/no-mixed-enums': logLevel,

	// Disallow non-null assertions in the left operand of a nullish coalescing operator
	'@typescript-eslint/no-non-null-asserted-nullish-coalescing': logLevel,

	// Disallow non-null assertions using the `!` postfix operator
	'@typescript-eslint/no-non-null-assertion': logLevel,

	// Disallow unnecessary equality comparisons against boolean literals
	'@typescript-eslint/no-unnecessary-boolean-literal-compare': [logLevel, {
		allowComparingNullableBooleansToTrue : false,
		allowComparingNullableBooleansToFalse: true
	}],

	// Disallow conditionals where the type is always truthy or always falsy
	'@typescript-eslint/no-unnecessary-condition': [logLevel, {checkTypePredicates: true}],

	// Disallow unnecessary template expressions
	'@typescript-eslint/no-unnecessary-template-expression': formatLogLevel,

	// Disallow type arguments that are equal to the default
	'@typescript-eslint/no-unnecessary-type-arguments': formatLogLevel,

	// Disallow type parameters that aren't used multiple times
	'@typescript-eslint/no-unnecessary-type-parameters': 0, // I don't like this.

	// Disallow unnecessary constructors
	'no-useless-constructor'                   : 0,
	'@typescript-eslint/no-useless-constructor': logLevel,

	// Require all `enum` members to be literal values
	'@typescript-eslint/prefer-literal-enum-member': [logLevel, {allowBitwiseExpressions: true}],

	// Enforce using type parameter when calling `Array#reduce` instead of using a type assertion
	'@typescript-eslint/prefer-reduce-type-parameter': formatLogLevel,

	// Enforce that `this` is used when only `this` type is returned
	'@typescript-eslint/prefer-return-this-type': formatLogLevel,

	// Enforce that `get()` types should be assignable to their equivalent `set()` type
	'@typescript-eslint/related-getter-setter-pairs': logLevel, // Rel. `accessor-pairs` rule.

	// Disallow two overloads that could be unified into one with a union or an optional/rest parameter
	'@typescript-eslint/unified-signatures': [logLevel, {ignoreOverloadsWithDifferentJSDoc: true}],

	// Enforce typing arguments in `Promise` rejection callbacks as `unknown`
	'@typescript-eslint/use-unknown-in-catch-callback-variable': logLevel // Enable `useUnknownInCatchVariables` in `tsconfig.json`
});
