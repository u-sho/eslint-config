/**
 * @description `@stylistic/eslint-plugin-plus` rules by @u-sho.
 * @see https://eslint.style/packages/plus
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

/** get stylistic additional (`@stylistic/eslint-plugin-plus`) rules
 * @type {import('./types').GetRulesAdditional}
 * @param formatLogLevel - default is `'warn'`
 * @param options        - default is `{ short: false, indent: 'tab' }`
 */
export default (
	formatLogLevel = 'warn',
	{short = false, indent = 'tab'} = {}
) => ({
	// Enforce consistent line breaks after opening and before closing braces
	'@stylistic/curly-newline': 0,
	'@stylistic/plus/curly-newline': [formatLogLevel, {
		// @ts-ignore IfStatement replaced to IfStatementConsequent or IfStatementAlternative
		IfStatement: {multiline: true, consistent: true},
		ForStatement    : 'always',
		ForInStatement  : 'always',
		ForOfStatement  : 'always',
		WhileStatement  : 'always',
		DoWhileStatement: 'always',
		SwitchStatement : 'always',
		SwitchCase      : 'always',
		TryStatementBlock    : short ? {multiline: true} : 'always',
		TryStatementHandler  : short ? {multiline: true} : 'always',
		TryStatementFinalizer: short ? {multiline: true} : 'always',
		BlockStatement     : {multiline: true},
		FunctionDeclaration: {multiline: true},
		FunctionExpression : {multiline: true},
		Property           : {multiline: true},
		ClassBody: short ? {multiline: true} : 'always',
		StaticBlock        : {multiline: true},
		WithStatement      : {multiline: true},
		TSEnumBody     : 'always',
		TSInterfaceBody: short ? {consistent: true} : {multiline: true},
		TSModuleBlock  : {multiline: true}
	}],

	// Indentation for binary operators
	'@stylistic/indent-binary-ops': 0,
	'@stylistic/plus/indent-binary-ops': [formatLogLevel, indent],

	// Enforces consistent spacing inside TypeScript type generics
	'@stylistic/type-generic-spacing': 0,
	'@stylistic/plus/type-generic-spacing': formatLogLevel,

	// Expect space before the type declaration in the named tuple
	'@stylistic/type-named-tuple-spacing': 0,
	'@stylistic/plus/type-named-tuple-spacing': formatLogLevel
});
