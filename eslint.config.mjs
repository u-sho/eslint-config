// @ts-check

import {defineConfig} from 'eslint/config';

import {baseOptions} from './configs/_base.js';


import getConfigJs from './plugin-configs/@eslint/js/all.js';
import getConfigNode from './plugin-configs/eslint-plugin-/node/all.js';

// Import getConfigImport from './plugin-configs/eslint-plugin-/import/all.js';
import getConfigPromise from './plugin-configs/eslint-plugin-/promise/all.js';

import getConfigEslintComments from './plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic from './plugin-configs/@stylistic/format.js';


import getConfigMarkdown from './plugin-configs/@eslint/markdown/all.js';


const OFF = 0;
const WARN = 1;
const ERROR = 2;

// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };


const configJs = getConfigJs('error', 'warn', {complexityDepth: Infinity});
const configNode = getConfigNode();

const configStylistic = getConfigStylistic('warn', {printWidth: 120, blockSpacing: false});

const configEslintComments = getConfigEslintComments('warn', {pluginName: 'eslint-comments'});

// Const configImport = getConfigImport('error', 'warn');
const configPromise = getConfigPromise('error', 'warn');

const configMarkdown = getConfigMarkdown('error');

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
	...baseOptions,
	{
		files  : ['*.js', '*.mjs', '*.cjs', '**/*.js', '**/*.mjs', '**/*.cjs'],
		plugins: {
			...configJs.plugins,
			...configNode.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins,

			// ...configImport.plugins,
			...configPromise.plugins
		},
		rules: {
			...configJs.rules,
			...configNode.rules,
			...configStylistic.rules,
			...configEslintComments.rules,

			// ...configImport.rules,
			...configPromise.rules
		},
		settings: {
			...configNode.settings,
			tsconfigPath: './jsconfig.json'

			// ...configImport.settings
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
		plugins: {
			...configStylistic.plugins,
			...configEslintComments.plugins,
			...configNode.plugins
		},
		rules: {
			'@stylistic/array-bracket-newline': [
				WARN,
				'never'
			],
			'@stylistic/array-element-newline': [
				WARN,
				{consistent: true}
			],
			'@stylistic/indent-binary-ops': OFF,
			'@stylistic/line-comment-position': OFF,
			'@stylistic/multiline-comment-style': [
				WARN,
				'bare-block'
			],
			'@stylistic/object-curly-newline': WARN,

			'eslint-comments/no-use': OFF,
			'eslint-comments/no-restricted-disable': [WARN, '!@stylistic/*'],
			'eslint-comments/require-description': [
				WARN,
				{ignore:['eslint-disable', 'eslint-enable']}
			],

			'id-length': [WARN, {min: 3, max: 26, properties: 'never', exceptions: ['js', 'ts']}],

			'n/file-extension-in-import': [ERROR, 'always'],

			'no-magic-numbers': [WARN, {ignore: [0, 1, 2], ignoreDefaultValues: true}],
			'no-restricted-globals': [ERROR, 'document', 'event', 'window', 'navigator'],
			'sort-keys': [
				ERROR,
				'asc',
				{
					caseSensitive: false,
					minKeys      : 20,
					natural      : true
				}
			]
		},
		settings: {
			...configNode.settings,
			tsconfigPath: './jsconfig.json'
		}
	},
	{
		files: ['eslint.config.mjs', 'configs/**/*.js'],
		plugins: {
			...configStylistic.plugins,
			...configNode.plugins
		},
		rules: {
			'@stylistic/array-bracket-newline': [
				WARN,
				{multiline: true}
			],
			'@stylistic/key-spacing': OFF,
			'@stylistic/object-curly-newline': [WARN, {multiline: true}],
			'sort-keys': [
				ERROR,
				'asc',
				{
					caseSensitive: false,
					minKeys      : 20,
					natural      : true
				}
			]
		},
		settings: {
			...configNode.settings,
			tsconfigPath: './jsconfig.json'
		}
	}
]);
