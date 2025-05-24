/**
 * @description `@stylistic/eslint-plugin-js` rules by @u-sho.
 * @see https://eslint.style/packages/js
 * @author u-sho (Shouhei Uechi)
*/

// @ts-check
/* eslint 'sort-keys': 'off' -- grouping the same rules */


/** Get stylistic js (`@stylistic/eslint-plugin-js`) rules.
 * @type {import('./types').GetRulesJs}
 *
 * @param formatLogLevel - default:`'warn'`
 * @param options        - default:
 * ```javascript
 * {
 * 	short       : false,
 * 	printWidth  : 100,
 * 	tabWidth    : 3,
 * 	arrowParens : false,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
 * 	jsx         : false,
 * 	quoteProps  : 'consistent-as-needed',
 * 	quotes      : 'single',
 * 	semi        : true
 * }
 * ```
 */
export default (
	formatLogLevel = 'warn',
	{/* eslint-disable @stylistic/no-multi-spaces */
		short        = false,
		printWidth   = 100,
		tabWidth     = 3,
		arrowParens  = false,
		blockSpacing = true,
		braceStyle   = '1tbs',
		commaDangle  = 'never',
		indent       = 'tab',
		jsx          = false,
		quoteProps   = 'consistent-as-needed',
		quotes       = 'single',
		semi         = true
	} = {} /* eslint-enable @stylistic/no-multi-spaces */
) => ({
	// Enforce linebreaks after opening and before closing array brackets
	'array-bracket-newline'              : 0,
	'@stylistic/array-bracket-newline'   : 0,
	'@stylistic/js/array-bracket-newline': formatLogLevel,

	// Enforce consistent spacing inside array brackets
	'array-bracket-spacing'              : 0,
	'@stylistic/array-bracket-spacing'   : 0,
	'@stylistic/js/array-bracket-spacing': formatLogLevel,

	// Enforce line breaks after each array element
	'array-element-newline'              : 0,
	'@stylistic/array-element-newline'   : 0,
	'@stylistic/js/array-element-newline': [formatLogLevel, {consistent: true, multiline: true}],

	// Require parentheses around arrow function arguments
	'arrow-parens'              : 0,
	'@stylistic/arrow-parens'   : 0,
	'@stylistic/js/arrow-parens': [formatLogLevel, arrowParens ? 'always' : 'as-needed'],

	// Enforce consistent spacing before and after the arrow in arrow functions
	'arrow-spacing'              : 0,
	'@stylistic/arrow-spacing'   : 0, /* eslint-disable @stylistic/multiline-ternary */
	'@stylistic/js/arrow-spacing': [formatLogLevel, (arrowParens && short) ? {before: false, after: false}
	/* eslint-enable @stylistic/multiline-ternary                       */ : {before: true, after: true}],

	// Disallow or enforce spaces inside of blocks after opening block and before closing block
	'block-spacing'              : 0,
	'@stylistic/block-spacing'   : 0,
	'@stylistic/js/block-spacing': [formatLogLevel, blockSpacing ? 'always' : 'never'],

	// Enforce consistent brace style for blocks
	'brace-style'              : 0,
	'@stylistic/brace-style'   : 0,
	'@stylistic/js/brace-style': [formatLogLevel, braceStyle, {allowSingleLine: true}],

	// Require or disallow trailing commas
	'comma-dangle'              : 0,
	'@stylistic/comma-dangle'   : 0,
	'@stylistic/js/comma-dangle': [formatLogLevel, commaDangle],

	// Enforce consistent spacing before and after commas
	'comma-spacing'              : 0,
	'@stylistic/comma-spacing'   : 0,
	'@stylistic/js/comma-spacing': [formatLogLevel, {before: false, after: !short}],

	// Enforce consistent comma style
	'comma-style'              : 0,
	'@stylistic/comma-style'   : 0,
	'@stylistic/js/comma-style': [formatLogLevel, short ? 'first' : 'last'],

	// Enforce consistent spacing inside computed property brackets
	'computed-property-spacing'              : 0,
	'@stylistic/computed-property-spacing'   : 0,
	'@stylistic/js/computed-property-spacing': formatLogLevel,

	// Enforce consistent newlines before and after dots
	'dot-location'              : 0,
	'@stylistic/dot-location'   : 0,
	'@stylistic/js/dot-location': [formatLogLevel, short ? 'object' : 'property'],

	// Require or disallow newline at the end of files
	'eol-last'              : 0,
	'@stylistic/eol-last'   : 0,
	'@stylistic/js/eol-last': [formatLogLevel, short ? 'never' : 'always'],

	// Require or disallow spacing between function identifiers and their invocations
	'func-call-spacing'           : 0,
	'@stylistic/func-call-spacing': 0, // Same as `@stylistic/function-call-spacing`
	// '@stylistic/js/func-call-spacing': 0, // Same as `@stylistic/js/function-call-spacing`

	// Enforce line breaks between arguments of a function call
	'function-call-argument-newline'              : 0,
	'@stylistic/function-call-argument-newline'   : 0,
	'@stylistic/js/function-call-argument-newline': [formatLogLevel, 'consistent'],

	// Require or disallow spacing between function identifiers and their invocations
	'@stylistic/function-call-spacing'   : 0,
	'@stylistic/js/function-call-spacing': formatLogLevel,

	// Enforce consistent line breaks inside function parentheses
	'function-paren-newline'              : 0,
	'@stylistic/function-paren-newline'   : 0,
	'@stylistic/js/function-paren-newline': [formatLogLevel, short ? 'multiline' : 'consistent'],

	// Enforce consistent spacing around `*` operators in generator functions
	'generator-star-spacing'              : 0,
	'@stylistic/generator-star-spacing'   : 0,
	'@stylistic/js/generator-star-spacing': [formatLogLevel, 'before'],

	// Enforce the location of arrow function bodies
	'implicit-arrow-linebreak'              : 0,
	'@stylistic/implicit-arrow-linebreak'   : 0,
	'@stylistic/js/implicit-arrow-linebreak': formatLogLevel,

	// Enforce consistent indentation
	'indent'              : 0,
	'@stylistic/indent'   : 0,
	'@stylistic/js/indent': [formatLogLevel, indent, {
		ignoredNodes: ['TSUnionType', /* eslint-disable @stylistic/indent */
		               'TSIntersectionType',
		               'TSTypeParameterInstantiation',
		               'TemplateLiteral *'], /* eslint-enable @stylistic/indent */
		SwitchCase              : 1,
		VariableDeclarator      : 'first',
		outerIIFEBody           : short ? 0 : 1,
		MemberExpression        : 1,
		FunctionDeclaration     : {parameters: 'first', body: 1},
		FunctionExpression      : {parameters: 'first', body: 1},
		StaticBlock             : {body: 1},
		CallExpression          : {arguments: 'first'},
		ArrayExpression         : 'first',
		ObjectExpression        : 'first',
		ImportDeclaration       : 'first',
		flatTernaryExpressions  : false,
		offsetTernaryExpressions: true,
		ignoreComments          : false
	}],

	...jsx
		? {
				// Enforce the consistent use of either double or single quotes in JSX attributes
				'jsx-quotes'              : 0,
				'@stylistic/jsx-quotes'   : 0,
				'@stylistic/js/jsx-quotes': formatLogLevel
		  } // eslint-disable-line @stylistic/indent -- smart-tabs
		: {},

	// Enforce consistent spacing between property names and type annotations in types and interfaces
	'key-spacing'              : 0,
	'@stylistic/key-spacing'   : 0, /* eslint-disable-next-line @stylistic/multiline-ternary -- +1 */
	'@stylistic/js/key-spacing': [formatLogLevel, short ? {beforeColon: false, afterColon: true}
	/*                                               */ : {align: 'colon'}],

	// Enforce consistent spacing before and after keywords
	'keyword-spacing'              : 0,
	'@stylistic/keyword-spacing'   : 0,
	'@stylistic/js/keyword-spacing': [formatLogLevel, {
		overrides: {
			for    : {after: false},
			do     : {after: false},
			while  : {after: false},
			try    : {after: false},
			catch  : {after: false},
			finally: {after: false},
			if     : {after: !short},
			else   : {after: !short},
			switch : {after: !short}
		}
	}],

	// Enforce position of line comments
	'@stylistic/line-comment-position'   : 0,
	'@stylistic/js/line-comment-position': [formatLogLevel, {
		ignorePattern             : '(eslint-disable-line\\s.+|webpackChunkName:\\s.+)',
		applyDefaultIgnorePatterns: false
	}],

	// Enforce consistent linebreak style
	'linebreak-style'              : 0,
	'@stylistic/linebreak-style'   : 0,
	'@stylistic/js/linebreak-style': formatLogLevel,

	// Require empty lines around comments
	'lines-around-comment'              : 0,
	'@stylistic/lines-around-comment'   : 0,
	'@stylistic/js/lines-around-comment': [formatLogLevel, {
		beforeBlockComment: true,
		afterBlockComment : false,
		beforeLineComment : true,
		afterLineComment  : false,
		allowArrayStart   : true,
		allowArrayEnd     : false,
		allowBlockStart   : true,
		allowBlockEnd     : false,
		allowClassStart   : true,
		allowClassEnd     : false,
		allowObjectStart  : true,
		allowObjectEnd    : false
	}],

	// Require or disallow an empty line between class members
	'lines-between-class-members'              : 0,
	'@stylistic/lines-between-class-members'   : 0,
	'@stylistic/js/lines-between-class-members': formatLogLevel,

	// Enforce a maximum line length
	'max-len'              : 0,
	'@stylistic/max-len'   : 0,
	'@stylistic/js/max-len': [formatLogLevel, {
		code                  : printWidth,
		comments              : printWidth,
		tabWidth,
		ignoreUrls            : true,
		ignoreStrings         : true,
		ignoreTemplateLiterals: true,
		ignoreRegExpLiterals  : true
	}],

	// Enforce a maximum number of statements allowed per line
	'max-statements-per-line'              : 0,
	'@stylistic/max-statements-per-line'   : 0,
	'@stylistic/js/max-statements-per-line': [formatLogLevel,
	/*                                     */ {max: 1, ignoredNodes: ['BreakStatement']}],

	// Enforce a particular style for multiline comments
	'@stylistic/multiline-comment-style'   : 0,
	'@stylistic/js/multiline-comment-style': [formatLogLevel, 'separate-lines'],

	// Enforce newlines between operands of ternary expressions
	'multiline-ternary'              : 0,
	'@stylistic/multiline-ternary'   : 0,
	'@stylistic/js/multiline-ternary': [formatLogLevel, 'always-multiline'],

	// Enforce or disallow parentheses when invoking a constructor with no arguments
	'new-parens'              : 0,
	'@stylistic/new-parens'   : 0,
	'@stylistic/js/new-parens': [formatLogLevel, short ? 'never' : 'always'],

	// Require a newline after each call in a method chain
	'newline-per-chained-call'              : 0,
	'@stylistic/newline-per-chained-call'   : 0,
	'@stylistic/js/newline-per-chained-call': short ? 0 : formatLogLevel,

	// Disallow arrow functions where they could be confused with comparisons
	'no-confusing-arrow'              : 0,
	'@stylistic/no-confusing-arrow'   : 0,
	'@stylistic/js/no-confusing-arrow': short ? 0 : formatLogLevel,

	// Disallow unnecessary parentheses
	'no-extra-parens'              : 0,
	'@stylistic/no-extra-parens'   : 0,
	'@stylistic/js/no-extra-parens': short /* eslint-disable @stylistic/indent */
	                                 ? formatLogLevel
	                                 : [formatLogLevel,
	                                    'all',
	                                    {ternaryOperandBinaryExpressions: false,
	                                     enforceForArrowConditionals    : false}],
	                                    /* eslint-enable @stylistic/indent */

	// Disallow unnecessary semicolons
	'no-extra-semi'              : 0,
	'@stylistic/no-extra-semi'   : 0,
	'@stylistic/js/no-extra-semi': formatLogLevel,

	// Disallow leading or trailing decimal points in numeric literals
	'no-floating-decimal'              : 0,
	'@stylistic/no-floating-decimal'   : 0,
	'@stylistic/js/no-floating-decimal': formatLogLevel,

	// Disallow mixed binary operators
	'no-mixed-operators'              : 0,
	'@stylistic/no-mixed-operators'   : 0,
	'@stylistic/js/no-mixed-operators': [formatLogLevel, {allowSamePrecedence: true}],

	// Disallow mixed spaces and tabs for indentation
	'no-mixed-spaces-and-tabs'              : 0,
	'@stylistic/no-mixed-spaces-and-tabs'   : 0,
	'@stylistic/js/no-mixed-spaces-and-tabs': 'tab' === indent
	/*                                     */ ? [formatLogLevel, 'smart-tabs']
	/*                                     */ : formatLogLevel,

	// Disallow multiple spaces
	'no-multi-spaces'              : 0,
	'@stylistic/no-multi-spaces'   : 0,
	'@stylistic/js/no-multi-spaces': [formatLogLevel, {
		includeTabs: true,
		...short
			? {ignoreEOLComments: false}
			: {ignoreEOLComments: true, /* eslint-disable @stylistic/indent */
			   exceptions       : {Property           : true,
			                       TSPropertySignature: true,
			                       ImportAttribute    : true,
			                       ImportDeclaration  : true,
			                       VariableDeclarator : true}} /* eslint-enable @stylistic/indent */
	}],

	// Disallow multiple empty lines
	'no-multiple-empty-lines'              : 0,
	'@stylistic/no-multiple-empty-lines'   : 0,
	'@stylistic/js/no-multiple-empty-lines': [formatLogLevel, {
		max   : short ? 1 : 2,
		maxBOF: 0,
		maxEOF: short ? 0 : 1
	}],

	// Disallow all tabs
	'no-tabs'              : 0,
	'@stylistic/no-tabs'   : 0,
	'@stylistic/js/no-tabs': 'tab' === indent /* eslint-disable @stylistic/indent */
	                         ? [formatLogLevel, {allowIndentationTabs: true}]
	                         : formatLogLevel, /* eslint-enable @stylistic/indent */

	// Disallow trailing whitespace at the end of lines
	'no-trailing-spaces'              : 0,
	'@stylistic/no-trailing-spaces'   : 0,
	'@stylistic/js/no-trailing-spaces': formatLogLevel,

	// Disallow whitespace before properties
	'no-whitespace-before-property'              : 0,
	'@stylistic/no-whitespace-before-property'   : 0,
	'@stylistic/js/no-whitespace-before-property': formatLogLevel,

	// Enforce the location of single-line statements
	'nonblock-statement-body-position'              : 0,
	'@stylistic/nonblock-statement-body-position'   : 0,
	'@stylistic/js/nonblock-statement-body-position': 0, // Subset of 'curly'

	// Enforce consistent line breaks after opening and before closing braces
	'object-curly-newline'              : 0,
	'@stylistic/object-curly-newline'   : 0,
	'@stylistic/js/object-curly-newline': [formatLogLevel, {consistent: true}],

	// Enforce consistent spacing inside braces
	'object-curly-spacing'              : 0,
	'@stylistic/object-curly-spacing'   : 0,
	'@stylistic/js/object-curly-spacing': [formatLogLevel, blockSpacing ? 'always' : 'never'],

	// Enforce placing object properties on separate lines
	'object-property-newline'              : 0,
	'@stylistic/object-property-newline'   : 0,
	'@stylistic/js/object-property-newline': [formatLogLevel, {allowAllPropertiesOnSameLine: true}],

	// Require or disallow newlines around variable declarations
	'one-var-declaration-per-line'              : 0,
	'@stylistic/one-var-declaration-per-line'   : 0,
	'@stylistic/js/one-var-declaration-per-line': formatLogLevel,

	// Enforce consistent linebreak style for operators
	'operator-linebreak'              : 0,
	'@stylistic/operator-linebreak'   : 0,
	'@stylistic/js/operator-linebreak': [formatLogLevel, 'before'],

	// Require or disallow padding within blocks
	'padded-blocks'              : 0,
	'@stylistic/padded-blocks'   : 0,
	'@stylistic/js/padded-blocks': [formatLogLevel, 'never'],

	// Require or disallow padding lines between statements
	'padding-line-between-statements'              : 0,
	'@stylistic/padding-line-between-statements'   : 0,
	'@stylistic/js/padding-line-between-statements': [formatLogLevel,
		/* eslint-disable @stylistic/indent, @stylistic/no-multi-spaces */
		{blankLine: 'always', prev: 'directive', next: '*'},
		{blankLine: 'always', prev: 'import',    next: '*'},
		{blankLine: short ? 'never' : 'any', prev: 'directive', next: 'directive'},
		{blankLine: short ? 'never' : 'any', prev: 'import',    next: 'import'},

		{blankLine: short ? 'any' : 'always', prev: ['case', 'default'], next: '*'},
		{blankLine: 'never',                  prev: ['case', 'default'], next: ['case', 'default']},

		{blankLine: short ? 'any' : 'always',
		 prev     : '*',
		 next     : ['try', 'switch', 'return', 'multiline-export', 'singleline-export']}],
		/* eslint-enable @stylistic/indent, @stylistic/no-multi-spaces */

	// Require quotes around object literal, type literal, interfaces and enums property names
	'quote-props'              : 0,
	'@stylistic/quote-props'   : 0,
	'@stylistic/js/quote-props': [formatLogLevel, quoteProps],

	// Enforce the consistent use of either backticks, double, or single quotes
	'quotes'              : 0,
	'@stylistic/quotes'   : 0, /* eslint-disable @stylistic/indent */
	'@stylistic/js/quotes': [formatLogLevel, quotes, {avoidEscape          : true,
	                                                  allowTemplateLiterals: false,
	            /* eslint-enable @stylistic/indent */ ignoreStringLiterals : false}],

	// Enforce spacing between rest and spread operators and their expressions
	'rest-spread-spacing'              : 0,
	'@stylistic/rest-spread-spacing'   : 0,
	'@stylistic/js/rest-spread-spacing': [formatLogLevel, 'never'],

	// Require or disallow semicolons instead of ASI
	'semi'              : 0,
	'@stylistic/semi'   : 0,
	'@stylistic/js/semi': semi
		? [formatLogLevel, 'always', {omitLastInOneLineBlock: !!short}]
		: [formatLogLevel, 'never', {beforeStatementContinuationChars: short ? 'any' : 'always'}],

	// Enforce consistent spacing before and after semicolons
	'semi-spacing'              : 0,
	'@stylistic/semi-spacing'   : 0,
	'@stylistic/js/semi-spacing': formatLogLevel,

	// Enforce location of semicolons
	'semi-style'              : 0,
	'@stylistic/semi-style'   : 0,
	'@stylistic/js/semi-style': formatLogLevel,

	// Enforce consistent spacing before blocks
	'space-before-blocks'              : 0,
	'@stylistic/space-before-blocks'   : 0,
	'@stylistic/js/space-before-blocks': [formatLogLevel, short ? 'never' : {functions: 'never'}],

	// Enforce consistent spacing before function parenthesis
	'space-before-function-paren'              : 0,
	'@stylistic/space-before-function-paren'   : 0,
	'@stylistic/js/space-before-function-paren': short
		? [formatLogLevel, 'never']
		: [formatLogLevel, {anonymous: 'never', named: 'never', asyncArrow: 'always'}],


	// Enforce consistent spacing inside parentheses
	'space-in-parens'              : 0,
	'@stylistic/space-in-parens'   : 0,
	'@stylistic/js/space-in-parens': short
		? formatLogLevel
		: [formatLogLevel, 'never', {exceptions: ['()']}],

	// Require spacing around infix operators
	'space-infix-ops'              : 0,
	'@stylistic/space-infix-ops'   : 0,
	'@stylistic/js/space-infix-ops': short ? 0 : formatLogLevel,

	// Enforce consistent spacing before or after unary operators
	'space-unary-ops'              : 0,
	'@stylistic/space-unary-ops'   : 0,
	'@stylistic/js/space-unary-ops': formatLogLevel,

	// Enforce consistent spacing after the `//` or `/*` in a comment
	'spaced-comment'              : 0,
	'@stylistic/spaced-comment'   : 0,
	'@stylistic/js/spaced-comment': [formatLogLevel, 'always', {block: {balanced: true}}],

	// Enforce spacing around colons of switch statements
	'switch-colon-spacing'              : 0,
	'@stylistic/switch-colon-spacing'   : 0,
	'@stylistic/js/switch-colon-spacing': formatLogLevel,

	// Require or disallow spacing around embedded expressions of template strings
	'template-curly-spacing'              : 0,
	'@stylistic/template-curly-spacing'   : 0,
	'@stylistic/js/template-curly-spacing': formatLogLevel,

	// Require or disallow spacing between template tags and their literals
	'template-tag-spacing'              : 0,
	'@stylistic/template-tag-spacing'   : 0,
	'@stylistic/js/template-tag-spacing': formatLogLevel,

	// Require parentheses around immediate `function` invocations
	'wrap-iife'              : 0,
	'@stylistic/wrap-iife'   : 0,
	'@stylistic/js/wrap-iife': short
		? 0
		: [formatLogLevel, 'inside', {functionPrototypeMethods: true}],

	// Require parenthesis around regex literals
	'wrap-regex'              : 0,
	'@stylistic/wrap-regex'   : 0,
	'@stylistic/js/wrap-regex': 0, // Unwrapped is better I think

	// Require or disallow spacing around the `*` in `yield*` expressions
	'yield-star-spacing'              : 0,
	'@stylistic/yield-star-spacing'   : 0,
	'@stylistic/js/yield-star-spacing': [formatLogLevel, 'after']
});
