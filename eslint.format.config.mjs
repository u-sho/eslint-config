// @ts-check

import tseslint from 'typescript-eslint';

import {ignores, linterOptions} from './configs/base.js';
import {getConfigTsFormat} from './configs/format-ts.js';


const OFF = 0;
const WARN = 1;

// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };


/** @type {Parameters<getConfigTsFormat>[1]} */
const defaultOptions = {
	printWidth: 120,
	blockSpacing: false,
	eslintCommentsPluginName: 'eslint-comments',
	tsPluginName: 'typescript'
};

const configJs = getConfigTsFormat('warn', {...defaultOptions, isJsFile: true});
const configTs = getConfigTsFormat('warn', defaultOptions);


export default tseslint.config([
	{ignores: [...ignores, 'samples/', 'lib/']},
	{linterOptions: {...linterOptions, reportUnusedInlineConfigs: OFF}},
	{
		...configJs,
		settings: {
			...configJs.settings,
			tsconfigPath: './jsconfig.json'
		}
	},
	{
		files: configTs.files, // Subset of configJs.files
		rules: configTs.rules
	},
	{
		files: configJs.files,
		rules: {
			'@stylistic/array-bracket-newline': [WARN, 'never'],
			'@stylistic/array-element-newline': [WARN, {consistent: true}],
			'@stylistic/indent-binary-ops': OFF,
			'@stylistic/line-comment-position': OFF,
			'@stylistic/multiline-comment-style': [WARN, 'bare-block'],
			'@stylistic/object-curly-newline': WARN,

			'eslint-comments/no-use': OFF,
			'eslint-comments/no-restricted-disable': [WARN, '!@stylistic/*'],
			'eslint-comments/require-description': [WARN, {ignore: ['eslint-disable', 'eslint-enable']}],

			'id-length': [WARN, {min: 3, max: 26, properties: 'never', exceptions: ['js', 'ts']}],
			'sort-keys': [WARN, 'asc', {caseSensitive: false, minKeys: 20, natural: true}],

			'typescript/naming-convention': [WARN, {selector: 'objectLiteralProperty', format: null}],
			'typescript/no-magic-numbers': [
				WARN,
				{
					enforceConst: true,
					ignore: [0, 1, 2],
					ignoreDefaultValues: true,
					ignoreEnums: true,
					ignoreNumericLiteralTypes: true,
					ignoreReadonlyClassProperties: true
				}
			]
		}
	},
	{
		files: ['*.config.mjs', 'configs/**/*.js'],
		plugins: {...configTs.plugins},
		rules: {
			'@stylistic/array-bracket-newline': [WARN, {multiline: true}],
			'@stylistic/key-spacing': [WARN, {beforeColon: false, afterColon: true}],
			'@stylistic/object-curly-newline': [WARN, {multiline: true}],
			'@stylistic/quote-props': [WARN, 'as-needed']
		}
	}
]);
