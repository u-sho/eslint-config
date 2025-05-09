/**
 * @see https://eslint.org/docs/latest/rules/#possible-problems
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


/**
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 *
 * @param {import('eslint').Linter.RuleSeverity} [      logLevel='error'] default is `'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']  default is `'warn'`
 * @param {Pick<StylisticCustomizeOptions, 'semi'>} options default is `{semi: true}`
 * @returns {Partial<import('eslint/rules').ESLintRules>}
 */
export default (logLevel = 'error', formatLogLevel = 'warn', {semi = true} = {}) => ({
	// Enforce return statements in callbacks of array methods
	'array-callback-return': logLevel,

	// Require super() calls in constructors
	'constructor-super': logLevel,

	// Enforce for loop update clause moving the counter in the right direction
	'for-direction': logLevel,

	// Enforce return statements in getters
	'getter-return': logLevel,

	// Disallow using an async function as a Promise executor
	'no-async-promise-executor': logLevel,

	// Disallow await inside of loops
	'no-await-in-loop': logLevel,

	// Disallow reassigning class members
	'no-class-assign': logLevel,

	// Disallow comparing against -0
	'no-compare-neg-zero': logLevel,

	// Disallow assignment operators in conditional expressions
	'no-cond-assign': logLevel,

	// Disallow reassigning const variables
	'no-const-assign': logLevel,

	// Disallow expressions where the operation doesn’t affect the value
	'no-constant-binary-expression': logLevel,

	// Disallow constant expressions in conditions
	'no-constant-condition': logLevel,

	// Disallow returning value from constructor
	'no-constructor-return': logLevel,

	// Disallow control characters in regular expressions
	'no-control-regex': logLevel,

	// Disallow the use of debugger
	'no-debugger': logLevel,

	// Disallow duplicate arguments in function definitions
	'no-dupe-args': logLevel,

	// Disallow duplicate class members
	'no-dupe-class-members': logLevel,

	// Disallow duplicate conditions in if-else-if chains
	'no-dupe-else-if': logLevel,

	// Disallow duplicate keys in object literals
	'no-dupe-keys': logLevel,

	// Disallow duplicate case labels
	'no-duplicate-case': logLevel,

	// Disallow duplicate module imports
	'no-duplicate-imports': logLevel,

	// Disallow empty character classes in regular expressions
	'no-empty-character-class': logLevel,

	// Disallow empty destructuring patterns
	'no-empty-pattern': logLevel,

	// Disallow reassigning exceptions in catch clauses
	'no-ex-assign': logLevel,

	// Disallow fallthrough of case statements
	'no-fallthrough': logLevel,

	// Disallow reassigning function declarations
	'no-func-assign': logLevel,

	// Disallow assigning to imported bindings
	'no-import-assign': logLevel,

	// Disallow variable or function declarations in nested blocks
	'no-inner-declarations': logLevel,

	// Disallow invalid regular expression strings in RegExp constructors
	'no-invalid-regexp': logLevel,

	// Disallow irregular whitespace
	'no-irregular-whitespace': logLevel,

	// Disallow literal numbers that lose precision
	'no-loss-of-precision': logLevel,

	// Disallow characters which are made with multiple code points in character class syntax
	'no-misleading-character-class': logLevel,

	// Disallow new operators with global non-constructor functions
	'no-new-native-nonconstructor': logLevel,

	// Disallow calling global object properties as functions
	'no-obj-calls': logLevel,

	// Disallow returning values from Promise executor functions
	'no-promise-executor-return': logLevel,

	// Disallow calling some Object.prototype methods directly on objects
	'no-prototype-builtins': logLevel,

	// Disallow assignments where both sides are exactly the same
	'no-self-assign': logLevel,

	// Disallow comparisons where both sides are exactly the same
	'no-self-compare': logLevel,

	// Disallow returning values from setters
	'no-setter-return': logLevel,

	// Disallow sparse arrays
	'no-sparse-arrays': logLevel,

	// Disallow template literal placeholder syntax in regular strings
	'no-template-curly-in-string': logLevel,

	// Disallow this/super before calling super() in constructors
	'no-this-before-super': logLevel,

	// Disallow the use of undeclared variables unless mentioned in `/*global */` comments
	'no-undef': 'error',

	// Disallow confusing multiline expressions
	'no-unexpected-multiline': semi ? formatLogLevel : 0,

	// Disallow unmodified loop conditions
	'no-unmodified-loop-condition': logLevel,

	// Disallow unreachable code after return, throw, continue, and break statements
	'no-unreachable': logLevel,

	// Disallow loops with a body that allows only one iteration
	'no-unreachable-loop': logLevel,

	// Disallow control flow statements in finally blocks
	'no-unsafe-finally': logLevel,

	// Disallow negating the left operand of relational operators
	'no-unsafe-negation': logLevel,

	// Disallow use of optional chaining in contexts where the undefined value is not allowed
	'no-unsafe-optional-chaining': logLevel,

	// Disallow unused private class members
	'no-unused-private-class-members': logLevel,

	// Disallow unused variables
	'no-unused-vars': ['warn', {
		vars                          : 'all',
		args                          : 'all',
		caughtErrors                  : 'all',
		caughtErrorsIgnorePattern     : '^_',
		destructuredArrayIgnorePattern: '^_',
		ignoreRestSiblings            : false
	}],

	// Disallow the use of variables before they are defined
	'no-use-before-define': logLevel,

	// Disallow variable assignments when the value is not used
	'no-useless-assignment': logLevel,

	// Disallow useless backreferences in regular expressions
	'no-useless-backreference': logLevel,

	// Disallow assignments that can lead to race conditions due to usage of await or yield
	'require-atomic-updates': logLevel,

	// Require calls to isNaN() when checking for NaN
	'use-isnan': logLevel,

	// Enforce comparing typeof expressions against valid strings
	'valid-typeof': logLevel
});
