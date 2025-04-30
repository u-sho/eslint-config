// @ts-check

import {defineConfig} from 'eslint/config';
import globals from 'globals';

import getConfigJs from './plugin-configs/@eslint/js/all.js';
import getConfigNode from './plugin-configs/eslint-plugin-/node/all.js';

import getConfigStylistic from './plugin-configs/@stylistic/all.js';

import getConfigEslintComments from './plugin-configs/@eslint-community/eslint-plugin-eslint-comments/all.js';

// Import getConfigImport from './plugin-configs/eslint-plugin-/import/all.js';
import getConfigPromise from './plugin-configs/eslint-plugin-/promise/all.js';

import getConfigMarkdown from './plugin-configs/@eslint/markdown/all.js';


const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * Enforce the usage of smart tabs, as defined in the emacs wiki
 * @type {import('eslint').Linter.RulesRecord}
 */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };

/** @type {import('eslint').Linter.Config['ignores']} */
const ignores = [
	'samples',
	'node_modules/',
	'dist/',
	'build/',
	'coverage/',
	'static/',
	'lib/'
];

/** @type {import('eslint').Linter.Config['linterOptions']} */
const linterOptions = {
	noInlineConfig               : false,
	reportUnusedDisableDirectives: 'warn',
	reportUnusedInlineConfigs    : 'warn'
};

/** @type {import('eslint').Linter.Config['languageOptions']} */
const languageOptions = {
	ecmaVersion: 'latest',
	globals    : {
		...globals.node,
		...globals.es2021
	},
	sourceType: 'module'
};

/** @type {import('eslint').Linter.Config[]} */
const commonOptions = [
	{ignores},
	{linterOptions},
	{languageOptions}
];

const configJs = getConfigJs('error', 'warn', {complexityDepth: Infinity});
const configNode = getConfigNode();

const configStylistic = getConfigStylistic(
	'warn',
	{short: false, printWidth: 120, arrowParens: false, blockSpacing: false}
);

const configEslintComments = getConfigEslintComments('warn', {pluginName: 'eslint-comments'});

// Const configImport = getConfigImport('error','warn',{ short: true });
const configPromise = getConfigPromise();

const configMarkdown = getConfigMarkdown('warn');

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
	...commonOptions,
	{
		files  : ['*.js', '**/*.js', '*.mjs', '**/*.cjs', '*.cjs'],
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

			'no-magic-numbers': [WARN, {ignore: [0, 1, 2, 3, 100]}],
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
		files: ['eslint.config.mjs'],
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
