const OFF = 0;
const WARN = 1;
const ERROR = 2;
const LOG_LEVEL = WARN;

const prettierrc = require('../prettierrc');

/**
 * @see https://eslint.org/docs/latest/rules/#layout--formatting
 * @type {import('eslint/rules').ESLintRules}
 */
// eslint-disable-next-line object-curly-newline
module.exports = {
	// Enforce linebreaks after opening and before closing array brackets.
	'array-bracket-newline': LOG_LEVEL,

	// Enforce consistent spacing inside array brackets.
	'array-bracket-spacing': LOG_LEVEL,

	// Enforce line breaks after each array element.
	'array-element-newline': LOG_LEVEL,

	// Require parentheses around arrow function arguments.
	'arrow-parens': [LOG_LEVEL, prettierrc.arrowParens],

	// Enforce consistent spacing before and after the arrow in arrow functions.
	'arrow-spacing': [LOG_LEVEL,
	                  'always' === prettierrc.arrowParens
	                    ? {before: false, after: false}
	                    : {before: true, after: true}],

	// Enforce spaces; after opening block and before closing block

	'block-spacing': [LOG_LEVEL, prettierrc.bracketSpacing ? 'always' : 'never'],

	// Consistent brace style for blocks
	'brace-style': [LOG_LEVEL,
	                '1tbs',
	                {allowSingleLine: true}],

	// Require or disallow trailing commas
	'comma-dangle': [LOG_LEVEL, 'es5' === prettierrc.trailingCommas ? 'always-multiline' : 'never'],

	// Enforce consistent spacing before and after commas
	'comma-spacing': LOG_LEVEL,

	// Enforce consistent comma style
	'comma-style': LOG_LEVEL,

	// Enforce consistent spacing inside computed property brackets
	'computed-property-spacing': LOG_LEVEL,

	// Enforce consistent newlines before and after dots
	'dot-location': LOG_LEVEL,

	// Require or disallow newline at the end of files
	'eol-last': [LOG_LEVEL, 'never'],

	// Disallow spacing between function identifiers and their invocations
	'func-call-spacing': LOG_LEVEL,

	// Enforce line breaks between arguments of a function call
	'function-call-argument-newline': [LOG_LEVEL, 'consistent'],

	// Enforce consistent line breaks inside function parentheses
	'function-paren-newline': LOG_LEVEL,

	// Enforce consistent spacing around * operators in generator functions
	'generator-star-spacing': LOG_LEVEL,

	// Enforce the location of arrow function bodies
	'implicit-arrow-linebreak': LOG_LEVEL,

	// Enforce consistent indentation
	'indent': [LOG_LEVEL,
	           prettierrc.useTabs ? 'tab' : prettierrc.tabWidth,
	           {SwitchCase              : 1,
	            VariableDeclarator      : 'first',
	            FunctionDeclaration     : {parameters: 'first'},
	            FunctionExpression      : {parameters: 'first'},
	            ArrayExpression         : 'first',
	            ObjectExpression        : 'first',
	            ImportDeclaration       : 'first',
	            offsetTernaryExpressions: true}],

	// Enforce the consistent use of either " or ' quotes in JSX attributes
	'jsx-quotes': [LOG_LEVEL, prettierrc.jsxSingleQuote ? 'prefer-single' : 'prefer-double'],

	// Enforce consistent spacing in every key-value object literal properties
	'key-spacing': [LOG_LEVEL, {align: 'colon'}],

	// Enforce consistent spacing before and after keywords
	'keyword-spacing': [LOG_LEVEL,
	                    {overrides: {for  : {after: false},
	                                 while: {after: false}}}],

	// Enforce position of line comments
	'line-comment-position': [LOG_LEVEL, {ignorePattern: 'webpackChunkName:\\s.+', applyDefaultIgnorePatterns: false}],

	// Enforce consistent linebreak style
	'linebreak-style': [LOG_LEVEL, 'lf' === prettierrc.endOfLine ? 'unix' : 'windows'],

	// Require empty lines around comments
	'lines-around-comment': [LOG_LEVEL,
	                         {afterBlockComment: false,
	                          beforeLineComment: true,
	                          afterLineComment : false,

	                          allowArrayStart : true,
	                          allowBlockStart : true,
	                          allowClassStart : true,
	                          allowObjectStart: true}],

	// Require or disallow an empty line between class members
	'lines-between-class-members': LOG_LEVEL,

	// Enforce a maximum line length
	'max-len': [LOG_LEVEL,
	            {code                  : prettierrc.printWidth,
	             tabWidth              : prettierrc.tabWidth,
	             ignoreUrls            : true,
	             ignoreStrings         : true,
	             ignoreTemplateLiterals: true,
	             ignoreRegExpLiterals  : true}],

	// Enforce a maximum number of statements allowed per line
	'max-statements-per-line': LOG_LEVEL,

	// Enforce newlines between operands of ternary expressions
	'multiline-ternary': [LOG_LEVEL, 'always-multiline'],

	// Disallow parentheses when invoking a constructor with no arguments
	'new-parens': LOG_LEVEL,

	// Require a newline after each call in a method chain
	'newline-per-chained-call': [LOG_LEVEL, {ignoreChainWithDepth: 1}],

	// Disallow unnecessary parentheses
	'no-extra-parens': LOG_LEVEL,

	// Disallow mixed spaces and tabs for indentation
	'no-mixed-spaces-and-tabs': prettierrc.useTabs ? [WARN, 'smart-tabs'] : WARN,

	// Disallow multiple spaces
	'no-multi-spaces': [LOG_LEVEL,
	                    {exceptions: {VariableDeclarator: true,
	                                  ImportDeclaration : true,
	                                  Property          : true}}],

	// Disallow multiple empty lines
	'no-multiple-empty-lines': [LOG_LEVEL, {max: 1, maxBOF: 0, maxEOF: 0}],

	// Disallow all tabs
	'no-tabs': prettierrc.useTabs ? OFF : LOG_LEVEL,

	// Disallow trailing whitespace at the end of lines
	'no-trailing-spaces': LOG_LEVEL,

	// Disallow whitespace before properties
	'no-whitespace-before-property': LOG_LEVEL,

	// Enforce the location of single-line statements
	'nonblock-statement-body-position': LOG_LEVEL,

	// Enforce consistent line breaks after opening and before closing braces
	'object-curly-newline': [LOG_LEVEL, {multiline: true}],

	// Enforce consistent spacing inside braces
	'object-curly-spacing': [LOG_LEVEL,
	                         prettierrc.bracketSpacing ? 'always' : 'never',
	                         {arraysInObjects : prettierrc.bracketSpacing,
	                          objectsInObjects: prettierrc.bracketSpacing}],

	// Enforce placing object properties on separate lines
	'object-property-newline': [LOG_LEVEL, {allowAllPropertiesOnSameLine: true}],

	// Enforce consistent linebreak style for operators
	'operator-linebreak': [LOG_LEVEL, 'before'],

	// Require or disallow padding within blocks
	'padded-blocks': [LOG_LEVEL, 'never'],

	// Require or disallow padding lines between statements
	'padding-line-between-statements': [LOG_LEVEL,
	                                    {blankLine: 'always', prev: 'directive', next: '*'},
	                                    {blankLine: 'any', prev: 'directive', next: 'directive'},

	                                    {blankLine: 'always', prev: 'import', next: '*'},
	                                    {blankLine: 'any', prev: 'import', next: 'import'},

	                                    {blankLine: 'always', prev: ['case', 'default'], next: '*'},
	                                    {blankLine: 'never', prev: 'case', next: ['case', 'default']},

	                                    {blankLine: 'never', prev: 'singleline-let', next: '*'},
	                                    {blankLine: 'always', prev: '*', next: 'return'}],

	// Enforce the consistent use of either double, or single quotes
	'quotes': [LOG_LEVEL,
	           prettierrc.singleQuote ? 'single' : 'double',
	           {allowTemplateLiterals: false, avoidEscape: true}],

	// Enforce spacing between rest and spread operators and their expressions
	'rest-spread-spacing': LOG_LEVEL,

	// Require or disallow semicolons instead of ASI
	'semi': [LOG_LEVEL,
	         ...prettierrc.semi
	         ? ['always', {omitLastInOneLineBlock: true}]
	         : ['never', {beforeStatementContinuationChars: 'never'}]],

	// Enforce consistent spacing before and after semicolons
	'semi-spacing': LOG_LEVEL,

	// Enforce location of semicolons
	'semi-style': LOG_LEVEL,

	// Enforce consistent spacing before blocks
	'space-before-blocks': [LOG_LEVEL, {functions: 'never'}],

	// Enforce consistent spacing before `function` definition opening parens
	'space-before-function-paren': [LOG_LEVEL, {anonymous: 'never', named: 'never', asyncArrow: 'always'}],

	// Enforce consistent spacing inside parentheses
	'space-in-parens': [LOG_LEVEL,
	                    'never',
	                    {exceptions: ['()']}],

	// Require spacing around infix operators
	'space-infix-ops': LOG_LEVEL,

	// Enforce consistent spacing before or after unary operators
	'space-unary-ops': LOG_LEVEL,

	// Enforce spacing around colons of switch statements
	'switch-colon-spacing': LOG_LEVEL,

	// Require or disallow spacing around embedded expressions of template strings
	'template-curly-spacing': LOG_LEVEL,

	// Require or disallow spacing between template tags and their literals
	'template-tag-spacing': LOG_LEVEL,

	// Require or disallow Unicode byte order mark (BOM)
	'unicode-bom': ERROR,

	// Require parentheses around immediate `function` invocations
	'wrap-iife': [LOG_LEVEL,
	              'inside',
	              {functionPrototypeMethods: true}],

	// Require parenthesis around regex literals
	'wrap-regex': OFF,

	// Require or disallow spacing around the `*` in `yield*` expressions
	'yield-star-spacing': [LOG_LEVEL, 'after']};