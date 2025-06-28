/**
 * @see https://typescript-eslint.io/rules/?=recommended
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check

/* eslint sort-keys: 'off' -- grouping the same rules */


/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {Readonly<{
 * 	short     ?: boolean;
 * 	javascript?: boolean;
 * }>} [options={}] default:`{short: false, javascript: false}`
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (
	logLevel = 'error', formatLogLevel = 'warn', {short = false, javascript = false} = {}
) => ({
	// Enforce that `class` methods utilize this
	'class-methods-use-this'                   : 0,
	'@typescript-eslint/class-methods-use-this': logLevel,

	// Require `return` statements to either always or never specify values
	'consistent-return'                   : 0,
	'@typescript-eslint/consistent-return': logLevel,

	// Enforce consistent usage of type exports
	'@typescript-eslint/consistent-type-exports': [logLevel, {fixMixedExportsWithInlineTypeSpecifier: true}],

	/* Enforce consistent usage of type imports
	   Rel. 'import/consistent-type-specifier-style', 'import/no-deprecated'.
	   Bind by '@typescript-eslint/no-import-type-side-effects' */
	'@typescript-eslint/consistent-type-imports': [logLevel, {fixStyle: 'inline-type-imports'}],

	// Enforce default parameters to be last
	'default-param-last'                   : 0,
	'@typescript-eslint/default-param-last': 'error',

	...javascript
		? {}
		: {
				// Require explicit return types on functions and class methods
				'@typescript-eslint/explicit-function-return-type': [logLevel, {
					allowConciseArrowFunctionExpressionsStartingWithVoid: !short
				}],

				// Require explicit accessibility modifiers on class properties and methods
				'@typescript-eslint/explicit-member-accessibility': logLevel,

				// Require explicit return and argument types on exported functions' and classes' public class methods
				'@typescript-eslint/explicit-module-boundary-types': logLevel
			},

	// Require or disallow initialization in variable declarations
	'init-declarations'                   : 0,
	'@typescript-eslint/init-declarations': logLevel,

	// Enforce a maximum number of parameters in function definitions
	'max-params'                   : 0,
	'@typescript-eslint/max-params': [logLevel, {countVoidThis: true}],

	// Require a consistent member declaration order
	'@typescript-eslint/member-ordering': formatLogLevel,

	/* Enforce using a particular method signature syntax
	   Use `strictFunctionTypes` on tsconfig.json */
	'@typescript-eslint/method-signature-style': [formatLogLevel, short ? 'method' : 'property'],

	// Enforce naming conventions for everything across a codebase
	'camelcase'                           : 0,
	'@typescript-eslint/naming-convention': formatLogLevel,

	// Disallow duplicate class members
	'no-dupe-class-members'                   : 0,
	'@typescript-eslint/no-dupe-class-members': logLevel,

	// Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
	'@typescript-eslint/no-import-type-side-effects': logLevel, // Bind '@typescript-eslint/consistent-type-imports' to inline style

	// Disallow this keywords outside of classes or class-like objects
	'no-invalid-this'                   : 0,
	'@typescript-eslint/no-invalid-this': logLevel,

	// Disallow function declarations that contain unsafe references inside loop statements
	'@typescript-eslint/no-loop-func': logLevel,

	// Disallow magic numbers
	'no-magic-numbers'                   : 0,
	'@typescript-eslint/no-magic-numbers': [formatLogLevel, {enforceConst                 : true,
	/* eslint-disable @stylistic/indent                   */ ignore                       : [0, 1],
	                                                         ignoreDefaultValues          : true,
	                                                         ignoreEnums                  : true,
	                                                         ignoreNumericLiteralTypes    : true,
	/* eslint-enable @stylistic/indent                    */ ignoreReadonlyClassProperties: true}],


	// Disallow variable redeclaration
	'no-redeclare'                   : 0,
	'@typescript-eslint/no-redeclare': [logLevel, {ignoreDeclarationMerge: false}],

	// Disallow specified modules when loaded by import
	'no-restricted-imports'                   : 0, // Instead of this, `n/no-restricted-import` is used.
	'@typescript-eslint/no-restricted-imports': 0, // Instead of this, `n/no-restricted-import` is used.

	// Disallow certain types
	'@typescript-eslint/no-restricted-types': 0, // User defined

	// Disallow variable declarations from shadowing variables declared in the outer scope
	'no-shadow'                   : 0,
	'@typescript-eslint/no-shadow': [logLevel, {builtinGlobals: true}],

	// Disallow unnecessary assignment of constructor property parameter
	'@typescript-eslint/no-unnecessary-parameter-property-assignment': logLevel,

	// Disallow unnecessary namespace qualifiers
	'@typescript-eslint/no-unnecessary-qualifier': logLevel,

	// Disallow conversion idioms when they do not change the type or value of the expression
	'@typescript-eslint/no-unnecessary-type-conversion': logLevel,

	// Disallow type assertions that narrow a type
	'@typescript-eslint/no-unsafe-type-assertion': logLevel,

	// Disallow the use of variables before they are defined
	'no-use-before-define'                   : 0,
	'@typescript-eslint/no-use-before-define': logLevel,

	// Disallow empty exports that don't change anything in a module file
	'@typescript-eslint/no-useless-empty-export': logLevel,

	// Require or disallow parameter properties in class constructors
	'@typescript-eslint/parameter-properties': logLevel,

	// Require destructuring from arrays and/or objects
	'prefer-destructuring'                   : 0,
	'@typescript-eslint/prefer-destructuring': [logLevel,
	/* eslint-disable @stylistic/indent      */ {array: false, object: true},
	                                            {enforceForRenamedProperties            : true,
	/* eslint-enable @stylistic/indent        */ enforceForDeclarationWithTypeAnnotation: true}],

	// Require each `enum` member value to be explicitly initialized
	'@typescript-eslint/prefer-enum-initializers': 0, // I think this is too strict for number enums.

	// Require private members to be marked as `readonly` if they're never modified outside of the constructor
	'@typescript-eslint/prefer-readonly': logLevel,

	// Require function parameters to be typed as readonly to prevent accidental mutation of inputs
	'@typescript-eslint/prefer-readonly-parameter-types': [logLevel, {ignoreInferredTypes: true}],

	// Require any function or method that returns a Promise to be marked async
	'@typescript-eslint/promise-function-async': [logLevel, {allowAny: false}],

	// Require `Array#sort` and `Array#toSorted` calls to always provide a `compareFunction`
	'@typescript-eslint/require-array-sort-compare': logLevel,

	// Disallow certain types in boolean expressions
	'@typescript-eslint/strict-boolean-expressions': [logLevel, {allowNullableBoolean: true}],

	// Require switch-case statements to be exhaustive
	'@typescript-eslint/switch-exhaustiveness-check': [logLevel, { // Use `satisfies never` check
		allowDefaultCaseForExhaustiveSwitch: false,
		considerDefaultExhaustiveForUnions : true

		// `/^no default$/iu` comment is used instead of `default` statement
	}]
});
