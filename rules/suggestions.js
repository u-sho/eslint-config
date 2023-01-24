const OFF = 0;
const WARN = 1;
const ERROR = 2;
const LOG_LEVEL = WARN;

// Const prettierrc = require('../prettierrc');

/** @type {import('eslint/rules').ESLintRules} */
// eslint-disable-next-line object-curly-newline
module.exports = {
	// Enforce getter and setter pairs in objects and classes
	'accessor-pairs': LOG_LEVEL,

	// Require braces around arrow function bodies
	'arrow-body-style': LOG_LEVEL,

	// Enforce the use of variables within the scope they are defined
	'block-scoped-var': LOG_LEVEL,

	// Enforce camelcase naming convention
	'camelcase': LOG_LEVEL,

	// Enforce or disallow capitalization of the first letter of a comment
	'capitalized-comments': LOG_LEVEL,

	// Enforce that class methods utilize `this`
	'class-methods-use-this': LOG_LEVEL,

	// Enforce a maximum cyclomatic complexity allowed in a program
	'complexity': LOG_LEVEL,

	// Require `return` statements to either always or never specify values
	'consistent-return': LOG_LEVEL,

	// Enforce consistent naming when capturing the current execution context
	'consistent-this': LOG_LEVEL,

	// Enforce consistent brace style for all control statements
	'curly': LOG_LEVEL,

	// Require `default` cases in `switch` statements
	'default-case': LOG_LEVEL,

	// Enforce default clauses in switch statements to be last
	'default-case-last': LOG_LEVEL,

	// Enforce default parameters to be last
	'default-param-last': LOG_LEVEL,

	// Enforce dot notation whenever possible
	'dot-notation': LOG_LEVEL,

	// Require the use of `===` and `!==`
	'eqeqeq': LOG_LEVEL,

	// Require function names to match the name of the variable or property to which they are assigned
	'func-name-matching': LOG_LEVEL,

	// Require or disallow named `function` expressions
	'func-names': LOG_LEVEL,

	// Enforce the consistent use of either `function` declarations or expressions
	'func-style': LOG_LEVEL,

	// Require grouped accessor pairs in object literals and classes
	'grouped-accessor-pairs': LOG_LEVEL,

	// Require `for-in` loops to include an `if` statement
	'guard-for-in': LOG_LEVEL,

	// Disallow specified identifiers
	'id-denylist': LOG_LEVEL,

	// Enforce minimum and maximum identifier lengths
	'id-length': LOG_LEVEL,

	// Require identifiers to match a specified regular expression
	'id-match': LOG_LEVEL,

	// Require or disallow initialization in variable declarations
	'init-declarations': LOG_LEVEL,

	// Require or disallow logical assignment logical operator shorthand
	'logical-assignment-operators': LOG_LEVEL,

	// Enforce a maximum number of classes per file
	'max-classes-per-file': LOG_LEVEL,

	// Enforce a maximum depth that blocks can be nested
	'max-depth': LOG_LEVEL,

	// Enforce a maximum number of lines per file
	'max-lines': LOG_LEVEL,

	// Enforce a maximum number of lines of code in a function
	'max-lines-per-function': LOG_LEVEL,

	// Enforce a maximum depth that callbacks can be nested
	'max-nested-callbacks': LOG_LEVEL,

	// Enforce a maximum number of parameters in function definitions
	'max-params': LOG_LEVEL,

	// Enforce a maximum number of statements allowed in function blocks
	'max-statements': LOG_LEVEL,

	// Enforce a particular style for multiline comments
	'multiline-comment-style': LOG_LEVEL,

	// Require constructor names to begin with a capital letter
	'new-cap': LOG_LEVEL,

	// Disallow the use of `alert`, `confirm`, and `prompt`
	'no-alert': LOG_LEVEL,

	// Disallow `Array` constructors
	'no-array-constructor': LOG_LEVEL,

	// Disallow bitwise operators
	'no-bitwise': LOG_LEVEL,

	// Disallow the use of `arguments.caller` or `arguments.callee`
	'no-caller': LOG_LEVEL,

	// Disallow lexical declarations in case clauses
	'no-case-declarations': LOG_LEVEL,

	// Disallow arrow functions where they could be confused with comparisons
	'no-confusing-arrow': LOG_LEVEL,

	// Disallow the use of `console`
	'no-console': LOG_LEVEL,

	// Disallow `continue` statements
	'no-continue': LOG_LEVEL,

	// Disallow deleting variables
	'no-delete-var': LOG_LEVEL,

	// Disallow division operators explicitly at the beginning of regular expressions
	'no-div-regex': LOG_LEVEL,

	// Disallow `else` blocks after `return` statements in `if` statements
	'no-else-return': LOG_LEVEL,

	// Disallow empty block statements
	'no-empty': LOG_LEVEL,

	// Disallow empty functions
	'no-empty-function': LOG_LEVEL,

	// Disallow empty static blocks
	'no-empty-static-block': LOG_LEVEL,

	// Disallow `null` comparisons without type-checking operators
	'no-eq-null': LOG_LEVEL,

	// Disallow the use of `eval()`
	'no-eval': LOG_LEVEL,

	// Disallow extending native types
	'no-extend-native': LOG_LEVEL,

	// Disallow unnecessary calls to `.bind()`
	'no-extra-bind': LOG_LEVEL,

	// Disallow unnecessary boolean casts
	'no-extra-boolean-cast': LOG_LEVEL,

	// Disallow unnecessary labels
	'no-extra-label': LOG_LEVEL,

	// Disallow unnecessary semicolons
	'no-extra-semi': LOG_LEVEL,

	// Disallow leading or trailing decimal points in numeric literals
	'no-floating-decimal': LOG_LEVEL,

	// Disallow assignments to native objects or read-only global variables
	'no-global-assign': LOG_LEVEL,

	// Disallow shorthand type conversions
	'no-implicit-coercion': LOG_LEVEL,

	// Disallow declarations in the global scope
	'no-implicit-globals': LOG_LEVEL,

	// Disallow the use of `eval()`-like methods
	'no-implied-eval': LOG_LEVEL,

	// Disallow inline comments after code
	'no-inline-comments': LOG_LEVEL,

	// Disallow use of `this` in contexts where the value of `this` is `undefined`
	'no-invalid-this': LOG_LEVEL,

	// Disallow the use of the `__iterator__` property
	'no-iterator': LOG_LEVEL,

	// Disallow labels that share a name with a variable
	'no-label-var': LOG_LEVEL,

	// Disallow labeled statements
	'no-labels': LOG_LEVEL,

	// Disallow unnecessary nested blocks
	'no-lone-blocks': LOG_LEVEL,

	// Disallow `if` statements as the only statement in `else` blocks
	'no-lonely-if': LOG_LEVEL,

	// Disallow function declarations that contain unsafe references inside loop statements
	'no-loop-func': LOG_LEVEL,

	// Disallow magic numbers
	'no-magic-numbers': LOG_LEVEL,

	// Disallow mixed binary operators
	'no-mixed-operators': LOG_LEVEL,

	// Disallow use of chained assignment expressions
	'no-multi-assign': LOG_LEVEL,

	// Disallow multiline strings
	'no-multi-str': LOG_LEVEL,

	// Disallow negated conditions
	'no-negated-condition': LOG_LEVEL,

	// Disallow nested ternary expressions
	'no-nested-ternary': LOG_LEVEL,

	// Disallow `new` operators outside of assignments or comparisons
	'no-new': LOG_LEVEL,

	// Disallow `new` operators with the `Function` object
	'no-new-func': LOG_LEVEL,

	// Disallow `Object` constructors
	'no-new-object': LOG_LEVEL,

	// Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
	'no-new-wrappers': LOG_LEVEL,

	// Disallow `\8` and `\9` escape sequences in string literals
	'no-nonoctal-decimal-escape': LOG_LEVEL,

	// Disallow octal literals
	'no-octal': LOG_LEVEL,

	// Disallow octal escape sequences in string literals
	'no-octal-escape': LOG_LEVEL,

	// Disallow reassigning `function` parameters
	'no-param-reassign': LOG_LEVEL,

	// Disallow the unary operators `++` and `--`
	'no-plusplus': LOG_LEVEL,

	// Disallow the use of the `__proto__` property
	'no-proto': LOG_LEVEL,

	// Disallow variable redeclaration
	'no-redeclare': LOG_LEVEL,

	// Disallow multiple spaces in regular expressions
	'no-regex-spaces': LOG_LEVEL,

	// Disallow specified names in exports
	'no-restricted-exports': LOG_LEVEL,

	// Disallow specified global variables
	'no-restricted-globals': LOG_LEVEL,

	// Disallow specified modules when loaded by `import`
	'no-restricted-imports': LOG_LEVEL,

	// Disallow certain properties on certain objects
	'no-restricted-properties': LOG_LEVEL,

	// Disallow specified syntax
	'no-restricted-syntax': LOG_LEVEL,

	// Disallow assignment operators in `return` statements
	'no-return-assign': LOG_LEVEL,

	// Disallow unnecessary `return await`
	'no-return-await': LOG_LEVEL,

	// Disallow `javascript:` urls
	'no-script-url': LOG_LEVEL,

	// Disallow comma operators
	'no-sequences': LOG_LEVEL,

	// Disallow variable declarations from shadowing variables declared in the outer scope
	'no-shadow': LOG_LEVEL,

	// Disallow identifiers from shadowing restricted names
	'no-shadow-restricted-names': LOG_LEVEL,

	// Disallow ternary operators
	'no-ternary': LOG_LEVEL,

	// Disallow throwing literals as exceptions
	'no-throw-literal': LOG_LEVEL,

	// Disallow initializing variables to `undefined`
	'no-undef-init': LOG_LEVEL,

	// Disallow the use of `undefined` as an identifier
	'no-undefined': LOG_LEVEL,

	// Disallow dangling underscores in identifiers
	'no-underscore-dangle': LOG_LEVEL,

	// Disallow ternary operators when simpler alternatives exist
	'no-unneeded-ternary': LOG_LEVEL,

	// Disallow unused expressions
	'no-unused-expressions': LOG_LEVEL,

	// Disallow unused labels
	'no-unused-labels': LOG_LEVEL,

	// Disallow unnecessary calls to `.call()` and `.apply()`
	'no-useless-call': LOG_LEVEL,

	// Disallow unnecessary `catch` clauses
	'no-useless-catch': LOG_LEVEL,

	// Disallow unnecessary computed property keys in objects and classes
	'no-useless-computed-key': LOG_LEVEL,

	// Disallow unnecessary concatenation of literals or template literals
	'no-useless-concat': LOG_LEVEL,

	// Disallow unnecessary constructors
	'no-useless-constructor': LOG_LEVEL,

	// Disallow unnecessary escape characters
	'no-useless-escape': LOG_LEVEL,

	// Disallow renaming import, export, and destructured assignments to the same name
	'no-useless-rename': LOG_LEVEL,

	// Disallow redundant return statements
	'no-useless-return': LOG_LEVEL,

	// Require `let` or `const` instead of `var`
	'no-var': LOG_LEVEL,

	// Disallow `void` operators
	'no-void': LOG_LEVEL,

	// Disallow specified warning terms in comments
	'no-warning-comments': LOG_LEVEL,

	// Disallow `with` statements
	'no-with': LOG_LEVEL,

	// Require or disallow method and property shorthand syntax for object literals
	'object-shorthand': LOG_LEVEL,

	// Enforce variables to be declared either together or separately in functions
	'one-var': LOG_LEVEL,

	// Require or disallow newlines around variable declarations
	'one-var-declaration-per-line': LOG_LEVEL,

	// Require or disallow assignment operator shorthand where possible
	'operator-assignment': LOG_LEVEL,

	// Require using arrow functions for callbacks
	'prefer-arrow-callback': LOG_LEVEL,

	// Require `const` declarations for variables that are never reassigned after declared
	'prefer-const': LOG_LEVEL,

	// Require destructuring from arrays and/or objects
	'prefer-destructuring': LOG_LEVEL,

	// Disallow the use of `Math.pow` in favor of the `**` operator
	'prefer-exponentiation-operator': LOG_LEVEL,

	// Enforce using named capture group in regular expression
	'prefer-named-capture-group': LOG_LEVEL,

	// Disallow `parseInt` and `Number.parseInt` in favor of binary, octal, and hexadecimal literals
	'prefer-numeric-literals': LOG_LEVEL,

	// Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	'prefer-object-has-own': LOG_LEVEL,

	/*
	 * Disallow using Object.assign with an object literal as the first argument and prefer the use
	 * of object spread instead
	 */
	'prefer-object-spread': LOG_LEVEL,

	// Require using Error objects as Promise rejection reasons
	'prefer-promise-reject-errors': LOG_LEVEL,

	// Disallow use of the `RegExp` constructor in favor of regular expression literals
	'prefer-regex-literals': LOG_LEVEL,

	// Require rest parameters instead of `arguments`
	'prefer-rest-params': LOG_LEVEL,

	// Require spread operators instead of `.apply()`
	'prefer-spread': LOG_LEVEL,

	// Require template literals instead of string concatenation
	'prefer-template': LOG_LEVEL,

	// Require quotes around object literal property names
	'quote-props': LOG_LEVEL,

	// Enforce the consistent use of the radix argument when using `parseInt()`
	'radix': LOG_LEVEL,

	// Disallow async functions which have no `await` expression
	'require-await': LOG_LEVEL,

	// Enforce the use of `u` flag on RegExp
	'require-unicode-regexp': LOG_LEVEL,

	// Require generator functions to contain `yield`
	'require-yield': LOG_LEVEL,

	// Enforce sorted import declarations within modules
	'sort-imports': LOG_LEVEL,

	// Require object keys to be sorted
	'sort-keys': LOG_LEVEL,

	// Require variables within the same declaration block to be sorted
	'sort-vars': LOG_LEVEL,

	// Enforce consistent spacing after the `//` or `/*` in a comment
	'spaced-comment': LOG_LEVEL,

	// Require or disallow strict mode directives
	'strict': LOG_LEVEL,

	// Require symbol descriptions
	'symbol-description': LOG_LEVEL,

	// Require `var` declarations be placed at the top of their containing scope
	'vars-on-top': LOG_LEVEL,

	// Require or disallow "Yoda" conditions
	'yoda': LOG_LEVEL};