const defaultOptions = require('./prettierrc.default');

module.exports = {
	...defaultOptions,
	printWidth : 100,
	// .tabWidth: 2,
	useTabs    : true,
	// .semi: true,
	singleQuote: true,
	quoteProps : 'consistent',

	/*
	 * .jsxSingleQuote: false,
	 * .trailingCommas: 'es5',
	 */
	bracketSpacing: false,

	/*
	 * .bracketSameLine           : false,
	 * .arrowParens               : 'always',
	 * .rangeStart                : 0,
	 * .rangeEnd                  : Infinity,
	 * .parser                    : undefined,
	 * .filePath                  : undefined,
	 * .requirePragma             : false,
	 * .insertPragma              : false,
	 * .proseWrap                 : 'preserve',
	 * .htmlWhitespaceSensitivity : 'css',
	 * .vueIndentScriptAndStyle   : false,
	 * .endOfLine                 : 'lf',
	 * .embeddedLanguageFormatting: 'auto',
	 * .singleAttributePerLine    : true
	 */
};