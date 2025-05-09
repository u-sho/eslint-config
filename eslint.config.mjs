// @ts-check

import {defineConfig} from 'eslint/config';

import {ignores, linterOptions} from './configs/base.js';
import {getConfigJsAll} from './configs/all-js.js';

import getConfigMarkdown from './plugin-configs/@eslint/markdown/all.js';


const OFF = 0;
const WARN = 1;
const ERROR = 2;

// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };


const configJsAll = getConfigJsAll('error', 'warn', {
	printWidth: 120,
	blockSpacing: false,
	eslintCommentsPluginName: 'eslint-comments'
});


const configMarkdown = getConfigMarkdown('error');

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
	{ignores: [...ignores, 'samples/', 'lib/']},
	{linterOptions},
	{
		...configJsAll,
		settings: {
			...configJsAll.settings,
			tsconfigPath: './jsconfig.json'
		}
	},
	configMarkdown
];


/** @type {import('typescript-eslint').Config} */
export default defineConfig([
	...baseConfig,
	{
		files: [
			'eslint.config.mjs',
			'configs/**/*.js',
			'plugin-configs/**/*.js'
		],
		plugins: {...configJsAll.plugins},
		rules: {
			'@stylistic/array-bracket-newline': [WARN, 'never'],
			'@stylistic/array-element-newline': [WARN, {consistent: true}],
			'@stylistic/indent-binary-ops': OFF,
			'@stylistic/line-comment-position': OFF,
			'@stylistic/multiline-comment-style': [WARN, 'bare-block'],
			'@stylistic/object-curly-newline': WARN,

			'eslint-comments/no-use': OFF,
			'eslint-comments/no-restricted-disable': [WARN, '!@stylistic/*'],
			'eslint-comments/require-description': [WARN, {ignore:['eslint-disable', 'eslint-enable']}],

			'id-length': [WARN, {min: 3, max: 26, properties: 'never', exceptions: ['js', 'ts']}],

			'n/file-extension-in-import': [ERROR, 'always'],

			'no-magic-numbers': [WARN, {ignore: [0, 1, 2], ignoreDefaultValues: true}],
			'no-restricted-globals': [ERROR, 'document', 'event', 'window', 'navigator'],
			'sort-keys': [ERROR, 'asc', {caseSensitive: false, minKeys: 20, natural: true}]
		},
		settings: {
			...configJsAll.settings,
			tsconfigPath: './jsconfig.json'
		}
	},
	{
		files: ['eslint.config.mjs', 'configs/**/*.js'],
		plugins: {...configJsAll.plugins},
		rules: {
			'@stylistic/array-bracket-newline': [WARN, {multiline: true}],
			'@stylistic/key-spacing': OFF,
			'@stylistic/lines-around-comment': OFF,
			'@stylistic/object-curly-newline': [WARN, {multiline: true}],
			'@stylistic/quote-props': [WARN, 'as-needed']
		},
		settings: {
			...configJsAll.settings,
			tsconfigPath: './jsconfig.json'
		}
	}
]);
