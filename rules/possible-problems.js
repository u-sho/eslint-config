const WARN = 1;
const ERROR = 2;
const LOG_LEVEL = ERROR;

/**
 * @see https://eslint.org/docs/latest/rules/#possible-problems
 * @type {import('eslint/rules').ESLintRules}
 */
// eslint-disable-next-line object-curly-newline
module.exports = {
	// Enforce return statements in callbacks of array methods
	'array-callback-return': LOG_LEVEL,

	// Require `super()` calls in constructors
	'constructor-super': LOG_LEVEL,

	// Enforce "for" loop update clause moving the counter in the right direction
	'for-direction': LOG_LEVEL,

	// Enforce `return` statements in getters
	'getter-return': LOG_LEVEL,

	// Disallow using an async function as a Promise executor
	'no-async-promise-executor': LOG_LEVEL,

	// Disallow `await` inside of loops
	'no-await-in-loop': LOG_LEVEL,

	// Disallow reassigning class members
	'no-class-assign': LOG_LEVEL,

	// Disallow comparing against -0
	'no-compare-neg-zero': LOG_LEVEL,

	// Disallow assignment operators in conditional expressions
	'no-cond-assign': LOG_LEVEL,

	// Disallow reassigning `const` variables
	'no-const-assign': LOG_LEVEL,

	// Disallow expressions where the operation doesn't affect the value
	'no-constant-binary-expression': LOG_LEVEL,

	// Disallow constant expressions in conditions
	'no-constant-condition': LOG_LEVEL,

	// Disallow returning value from constructor
	'no-constructor-return': LOG_LEVEL,

	// Disallow control characters in regular expressions
	'no-control-regex': LOG_LEVEL,

	// Disallow the use of `debugger`
	'no-debugger': LOG_LEVEL,

	// Disallow duplicate arguments in `function` definitions
	'no-dupe-args': LOG_LEVEL,

	// Disallow duplicate class members
	'no-dupe-class-members': LOG_LEVEL,

	// Disallow duplicate conditions in if-else-if chains
	'no-dupe-else-if': LOG_LEVEL,

	// Disallow duplicate keys in object literals
	'no-dupe-keys': LOG_LEVEL,

	// Disallow duplicate case labels
	'no-duplicate-case': LOG_LEVEL,

	// Disallow duplicate module imports
	'no-duplicate-imports': LOG_LEVEL,

	// Disallow empty character classes in regular expressions
	'no-empty-character-class': LOG_LEVEL,

	// Disallow empty destructuring patterns
	'no-empty-pattern': LOG_LEVEL,

	// Disallow reassigning exceptions in `catch` clauses
	'no-ex-assign': LOG_LEVEL,

	// Disallow fallthrough of `case` statements
	'no-fallthrough': LOG_LEVEL,

	// Disallow reassigning `function` declarations
	'no-func-assign': LOG_LEVEL,

	// Disallow assigning to imported bindings
	'no-import-assign': LOG_LEVEL,

	// Disallow variable or `function` declarations in nested blocks
	'no-inner-declarations': LOG_LEVEL,

	// Disallow invalid regular expression strings in `RegExp` constructors
	'no-invalid-regexp': LOG_LEVEL,

	// Disallow irregular whitespace
	'no-irregular-whitespace': LOG_LEVEL,

	// Disallow literal numbers that lose precision
	'no-loss-of-precision': LOG_LEVEL,

	// Disallow characters which are made with multiple code points in character class syntax
	'no-misleading-character-class': LOG_LEVEL,

	// Disallow `new` operators with global non-constructor functions
	'no-new-native-nonconstructor': LOG_LEVEL,

	// Disallow `new` operators with the `Symbol` object
	'no-new-symbol': LOG_LEVEL,

	// Disallow calling global object properties as functions
	'no-obj-calls': LOG_LEVEL,

	// Disallow returning values from Promise executor functions
	'no-promise-executor-return': LOG_LEVEL,

	// Disallow calling some `Object.prototype` methods directly on objects
	'no-prototype-builtins': LOG_LEVEL,

	// Disallow assignments where both sides are exactly the same
	'no-self-assign': LOG_LEVEL,

	// Disallow comparisons where both sides are exactly the same
	'no-self-compare': LOG_LEVEL,

	// Disallow returning values from setters
	'no-setter-return': LOG_LEVEL,

	// Disallow sparse arrays
	'no-sparse-arrays': LOG_LEVEL,

	// Disallow template literal placeholder syntax in regular strings
	'no-template-curly-in-string': LOG_LEVEL,

	// Disallow `this`/`super` before calling `super()` in constructors
	'no-this-before-super': LOG_LEVEL,

	// Disallow the use of undeclared variables unless mentioned in `/*global */` comments
	'no-undef': LOG_LEVEL,

	// Disallow confusing multiline expressions
	'no-unexpected-multiline': LOG_LEVEL,

	// Disallow unmodified loop conditions
	'no-unmodified-loop-condition': WARN,

	// Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
	'no-unreachable': LOG_LEVEL,

	// Disallow loops with a body that allows only one iteration
	'no-unreachable-loop': LOG_LEVEL,

	// Disallow control flow statements in `finally` blocks
	'no-unsafe-finally': LOG_LEVEL,

	// Disallow negating the left operand of relational operators
	'no-unsafe-negation': LOG_LEVEL,

	// Disallow use of optional chaining in contexts where the `undefined` value is not allowed
	'no-unsafe-optional-chaining': LOG_LEVEL,

	// Disallow unused private class members
	'no-unused-private-class-members': WARN,

	// Disallow unused variables
	'no-unused-vars': [WARN,
	                  {'vars'                          : 'all',
	                   'args'                          : 'all',
	                   'caughtErrors'                  : 'all',
	                   'caughtErrorsIgnorePattern'     : '^_',
	                   'destructuredArrayIgnorePattern': '^_',
	                   'ignoreRestSiblings'            : false}],

	// Disallow the use of variables before they are defined
	'no-use-before-define': LOG_LEVEL,

	// Disallow useless backreferences in regular expressions
	'no-useless-backreference': LOG_LEVEL,

	// Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
	'require-atomic-updates': LOG_LEVEL,

	// Require calls to `isNaN()` when checking for `NaN`
	'use-isnan': LOG_LEVEL,

	// Enforce comparing `typeof` expressions against valid strings
	'valid-typeof': LOG_LEVEL};