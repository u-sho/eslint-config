/**
 * @see https://typescript-eslint.io/rules/?=recommended
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check

/* eslint sort-keys: 'off' -- grouping the same rules */


/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Disallow awaiting a value that is not a Thenable
	'@typescript-eslint/await-thenable': logLevel,

	// Disallow `@ts-<directive>` comments or require descriptions after directives
	'@typescript-eslint/ban-ts-comment': [logLevel, {
		'ts-expect-error': {descriptionFormat: '^ \\d+: [^a-z ].+$'}
	}],

	// Disallow generic `Array` constructors
	'no-array-constructor'                   : 0,
	'@typescript-eslint/no-array-constructor': logLevel,

	// Disallow using the `delete` operator on array values
	'@typescript-eslint/no-array-delete': logLevel,

	/* Require `.toString()` and `.toLocaleString()` to only be called on objects
	   which provide useful information when stringified. */
	'@typescript-eslint/no-base-to-string': logLevel,

	// Disallow duplicate enum member values
	'@typescript-eslint/no-duplicate-enum-values': 'error',

	// Disallow duplicate constituents of union or intersection types
	'@typescript-eslint/no-duplicate-type-constituents': logLevel,

	// Disallow accidentally using the "empty object" type
	'@typescript-eslint/no-empty-object-type': [logLevel, {allowInterfaces: 'with-single-extends'}],

	// Disallow the `any` type
	'@typescript-eslint/no-explicit-any': logLevel,

	// Disallow extra non-null assertions
	'@typescript-eslint/no-extra-non-null-assertion': logLevel,

	// Require `Promise`-like statements to be handled appropriately
	'@typescript-eslint/no-floating-promises': logLevel,

	// Disallow iterating over an array with a for-in loop
	'@typescript-eslint/no-for-in-array': logLevel,

	// Disallow the use of `eval()`-like functions
	'no-implied-eval'                   : 0,
	'@typescript-eslint/no-implied-eval': logLevel,

	// Enforce valid definition of `new` and `constructor`
	'@typescript-eslint/no-misused-new': 'error',

	// Disallow `Promise`s in places not designed to handle them
	'@typescript-eslint/no-misused-promises': ['error', {
		checksVoidReturn: {
			arguments       : true,
			attributes      : true,
			inheritedMethods: true,
			properties      : false, // @OPTIMIZE: https://github.com/typescript-eslint/typescript-eslint/issues/10996
			returns         : true,
			variables       : true
		}
	}],

	// Disallow TypeScript namespaces
	'@typescript-eslint/no-namespace': logLevel,

	// Disallow non-null assertions after an optional chain expression
	'@typescript-eslint/no-non-null-asserted-optional-chain': logLevel,

	// Disallow members of unions and intersections that do nothing or override type information
	'@typescript-eslint/no-redundant-type-constituents': logLevel,

	// Disallow invocation of `require()`
	'@typescript-eslint/no-require-imports': logLevel,

	// Disallow aliasing `this`
	'@typescript-eslint/no-this-alias': logLevel,

	// Disallow type assertions that do not change the type of an expression
	'@typescript-eslint/no-unnecessary-type-assertion': logLevel,

	// Disallow unnecessary constraints on generic types
	'@typescript-eslint/no-unnecessary-type-constraint': logLevel,

	// Disallow calling a function with a value with type `any`
	'@typescript-eslint/no-unsafe-argument': logLevel,

	// Disallow assigning a value with type `any` to variables and properties
	'@typescript-eslint/no-unsafe-assignment': 0, // @OPTIMIZE: heavy

	// Disallow calling a value with type `any`
	'@typescript-eslint/no-unsafe-call': logLevel,

	// Disallow unsafe declaration merging
	'@typescript-eslint/no-unsafe-declaration-merging': logLevel,

	// Disallow comparing an enum value with a non-enum value
	'@typescript-eslint/no-unsafe-enum-comparison': logLevel,

	// Disallow using the unsafe built-in `Function` type
	'@typescript-eslint/no-unsafe-function-type': logLevel,

	// Disallow member access on a value with type `any`
	'@typescript-eslint/no-unsafe-member-access': logLevel,

	// Disallow returning a value with type `any` from a function
	'@typescript-eslint/no-unsafe-return': logLevel,

	// Require unary negation to take a number
	'@typescript-eslint/no-unsafe-unary-minus': logLevel,

	// Disallow unused expressions
	'no-unused-expressions'                   : 0,
	'@typescript-eslint/no-unused-expressions': logLevel,

	// Disallow unused variables
	'no-unused-vars'                   : 0,
	'@typescript-eslint/no-unused-vars': ['warn', {
		vars                          : 'all',
		args                          : 'all',
		argsIgnorePattern             : '^_[a-z]',
		caughtErrors                  : 'all',
		caughtErrorsIgnorePattern     : '^_[a-z]',
		destructuredArrayIgnorePattern: '^_[a-z]',
		ignoreRestSiblings            : false,
		reportUsedIgnorePattern       : true
	}],

	// Disallow using confusing built-in primitive class wrappers
	'@typescript-eslint/no-wrapper-object-types': logLevel,

	// Disallow throwing non-`Error` values as exceptions
	'no-throw-literal'                   : 0,
	'@typescript-eslint/only-throw-error': [logLevel, {
		// Sync with `@typescript-eslint/prefer-promise-reject-errors`
		allowThrowingAny    : false,
		allowThrowingUnknown: false
	}],

	// Enforce the use of `as const` over literal type
	'@typescript-eslint/prefer-as-const': logLevel,

	// Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules
	'@typescript-eslint/prefer-namespace-keyword': logLevel,

	// Require using `Error` objects as `Promise` rejection reasons
	'prefer-promise-reject-errors'                   : 0,
	'@typescript-eslint/prefer-promise-reject-errors': [logLevel, {
		// Sync with `@typescript-eslint/only-throw-error`
		allowThrowingAny    : false,
		allowThrowingUnknown: false
	}],

	// Disallow async functions which do not return promises and have no `await` expression
	'require-await'                   : 0,
	'@typescript-eslint/require-await': logLevel,

	// Require both operands of addition to be the same type and be bigint, number, or string
	'@typescript-eslint/restrict-plus-operands': [logLevel, {
		allowAny               : false,
		allowBoolean           : false,
		allowNullish           : false,
		allowNumberAndString   : false,
		allowRegExp            : false,
		skipCompoundAssignments: false
	}],

	// Enforce template literal expressions to be of `string` type
	'@typescript-eslint/restrict-template-expressions': [logLevel, {
		allowAny    : false,
		allowBoolean: false,
		allowNever  : false,
		allowNullish: false,
		allowNumber : false,
		allowRegExp : false
	}],

	// Enforce consistent awaiting of returned promises
	'@typescript-eslint/return-await': [logLevel, 'always'],

	// Disallow certain triple slash (`///`) directives in favor of ES6-style import declarations
	'@typescript-eslint/triple-slash-reference': [logLevel, {lib: 'never', path: 'never', types: 'never'}],

	// Enforce unbound methods are called with their expected scope
	'@typescript-eslint/unbound-method': logLevel
});
