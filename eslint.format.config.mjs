// @ts-check

import {defineConfig} from 'eslint/config';

import {ignores, linterOptions} from './configs/base.js';
import {getConfigJsFormat} from './configs/format-js.js';


const OFF = 0;
const WARN = 1;

// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };

const configJs = getConfigJsFormat('warn', {
	printWidth: 120,
	blockSpacing: false,
	eslintCommentsPluginName: 'eslint-comments'
});


/** @type {import('typescript-eslint').Config} */
export default defineConfig([
	{ignores: [...ignores, 'samples/', 'lib/']},
	{linterOptions: {...linterOptions, reportUnusedInlineConfigs: OFF}},
	{
		...configJs,
		rules: {
			...configJs.rules,
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

			'no-magic-numbers': [WARN, {ignore: [0, 1, 2], ignoreDefaultValues: true}],
			'sort-keys': [WARN, 'asc', {caseSensitive: false, minKeys: 20, natural: true}]
		},
		settings: {
			...configJs.settings,
			tsconfigPath: './jsconfig.json'
		}
	},
	{
		files: ['*.config.mjs', 'configs/**/*.js'],
		plugins: {...configJs.plugins},
		rules: {
			'@stylistic/array-bracket-newline': [WARN, {multiline: true}],
			'@stylistic/key-spacing': [WARN, {beforeColon: false, afterColon: true}],
			'@stylistic/object-curly-newline': [WARN, {multiline: true}],
			'@stylistic/quote-props': [WARN, 'as-needed']
		}
	}
]);
