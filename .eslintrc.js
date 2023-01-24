const OFF = 0;
const WARN = 1;
const ERROR = 2;

const prettierrc = require('./prettierrc');
const layoutAndFormattingRules = require('./rules/layout-and-formatting');

/** @type {import('eslint').Linter.Config} */
module.exports = {
	// eslint-disable-next-line array-bracket-newline
	ignorePatterns: [
		'node_modules',
		'dist',
		'package-lock.json',
		'yarn.lock.json',
		'*.local'],

	root: true,
	env : {
		browser: true,
		node   : true,
	},
	parserOptions: {
		ecmaFeatures: {impliedStrict: true},
		ecmaVersion : 'latest',
		sourceType  : 'module',
	},

	rules: {
		...layoutAndFormattingRules,

		// Enforce camelcase naming convention
		'camelcase': ERROR,

		// Enforce or disallow capitalization of the first letter of a comment
		'capitalized-comments': [ERROR, 'always'],

		// Enforce consistent naming when capturing the current execution context
		'consistent-this': [ERROR, 'self'],

		/*
		 * Require function names to match the name of the variable or property
		 * to which they are assigned
		 */
		'func-name-matching': [ERROR,
			{
				considerPropertyDescriptor  : true,
				includeCommonJSModuleExports: true,
			}],

		// Require or disallow named `function` expressions
		'func-names': [ERROR, 'as-needed'],

		// Enforce the consistent use of either function declarations or expressions
		'func-style': ERROR,

		// Disallow specified identifiers
		'id-denylist': OFF,

		// Enforce minimum and maximum identifier lengths
		'id-length': ERROR,

		// Require identifiers to match a specified regular expression
		'id-match': OFF,

		// Enforce a maximum depth that blocks can be nested
		'max-depth': [ERROR, 3],

		// Enforce a maximum number of lines per file
		'max-lines': prettierrc.rangeEnd === Infinity
			? OFF
			: [ERROR,
					{
						max           : prettierrc.rangeEnd,
						skipBlankLines: true,
						skipComments  : true,
					}],

		// Enforce a maximum number of lines of code in a function
		'max-lines-per-function': [ERROR, {max: 20, skipBlankLines: true, skipComments: true}],

		// Enforce a maximum depth that callbacks can be nested
		'max-nested-callbacks': [ERROR, {max: 2}],

		// Enforce a maximum number of parameters in function definitions
		'max-params': ERROR,

		// Enforce a maximum number of statements allowed in function blocks
		'max-statements': ERROR,

		// Enforce a particular style for multiline comments
		'multiline-comment-style': ERROR,

		// Require constructor names to begin with a capital letter
		'new-cap': ERROR,

		// Disallow `Array` constructors
		'no-array-constructor': ERROR,

		// Disallow bitwise operators
		'no-bitwise': ERROR,

		// Disallow `continue` statements
		'no-continue': OFF,

		// Disallow inline comments after code
		'no-inline-comments': [ERROR, {ignorePattern: 'webpackChunkName:\\s.+'}],

		// Disallow `if` statements as the only statement in `else` blocks
		'no-lonely-if': ERROR,

		// Disallow mixed binary operators
		'no-mixed-operators': ERROR,

		// Disallow use of chained assignment expressions
		'no-multi-assign': ERROR,

		// Disallow multiple empty lines
		'no-multiple-empty-lines': [ERROR, {max: 1, maxBOF: 0, maxEOF: 0}],

		// Disallow negated conditions
		'no-negated-condition': ERROR,

		// Disallow nested ternary expressions
		'no-nested-ternary': ERROR,

		// Disallow `Object` constructors
		'no-new-object': ERROR,

		// Disallow the unary operators `++` and `--`
		'no-plusplus': [ERROR, {allowForLoopAfterthoughts: true}],

		// Disallow specified syntax
		'no-restricted-syntax': [ERROR,
			{
				selector: 'FunctionExpression',
				message : 'Function expressions are not allowed.',
			},
			{
				selector: 'WithStatement',
				message : 'With statements are not allowed.',
			},
			{
				selector: "CallExpression[callee.name='setTimeout'][arguments.length!=2]",
				message : 'setTimeout must always be invoked with two arguments.',
			},
			{
				selector: 'TemplateLiteral[expressions.length=0]',
				message : 'In this case, back quotes are not allowed. Use single quotes.',
			}],

		// Disallow ternary operators
		'no-ternary': OFF,

		// Disallow dangling underscores in identifiers
		'no-underscore-dangle': ERROR,

		// Disallow ternary operators when simpler alternatives exist
		'no-unneeded-ternary': ERROR,

		// Enforce variables to be declared together in functions
		'one-var': [ERROR, {var: 'always', let: 'always', const: 'never'}],

		// Require or disallow newlines around variable declarations
		'one-var-declaration-per-line': ERROR,

		// Require or disallow assignment operator shorthand where possible
		'operator-assignment': ERROR,

		// Disallow the use of `Math.pow` in favor of the `**` operator
		'prefer-exponentiation-operator': ERROR,

		/*
		 * Disallow using Object.assign with an object literal as the first argument
		 * and 'prefer the use of object spread instead.
		 */
		'prefer-object-spread': ERROR,

		// Require quotes around object literal property names
		'quote-props': [ERROR, prettierrc.quoteProps],

		// Require object keys to be sorted
		'sort-keys': [ERROR,
			'asc',
			{caseSensitive: false, natural: true}],

		// Require variables within the same declaration block to be sorted
		'sort-vars': [ERROR, {ignoreCase: true}],

		// Enforce consistent spacing after the `//` or `/*` in a comment
		'spaced-comment': [ERROR,
			'always',
			{line: {markers: ['/']}}],

		// Custom rules
		// eslint-disable-next-line sort-keys
		'complexity': [ERROR, {max: 2}],
		'curly'     : [ERROR,
			'multi-or-nest',
			'consistent'],
		'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
		'object-shorthand'      : [ERROR,
			'always',
			{avoidExplicitReturnArrows: true}],

		// Off rules
		// eslint-disable-next-line sort-keys
		'no-useless-computed-key': OFF,
		'sort-imports'           : OFF,
	},
	overrides: [{
		// eslint-disable-next-line array-element-newline
		files: ['.eslintrc.*', 'rules/*.js', 'prettierrc.*'],
		rules: {
			// To emphasise warning level of each rule
			'array-bracket-newline'   : [WARN, 'never'],
			'array-element-newline'   : [WARN, {multiline: true, minItems: 3}],
			'camelcase'               : OFF,
			'no-mixed-spaces-and-tabs': prettierrc.useTabs ? [WARN, 'smart-tabs'] : WARN,
			'no-restricted-globals'   : [ERROR,
				'document',
				'window',
				'navigator'],
			'sort-keys': [ERROR,
				'asc',
				{minKeys: 20}],
		},
	}],
};