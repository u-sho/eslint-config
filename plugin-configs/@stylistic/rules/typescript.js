/**
 * @description `@stylistic/eslint-plugin-ts` rules by @u-sho.
 * @see https://eslint.style/packages/ts
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint 'sort-keys': 'off' -- grouping the same rules */
/* eslint 'eslint-comments/require-description': 'off' */


/** Get ts (`@stylistic/eslint-plugin-ts`) rules
 * @type {import('./types').GetRulesTs}
 * @param formatLogLevel - default: `'warn'`
 * @param options - default:
 * ```javascript
 * {
 * 	short       : false,
 * 	blockSpacing: true,
 * 	braceStyle  : '1tbs',
 * 	commaDangle : 'never',
 * 	indent      : 'tab',
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
		blockSpacing = true,
		braceStyle   = '1tbs',
		commaDangle  = 'never',
		indent       = 'tab',
		quoteProps   = 'consistent-as-needed',
		quotes       = 'single',
		semi         = true
	} = {} /* eslint-enable @stylistic/no-multi-spaces */
) => ({
	// Disallow or enforce spaces inside of blocks after opening block and before closing block
	'block-spacing'                   : 0,
	'@typescript-eslint/block-spacing': 0,
	'@stylistic/block-spacing'        : 0,
	'@stylistic/js/block-spacing'     : 0,
	'@stylistic/ts/block-spacing'     : [formatLogLevel, blockSpacing ? 'always' : 'never'],

	// Enforce consistent brace style for blocks
	'brace-style'                   : 0,
	'@typescript-eslint/brace-style': 0,
	'@stylistic/brace-style'        : 0,
	'@stylistic/js/brace-style'     : 0,
	'@stylistic/ts/brace-style'     : [formatLogLevel, braceStyle, {allowSingleLine: true}],

	// Require or disallow trailing commas
	'comma-dangle'                   : 0,
	'@typescript-eslint/comma-dangle': 0,
	'@stylistic/comma-dangle'        : 0,
	'@stylistic/js/comma-dangle'     : 0,
	'@stylistic/ts/comma-dangle'     : [formatLogLevel, commaDangle],

	// Enforce consistent spacing before and after commas
	'comma-spacing'                   : 0,
	'@typescript-eslint/comma-spacing': 0,
	'@stylistic/comma-spacing'        : 0,
	'@stylistic/js/comma-spacing'     : 0,
	'@stylistic/ts/comma-spacing'     : [formatLogLevel, {before: false, after: !short}],

	// Require or disallow spacing between function identifiers and their invocations
	'func-call-spacing'                   : 0,
	'@typescript-eslint/func-call-spacing': 0,
	'@stylistic/func-call-spacing'        : 0, // Same as `@stylistic/function-call-spacing`
	'@stylistic/js/func-call-spacing'     : 0, // Same as `@stylistic/js/function-call-spacing`
	/* '@stylistic/ts/func-call-spacing': formatLogLevel,
	   // Same as `@stylistic/ts/function-call-spacing` */

	// Require or disallow spacing between function identifiers and their invocations
	'@stylistic/function-call-spacing'   : 0,
	'@stylistic/js/function-call-spacing': 0,
	'@stylistic/ts/function-call-spacing': formatLogLevel,

	// Enforce consistent indentation
	'indent'                   : 0,
	'@typescript-eslint/indent': 0,
	'@stylistic/indent'        : 0,
	'@stylistic/js/indent'     : 0,
	'@stylistic/ts/indent'     : [formatLogLevel, indent, {
		/* eslint-disable @stylistic/indent */
		ignoredNodes: ['TSUnionType',
		               'TSIntersectionType',
		               'TSTypeParameterInstantiation',
		               'TemplateLiteral *'],
		/* eslint-enable @stylistic/indent */
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

	// Enforce consistent spacing between property names and type annotations in types and interfaces
	'key-spacing'                   : 0,
	'@typescript-eslint/key-spacing': 0,
	'@stylistic/key-spacing'        : 0,
	'@stylistic/js/key-spacing'     : 0,
	/* eslint-disable @stylistic/indent */
	'@stylistic/ts/key-spacing'     : [formatLogLevel,
	                                   // eslint-disable-next-line @stylistic/multiline-ternary
	                                   short ? {beforeColon: false, afterColon: true}
	                                         : {align: 'colon'}],
	/* eslint-enable @stylistic/indent */

	// Enforce consistent spacing before and after keywords
	'keyword-spacing'                   : 0,
	'@typescript-eslint/keyword-spacing': 0,
	'@stylistic/keyword-spacing'        : 0,
	'@stylistic/js/keyword-spacing'     : 0,
	'@stylistic/ts/keyword-spacing'     : [formatLogLevel, {overrides: {
		for    : {after: false},
		do     : {after: false},
		while  : {after: false},
		try    : {after: false},
		catch  : {after: false},
		finally: {after: false},
		if     : {after: !short},
		else   : {after: !short},
		switch : {after: !short}
	}}],

	// Require empty lines around comments
	'lines-around-comment'                   : 0,
	'@typescript-eslint/lines-around-comment': 0,
	'@stylistic/lines-around-comment'        : 0,
	'@stylistic/js/lines-around-comment'     : 0,
	'@stylistic/ts/lines-around-comment'     : [formatLogLevel, {
		beforeBlockComment: true,
		afterBlockComment : false,
		beforeLineComment : true,
		afterLineComment  : false,

		allowArrayStart    : true,
		allowArrayEnd      : false,
		allowBlockStart    : true,
		allowBlockEnd      : false,
		allowClassStart    : true,
		allowClassEnd      : false,
		allowEnumStart     : true,
		allowEnumEnd       : false,
		allowInterfaceStart: true,
		allowInterfaceEnd  : false,
		allowModuleStart   : true,
		allowModuleEnd     : false,
		allowObjectStart   : true,
		allowObjectEnd     : false,
		allowTypeStart     : true,
		allowTypeEnd       : false
	}],

	// Require or disallow an empty line between class members
	'lines-between-class-members'                   : 0,
	'@typescript-eslint/lines-between-class-members': 0,
	'@stylistic/lines-between-class-members'        : 0,
	'@stylistic/js/lines-between-class-members'     : 0,
	'@stylistic/ts/lines-between-class-members'     : formatLogLevel,

	// Require a specific member delimiter style for interfaces and type literals
	'@typescript-eslint/member-delimiter-style': 0,
	'@stylistic/member-delimiter-style'        : 0,
	'@stylistic/ts/member-delimiter-style'     : [formatLogLevel, {
		multiline         : {delimiter: semi ? 'semi' : 'none', requireLast: semi},
		singleline        : {delimiter: semi ? 'semi' : 'comma', requireLast: semi && !short},
		multilineDetection: 'brackets'
	}],

	// Disallow unnecessary parentheses
	'no-extra-parens'                   : 0,
	'@typescript-eslint/no-extra-parens': 0,
	'@stylistic/no-extra-parens'        : 0,
	'@stylistic/js/no-extra-parens'     : 0,
	'@stylistic/ts/no-extra-parens'     : short
		? formatLogLevel
		: [formatLogLevel, 'all', {ternaryOperandBinaryExpressions: false,
		                           enforceForArrowConditionals    : false}], // eslint-disable-line @stylistic/indent


	// Disallow unnecessary semicolons
	'no-extra-semi'                   : 0,
	'@typescript-eslint/no-extra-semi': 0,
	'@stylistic/no-extra-semi'        : 0,
	'@stylistic/js/no-extra-semi'     : 0,
	'@stylistic/ts/no-extra-semi'     : formatLogLevel,

	// Enforce consistent line breaks after opening and before closing braces
	'object-curly-newline'              : 0,
	'@stylistic/object-curly-newline'   : 0,
	'@stylistic/js/object-curly-newline': 0,
	'@stylistic/ts/object-curly-newline': [formatLogLevel, {consistent: true}],

	// Enforce consistent spacing inside braces
	'object-curly-spacing'              : 0,
	'@stylistic/object-curly-spacing'   : 0,
	'@stylistic/js/object-curly-spacing': 0,
	'@stylistic/ts/object-curly-spacing': [formatLogLevel, blockSpacing ? 'always' : 'never'],

	// Enforce placing object properties on separate lines
	'object-property-newline'              : 0,
	'@stylistic/object-property-newline'   : 0,
	'@stylistic/js/object-property-newline': 0,
	'@stylistic/ts/object-property-newline': [formatLogLevel, {allowAllPropertiesOnSameLine: true}],

	// Require or disallow padding lines between statements
	'padding-line-between-statements'                   : 0,
	'@typescript-eslint/padding-line-between-statements': 0,
	'@stylistic/padding-line-between-statements'        : 0,
	'@stylistic/js/padding-line-between-statements'     : 0,
	'@stylistic/ts/padding-line-between-statements'     : [formatLogLevel,
		/* eslint-disable @stylistic/indent, @stylistic/no-multi-spaces */
		{blankLine: 'always', prev: '*', next: ['enum', 'interface']},
		{blankLine: 'always', next: '*', prev: ['enum', 'interface']},
		{blankLine: 'never', prev: 'function-overload', next: 'function'},

		{blankLine: 'always',                prev: 'directive', next: '*'},
		{blankLine: short ? 'never' : 'any', prev: 'directive', next: 'directive'},
		{blankLine: 'always',                prev: 'import', next: '*'},
		{blankLine: short ? 'never' : 'any', prev: 'import', next: 'import'},
		{blankLine: short ? 'any' : 'always', prev: ['case', 'default'], next: '*'},
		{blankLine: 'never',                  prev: ['case', 'default'], next: ['case', 'default']},

		{blankLine: short ? 'any' : 'always',
		 prev     : '*',
		 next     : ['try', 'switch', 'return', 'multiline-export', 'singleline-export']}],
		/* eslint-enable @stylistic/indent, @stylistic/no-multi-spaces */

	// Require quotes around object literal, type literal, interfaces and enums property names
	'quote-props'              : 0,
	'@stylistic/quote-props'   : 0,
	'@stylistic/js/quote-props': 0,
	'@stylistic/ts/quote-props': [formatLogLevel, quoteProps],

	// Enforce the consistent use of either backticks, double, or single quotes
	'quotes'                   : 0,
	'@typescript-eslint/quotes': 0,
	'@stylistic/quotes'        : 0,
	'@stylistic/js/quotes'     : 0,
	'@stylistic/ts/quotes'     : [formatLogLevel, quotes, {
		avoidEscape          : true,
		allowTemplateLiterals: false,
		ignoreStringLiterals : false
	}],

	// Require or disallow semicolons instead of ASI
	'semi'                   : 0,
	'@typescript-eslint/semi': 0,
	'@stylistic/semi'        : 0,
	'@stylistic/js/semi'     : 0,
	'@stylistic/ts/semi'     : semi
	/*                      */ ? [formatLogLevel, 'always', {omitLastInOneLineBlock: short}]
	/*                      */ : [formatLogLevel, 'never', {beforeStatementContinuationChars: short ? 'any' : 'always'}],

	// Enforce consistent spacing before and after semicolons
	'semi-spacing'              : 0,
	'@stylistic/semi-spacing'   : 0,
	'@stylistic/js/semi-spacing': 0,
	'@stylistic/ts/semi-spacing': formatLogLevel,

	// Enforce consistent spacing before blocks
	'space-before-blocks'                   : 0,
	'@typescript-eslint/space-before-blocks': 0,
	'@stylistic/space-before-blocks'        : 0,
	'@stylistic/js/space-before-blocks'     : 0,
	'@stylistic/ts/space-before-blocks'     : [formatLogLevel, short ? 'never' : {functions: 'never'}],

	// Enforce consistent spacing before function parenthesis
	'space-before-function-paren'                   : 0,
	'@typescript-eslint/space-before-function-paren': 0,
	'@stylistic/space-before-function-paren'        : 0,
	'@stylistic/js/space-before-function-paren'     : 0,
	/* eslint-disable @stylistic/indent */
	'@stylistic/ts/space-before-function-paren'     : [formatLogLevel,
		short
		? 'never'
		: {anonymous: 'never', named: 'never', asyncArrow: 'always'}],
		/* eslint-enable @stylistic/indent */

	// Require spacing around infix operators
	'space-infix-ops'                   : 0,
	'@typescript-eslint/space-infix-ops': 0,
	'@stylistic/space-infix-ops'        : 0,
	'@stylistic/js/space-infix-ops'     : 0,
	'@stylistic/ts/space-infix-ops'     : short ? 0 : formatLogLevel,

	// Require consistent spacing around type annotations
	'@typescript-eslint/type-annotation-spacing': 0, /* eslint-disable @stylistic/indent, @stylistic/key-spacing */
	'@stylistic/type-annotation-spacing'        : 0, /* eslint-disable @stylistic/object-property-newline */
	'@stylistic/ts/type-annotation-spacing': short
		? [formatLogLevel, {/*                */before: false, after: true,
		                    overrides: {arrow: {before: false, after: false}}}]
		: 0 // '@stylistic/ts/key-spacing' works instead
}); /* eslint-enable @stylistic/indent, @stylistic/key-spacing, @stylistic/object-property-newline */
