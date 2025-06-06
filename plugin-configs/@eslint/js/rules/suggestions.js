/**
 * @see https://eslint.org/docs/latest/rules/#suggestions
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


/**
 * @param {import('eslint').Linter.RuleSeverity} [      logLevel = 'error'] default: `'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel = 'warn']  default: `'warn'`
 * @param {{readonly complexityDepth?: number}} options default: `{complexityDepth: Infinity}`
 * @returns {Partial<import('eslint/rules').ESLintRules>}
 */
export default (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{complexityDepth = Infinity} = {}
) => ({
	// Enforce getter and setter pairs in objects and classes
	'accessor-pairs': 0, // Rel. `@typescript-eslint/related-getter-setter-pairs`

	// Require braces around arrow function bodies
	'arrow-body-style': formatLogLevel,

	// Enforce the use of variables within the scope they are defined
	'block-scoped-var': logLevel,

	// Enforce camelcase naming convention
	'camelcase': formatLogLevel, // `@typescript-eslint/naming-convention` rule is used

	// Enforce or disallow capitalization of the first letter of a comment
	'capitalized-comments': formatLogLevel,

	// Enforce that class methods utilize this
	'class-methods-use-this': logLevel, // `@typescript-eslint/class-methods-use-this` rule is used

	// Enforce a maximum cyclomatic complexity allowed in a program
	'complexity': Infinity === complexityDepth ? 0 : ['warn', {max: complexityDepth}],

	// Require return statements to either always or never specify values
	'consistent-return': logLevel, // `@typescript-eslint/consistent-return` rule is used

	// Enforce consistent naming when capturing the current execution context
	'consistent-this': [logLevel, 'self'],

	// Enforce consistent brace style for all control statements
	'curly': [formatLogLevel, 'multi-or-nest', 'consistent'],

	// Require default cases in switch statements
	'default-case': logLevel, // `/^no default$/i` is used as ignore comment

	// Enforce default clauses in switch statements to be last
	'default-case-last': 'error',

	// Enforce default parameters to be last
	'default-param-last': 'error', // `@typescript-eslint/default-param-last` rule is used

	// Enforce dot notation whenever possible
	'dot-notation': [logLevel, {allowPattern: '^[a-z]+((_|-).+)+$'}],

	// Require the use of === and !==
	'eqeqeq': [logLevel, 'smart'],

	/* Require function names to match the name of the variable or property
	   to which they are assigned */
	'func-name-matching': [logLevel, 'always', {considerPropertyDescriptor: true}],

	// Require or disallow named function expressions
	'func-names': [logLevel, 'as-needed'],

	/* Enforce the consistent use of
	   either function declarations or expressions assigned to variables */
	'func-style': [logLevel, 'declaration', {allowArrowFunctions: true}],

	// Require grouped accessor pairs in object literals and classes
	'grouped-accessor-pairs': [logLevel, 'getBeforeSet'],

	// Require for-in loops to include an if statement
	'guard-for-in': 0,

	// Disallow specified identifiers
	'id-denylist': 0,

	// Enforce minimum and maximum identifier lengths
	'id-length': [formatLogLevel, {
		min       : 4,
		max       : 26,
		properties: 'never',
		exceptions: ['i']
	}],

	// Require identifiers to match a specified regular expression
	'id-match': 0, // Instead of this, `camelcase` or `@typescript-eslint/naming-convention` rule is used

	// Require or disallow initialization in variable declarations
	'init-declarations': logLevel, // `@typescript-eslint/init-declarations` rule is used

	// Require or disallow logical assignment operator shorthand
	'logical-assignment-operators': [formatLogLevel,  /* eslint-disable @stylistic/indent */
	                                 'always',
	                                 {enforceForIfStatements: true}],
	                                 /* eslint-enable @stylistic/indent */

	// Enforce a maximum number of classes per file
	'max-classes-per-file': 'warn',

	// Enforce a maximum depth that blocks can be nested
	'max-depth': ['warn', {max: Infinity === complexityDepth ? 2 : complexityDepth}],

	// Enforce a maximum number of lines per file
	'max-lines': 0, // I think this is too strict.

	// Enforce a maximum number of lines of code in a function
	'max-lines-per-function': 0, // Subset of `max-statements` rule

	// Enforce a maximum depth that callbacks can be nested
	'max-nested-callbacks': ['warn', {max: Infinity === complexityDepth ? 2 : complexityDepth}],

	// Enforce a maximum number of parameters in function definitions
	'max-params': [logLevel, {countVoidThis: true}], // `@typescript-eslint/max-params` rule is used

	// Enforce a maximum number of statements allowed in function blocks
	// eslint-disable-next-line 'typescript/no-magic-numbers' -- because statements are magic
	'max-statements': Infinity === complexityDepth ? 0 : [logLevel, {max: complexityDepth * 5}],

	// Require constructor names to begin with a capital letter
	'new-cap': logLevel,

	// Disallow the use of alert, confirm, and prompt
	'no-alert': logLevel,

	// Disallow `Array` constructors
	'no-array-constructor': logLevel, // `@typescript-eslint/no-array-constructor` rule is used

	// Disallow bitwise operators
	'no-bitwise': logLevel,

	// Disallow the use of arguments.caller or arguments.callee
	'no-caller': logLevel,

	// Disallow lexical declarations in case clauses
	'no-case-declarations': logLevel,

	// Disallow the use of console
	'no-console': [logLevel, {allow: ['info', 'warn', 'error']}],

	// Disallow continue statements
	'no-continue': 0,

	// Disallow deleting variables
	'no-delete-var': logLevel,

	// Disallow equal signs explicitly at the beginning of regular expressions
	'no-div-regex': logLevel,

	// Disallow else blocks after return statements in if statements
	'no-else-return': [logLevel, {allowElseIf: false}],

	// Disallow empty block statements
	'no-empty': logLevel,

	// Disallow empty functions
	'no-empty-function': logLevel,

	// Disallow empty static blocks
	'no-empty-static-block': logLevel,

	// Disallow null comparisons without type-checking operators
	'no-eq-null': 0, // Specific `null`, subset of `eqeqeq` rule

	// Disallow the use of `eval()`
	'no-eval': logLevel,

	// Disallow extending native types
	'no-extend-native': logLevel,

	// Disallow unnecessary calls to `.bind()`
	'no-extra-bind': logLevel,

	// Disallow unnecessary boolean casts
	'no-extra-boolean-cast': logLevel,

	// Disallow unnecessary labels
	'no-extra-label': logLevel,

	// Disallow assignments to native objects or read-only global variables
	'no-global-assign': logLevel,

	// Disallow shorthand type conversions
	'no-implicit-coercion': [logLevel, {allow: ['!!', '~']}],

	// Disallow declarations in the global scope
	'no-implicit-globals': logLevel,

	// Disallow the use of `eval()`-like methods
	'no-implied-eval': logLevel, // `@typescript-eslint/no-implied-eval` rule is used

	// Disallow inline comments after code
	'no-inline-comments': 0, // Instead of this, `line-comment-position` rule subset is used

	// Disallow use of this in contexts where the value of this is undefined
	'no-invalid-this': logLevel, // `@typescript-eslint/no-invalid-this` rule is used

	// Disallow the use of the __iterator__ property
	'no-iterator': 'error',

	// Disallow labels that share a name with a variable
	'no-label-var': logLevel,

	// Disallow labeled statements
	'no-labels': 0, // Instead of this, `no-extra-label` rule is used

	// Disallow unnecessary nested blocks
	'no-lone-blocks': logLevel,

	// Disallow if statements as the only statement in else blocks
	'no-lonely-if': formatLogLevel,

	// Disallow function declarations that contain unsafe references inside loop statements
	'no-loop-func': logLevel, // `@typescript-eslint/no-loop-func` rule is used

	/* Disallow magic numbers
		'@typescript-eslint/no-magic-numbers' rule is used. */
	'no-magic-numbers': [formatLogLevel, {enforceConst                 : true,
	/* eslint-disable @stylistic/indent */ignore                       : [0, 1],
	// @ts-expect-error 2353: See https://eslint.org/docs/latest/rules/no-magic-numbers#ignoredefaultvalues
	                                      ignoreDefaultValues          : true,
	                                      ignoreEnums                  : true,
	                                      ignoreNumericLiteralTypes    : true,
	/* eslint-enable @stylistic/indent */ ignoreReadonlyClassProperties: true}],

	// Disallow use of chained assignment expressions
	'no-multi-assign': formatLogLevel,

	// Disallow multiline strings
	'no-multi-str': logLevel,

	// Disallow negated conditions
	'no-negated-condition': logLevel,

	// Disallow nested ternary expressions
	'no-nested-ternary': formatLogLevel,

	// Disallow new operators outside of assignments or comparisons
	'no-new': logLevel,

	// Disallow new operators with the Function object
	'no-new-func': logLevel,

	// Disallow new operators with the String, Number, and Boolean objects
	'no-new-wrappers': logLevel,

	// Disallow &#92;8 and &#92;9 escape sequences in string literals
	'no-nonoctal-decimal-escape': logLevel,

	// Disallow calls to the Object constructor without an argument
	'no-object-constructor': logLevel,

	// Disallow octal literals
	'no-octal': logLevel,

	// Disallow octal escape sequences in string literals
	'no-octal-escape': logLevel,

	// Disallow reassigning function parameters
	'no-param-reassign': logLevel,

	// Disallow the unary operators ++ and --
	'no-plusplus': [logLevel, {allowForLoopAfterthoughts: true}],

	// Disallow the use of the __proto__ property
	'no-proto': 'error',

	// Disallow variable redeclaration
	'no-redeclare': logLevel, // `@typescript-eslint/no-redeclare` rule is used

	// Disallow multiple spaces in regular expressions
	'no-regex-spaces': logLevel,

	// Disallow specified names in exports
	'no-restricted-exports': 0,

	// Disallow specified global variables
	'no-restricted-globals': [logLevel, /* eslint-disable @stylistic/indent, @stylistic/no-multi-spaces */
		{name: 'event',         message: 'Use local parameter instead.'},
		{name: 'setTimeout',    message: "Use browser's API instead."},
		{name: 'setInterval',   message: "Use browser's API instead."},
		{name: 'clearTimeout',  message: "Use browser's API instead."},
		{name: 'clearInterval', message: "Use browser's API instead."}],
		/* eslint-enable @stylistic/indent, @stylistic/no-multi-spaces */

	/* Disallow specified modules when loaded by import
	   Rel. `@typescript-eslint/no-restricted-imports` */
	'no-restricted-imports': 0, // Instead of this, `n/no-restricted-import` rule is used

	// Disallow certain properties on certain objects
	'no-restricted-properties': 0,

	// Disallow specified syntax
	'no-restricted-syntax': [logLevel, /* eslint-disable @stylistic/indent */
	                         {selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
	                          message : 'setTimeout must always be invoked with two arguments.'},
	                         {selector: 'TemplateLiteral[expressions.length=0]',
	                          message : 'In this case, back quotes are not allowed. Use single quotes.'}],
	                         /* eslint-enable @stylistic/indent */

	// Disallow assignment operators in return statements
	'no-return-assign': logLevel,

	// Disallow javascript: URLs
	'no-script-url': logLevel,

	// Disallow comma operators
	'no-sequences': [logLevel, {allowInParentheses: false}],

	// Disallow variable declarations from shadowing variables declared in the outer scope
	'no-shadow': [logLevel, {builtinGlobals: true}], // `@typescript-eslint/no-shadow` rule is used

	// Disallow identifiers from shadowing restricted names
	'no-shadow-restricted-names': logLevel,

	// Disallow ternary operators
	'no-ternary': 0,

	// Disallow throwing literals as exceptions
	'no-throw-literal': logLevel, // `@typescript-eslint/only-throw-error` rule is used

	// Disallow initializing variables to undefined
	'no-undef-init': logLevel,

	// Disallow the use of undefined as an identifier
	'no-undefined': logLevel,

	// Disallow dangling underscores in identifiers
	'no-underscore-dangle': logLevel,

	// Disallow ternary operators when simpler alternatives exist
	'no-unneeded-ternary': logLevel,

	// Disallow unused expressions
	'no-unused-expressions': logLevel, // `@typescript-eslint/no-unused-expressions` rule is used

	// Disallow unused labels
	'no-unused-labels': logLevel,

	// Disallow unnecessary calls to .call() and .apply()
	'no-useless-call': logLevel,

	// Disallow unnecessary catch clauses
	'no-useless-catch': logLevel,

	// Disallow unnecessary computed property keys in objects and classes
	'no-useless-computed-key': [logLevel, {enforceForClassMembers: true}],

	// Disallow unnecessary concatenation of literals or template literals
	'no-useless-concat': logLevel,

	// Disallow unnecessary constructors
	'no-useless-constructor': logLevel, // `@typescript-eslint/no-useless-constructor` rule is used

	// Disallow unnecessary escape characters
	'no-useless-escape': logLevel,

	// Disallow renaming import, export, and destructured assignments to the same name
	'no-useless-rename': logLevel,

	// Disallow redundant return statements
	'no-useless-return': logLevel,

	// Require let or const instead of var
	'no-var': logLevel,

	// Disallow void operators
	'no-void': logLevel,

	// Disallow specified warning terms in comments
	'no-warning-comments': [logLevel, /* eslint-disable @stylistic/indent */
	                        {terms   : ['bug', 'fix', 'fixme', 'to do', 'todo'],
	                         location: 'anywhere'}], /* eslint-enable @stylistic/indent */

	// Disallow with statements
	'no-with': logLevel,

	// Require or disallow method and property shorthand syntax for object literals
	'object-shorthand': [formatLogLevel, 'always', {avoidQuotes: true}],

	// Enforce variables to be declared either together or separately in functions
	'one-var': [formatLogLevel, {initialized: 'never', uninitialized: 'always'}],

	// Require or disallow assignment operator shorthand where possible
	'operator-assignment': logLevel,

	// Require using arrow functions for callbacks
	'prefer-arrow-callback': logLevel,

	// Require const declarations for variables that are never reassigned after declared
	'prefer-const': logLevel,

	// Require destructuring from arrays and/or objects
	'prefer-destructuring': [logLevel, /* eslint-disable @stylistic/indent */
	                         {array: false, object: true},
	                         {enforceForRenamedProperties: true}],
	/* eslint-enable @stylistic/indent */ // `@typescript-eslint/prefer-destructuring` rule is used

	// Disallow the use of Math.pow in favor of the ** operator
	'prefer-exponentiation-operator': logLevel,

	// Enforce using named capture group in regular expression
	'prefer-named-capture-group': logLevel,

	/* Disallow `parseInt()` and `Number.parseInt()`
	   in favor of binary, octal, and hexadecimal literals */
	'prefer-numeric-literals': logLevel,

	// Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
	'prefer-object-has-own': logLevel,

	/* Disallow using `Object.assign` with an object literal as the first argument
	    and prefer the use of object spread instead */
	'prefer-object-spread': logLevel,

	// Require using `Error` objects as `Promise` rejection reasons
	'prefer-promise-reject-errors': logLevel, // `@typescript-eslint/prefer-promise-reject-errors` rule is used

	// Disallow use of the RegExp constructor in favor of regular expression literals
	'prefer-regex-literals': [logLevel, {disallowRedundantWrapping: true}],

	// Require rest parameters instead of arguments
	'prefer-rest-params': logLevel,

	// Require spread operators instead of .apply()
	'prefer-spread': logLevel,

	// Require template literals instead of string concatenation
	'prefer-template': logLevel,

	// Enforce the consistent use of the radix argument when using parseInt()
	'radix': logLevel,

	// Disallow async functions which have no `await` expression
	'require-await': logLevel, // `@typescript-eslint/require-await` rule is used

	// Enforce the use of `u` or `v` flag on regular expressions
	'require-unicode-regexp': logLevel,

	// Require generator functions to contain `yield`
	'require-yield': logLevel,

	// Enforce sorted import declarations within modules
	'sort-imports': [formatLogLevel, /* eslint-disable @stylistic/indent */
	                 {allowSeparatedGroups : true,
	                  memberSyntaxSortOrder: ['all', 'multiple', 'single', 'none']}],
	                 /* eslint-enable @stylistic/indent */

	// Require object keys to be sorted
	'sort-keys': [formatLogLevel, 'asc', {
		allowLineSeparatedGroups: true,
		caseSensitive           : false,
		natural                 : true
	}],

	// Require variables within the same declaration block to be sorted
	'sort-vars': [formatLogLevel, {ignoreCase: true}],

	// Require or disallow strict mode directives
	'strict': logLevel,

	// Require symbol descriptions
	'symbol-description': logLevel,

	// Require var declarations be placed at the top of their containing scope
	'vars-on-top': logLevel,

	/* Require or disallow “Yoda” conditions
	   @ts-expect-error 2322: One of type definition or document is wrong. */
	'yoda': [formatLogLevel, 'always', {exceptRange: true}]
});
