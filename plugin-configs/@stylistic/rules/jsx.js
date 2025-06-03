/**
 * @description `@stylistic/eslint-plugin-jsx` rules by @u-sho.
 * @see https://eslint.style/packages/jsx
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint 'sort-keys': 'off' -- grouping the same rules */

/** Get js (`@stylistic/eslint-plugin-js`) rules
 * @type {import('./types').GetRulesJsx}
 * @param formatLogLevel - default: `'warn'`
 * @param options - default:`{ short: false, blockSpacing: true }`
 */
export default (
	formatLogLevel = 'warn',
	{short = false, blockSpacing = true} = {}
) => ({
	// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	'react/jsx-child-element-spacing'         : 0,
	'@stylistic/jsx-child-element-spacing'    : 0,
	'@stylistic/jsx/jsx-child-element-spacing': short ? 0 : formatLogLevel,

	// Enforce closing bracket location in JSX
	'react/jsx-closing-bracket-location'         : 0,
	'@stylistic/jsx-closing-bracket-location'    : 0,
	'@stylistic/jsx/jsx-closing-bracket-location': [formatLogLevel,
	/*                                           */ short ? 'tag-aligned' : 'line-aligned'],

	// Enforce closing tag location for multiline JSX
	'react/jsx-closing-tag-location'         : 0,
	'@stylistic/jsx-closing-tag-location'    : 0,
	'@stylistic/jsx/jsx-closing-tag-location': [formatLogLevel, 'line-aligned'],

	/* Disallow unnecessary JSX expressions when literals alone
	   are sufficient or enforce JSX expressions on literals in JSX children or attributes */
	'react/jsx-curly-brace-presence'         : 0,
	'@stylistic/jsx-curly-brace-presence'    : 0,
	'@stylistic/jsx/jsx-curly-brace-presence': [formatLogLevel, {
		props            : 'never',
		children         : 'never',
		propElementValues: 'always'
	}],

	// Enforce consistent linebreaks in curly braces in JSX attributes and expressions
	'react/jsx-curly-newline'         : 0,
	'@stylistic/jsx-curly-newline'    : 0,
	'@stylistic/jsx/jsx-curly-newline': [formatLogLevel, {
		multiline : short ? 'consistent' : 'require',
		singleline: 'forbid'
	}],

	// Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
	'react/jsx-curly-spacing'         : 0,
	'@stylistic/jsx-curly-spacing'    : 0,
	'@stylistic/jsx/jsx-curly-spacing': [formatLogLevel,
	/*                                */ blockSpacing ? {when: 'never', children: true} : 'never'],

	// Enforce or disallow spaces around equal signs in JSX attributes
	'react/jsx-equals-spacing'         : 0,
	'@stylistic/jsx-equals-spacing'    : 0,
	'@stylistic/jsx/jsx-equals-spacing': formatLogLevel,

	// Enforce proper position of the first property in JSX
	'react/jsx-first-prop-new-line'         : 0,
	'@stylistic/jsx-first-prop-new-line'    : 0,
	'@stylistic/jsx/jsx-first-prop-new-line': formatLogLevel,

	/* Enforce line breaks before and after JSX elements
	   when they are used as arguments to a function. */
	'@stylistic/jsx-function-call-newline'    : 0,
	'@stylistic/jsx/jsx-function-call-newline': formatLogLevel,

	// Enforce JSX indentation. Deprecated, use `indent` rule instead.
	'react/jsx-indent'         : 0,
	'@stylistic/jsx-indent'    : 0,
	'@stylistic/jsx/jsx-indent': 0,

	// Enforce props indentation in JSX
	'react/jsx-indent-props'         : 0,
	'@stylistic/jsx-indent-props'    : 0,
	'@stylistic/jsx/jsx-indent-props': [formatLogLevel, 'first'],

	// Enforce maximum of props on a single line in JSX
	'react/jsx-max-props-per-line'         : 0,
	'@stylistic/jsx-max-props-per-line'    : 0,
	'@stylistic/jsx/jsx-max-props-per-line': [formatLogLevel, {maximum: 1, when: 'multiline'}],

	// Require or prevent a new line after jsx elements and expressions.
	'react/jsx-newline'         : 0,
	'@stylistic/jsx-newline'    : 0,
	'@stylistic/jsx/jsx-newline': [formatLogLevel, {prevent: true, allowMultilines: !short}],

	// Require one JSX element per line
	'react/jsx-one-expression-per-line'         : 0,
	'@stylistic/jsx-one-expression-per-line'    : 0,
	'@stylistic/jsx/jsx-one-expression-per-line': [formatLogLevel, {allow: 'non-jsx'}],

	// Enforce PascalCase for user-defined JSX components
	'@stylistic/jsx-pascal-case'    : 0,
	'@stylistic/jsx/jsx-pascal-case': formatLogLevel,

	// Disallow multiple spaces between inline JSX props
	'react/jsx-props-no-multi-spaces'         : 0,
	'@stylistic/jsx-props-no-multi-spaces'    : 0,
	'@stylistic/jsx/jsx-props-no-multi-spaces': 0, // Subset of `@stylistic/no-multi-spaces`

	// Disallow extra closing tags for components without children
	'react/jsx-self-closing-comp'         : 0,
	'@stylistic/jsx-self-closing-comp'    : 0,
	'@stylistic/jsx/jsx-self-closing-comp': formatLogLevel,

	// Enforce props alphabetical sorting
	'react/jsx-sort-props'         : 0,
	'@stylistic/jsx-sort-props'    : 0,
	'@stylistic/jsx/jsx-sort-props': [formatLogLevel, {
		ignoreCase          : false,
		callbacksLast       : true,
		shorthandFirst      : false,
		shorthandLast       : true,
		multiline           : 'ignore',
		noSortAlphabetically: false,
		reservedFirst       : true
	}],

	// Enforce whitespace in and around the JSX opening and closing brackets
	'react/jsx-tag-spacing'         : 0,
	'@stylistic/jsx-tag-spacing'    : 0,
	'@stylistic/jsx/jsx-tag-spacing': [formatLogLevel, {
		afterOpening     : 'never',
		beforeSelfClosing: 'always',
		closingSlash     : 'never',
		beforeClosing    : 'never'
	}],

	// Disallow missing parentheses around multiline JSX
	'react/jsx-wrap-multilines'         : 0,
	'@stylistic/jsx-wrap-multilines'    : 0,
	'@stylistic/jsx/jsx-wrap-multilines': short ? 0 : formatLogLevel
});
