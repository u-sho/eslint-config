// @ts-check
'use strict';

// import eslintJs from '@eslint/js';
// import tsEslint from 'typescript-eslint';
import globals from 'globals';

import getConfigJs        from './plugin-configs/@eslint/js/all.js';
import getConfigNode      from './plugin-configs/eslint-plugin-/node/all.js';
import getConfigStylistic from './plugin-configs/@stylistic/all.js';

import getConfigEslintComments from './plugin-configs/@eslint-community/eslint-plugin-eslint-comments/all.js';

import getConfigImport  from './plugin-configs/eslint-plugin-/import/all.js';
import getConfigPromise from './plugin-configs/eslint-plugin-/promise/all.js';

import getConfigMarkdown from './plugin-configs/@eslint/markdown/all.js';

const OFF = 0;
const WARN = 1;
const ERROR = 2;

/**
 * Enforce the usage of smart tabs, as defined in the emacs wiki
 * @type {import('eslint').Linter.RulesRecord}
 */
const smarterTabsRule =  {'smarter-tabs/smarter-tabs': WARN};

/** @type {import('eslint').Linter.Config['ignores']} */
const ignores = [
	'node_modules/',
	'dist/',
	'build/',
	'coverage/',
	'static/',
	'lib/'
];

/** @type {import('eslint').Linter.Config['linterOptions']} */
const linterOptions = {
	noInlineConfig: false,
	reportUnusedDisableDirectives: 'warn',
	reportUnusedInlineConfigs: 'warn'
};

/** @type {import('eslint').Linter.Config['languageOptions']} */
const languageOptions = {
	globals: {
		...globals.node,
		...globals.es2021
	},
	ecmaVersion: 'latest',
	sourceType: 'commonjs'
};

/** @type {import('eslint').Linter.Config[]} */
const commonOptions = [
	{ ignores },
	{ linterOptions },
	{ languageOptions }
];

const configJs   = getConfigJs();
const configNode = getConfigNode();

const configStylistic = getConfigStylistic('warn', {short: true});

const configEslintComments = getConfigEslintComments('warn', {pluginName: 'eslint-comments'});

const configImport = getConfigImport('error', 'warn', {short: true});
const configPromise = getConfigPromise();

const configMarkdown = getConfigMarkdown('warn');

/** @type {import('eslint').Linter.Config[]} */
const baseConfig = [
	...commonOptions,
	{
		files: ['*.js', '**/*.js'],
		plugins: {
			...configJs.plugins,
			...configNode.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins,
			...configImport.plugins,
			...configPromise.plugins
		},
		rules: {
			...configJs.rules,
			...configNode.rules,
			...configStylistic.rules,
			...configEslintComments.rules,
			...configImport.rules,
			...configPromise.rules
		},
		settings: {
			...configImport.settings
		}
	},
	configMarkdown
]

/** @type {import('typescript-eslint').Config} */
export default [
	...baseConfig,
	{
		files: [
			'eslint.config.js',
			'plugin-configs/**/*.js',
			'plugin-configs/**/*.d.ts',
		],
		rules: {
			'@stylistic/array-bracket-newline': [
				WARN,
				'never'
			], // To emphasise warning level of each rule
			'@stylistic/array-element-newline': [
				WARN,
				{multiline: true, minItems: 3}
			],

			'@stylistic/line-comment-position': OFF,
			'@stylistic/multiline-comment-style': [
				WARN,
				'bare-block'
			],
			'@stylistic/object-curly-newline': [
				WARN,
				'never'
			],
			'id-length': [
				WARN,
				{min: 2},
			],
			// eslint-disable-next-line array-element-newline
			'no-restricted-globals': [ERROR, 'document', 'event', 'window', 'navigator'],
			'sort-keys'            : [
				ERROR,
				'asc',
				{
					caseSensitive: false,
					natural      : true,
					minKeys      : 20,
				},
			],
		},
	},
];
