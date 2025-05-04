// @ts-check

import globals from 'globals';

import {getPackageJson} from '../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
	&& 'object' == typeof packageJson
	&& 'type' in packageJson
	&& 'module' === packageJson.type;


/** @type {import('eslint').Linter.Config['ignores']} */
export const ignores = [
	'node_modules/',
	'dist/',
	'build/',
	'coverage/',
	'static/'
];

/** @type {import('eslint').Linter.Config['linterOptions']} */
export const linterOptions = {
	noInlineConfig               : false,
	reportUnusedDisableDirectives: 'warn',
	reportUnusedInlineConfigs    : 'warn'
};

/** @type {import('eslint').Linter.Config['languageOptions']} */
export const languageOptions = {
	ecmaVersion: 'latest',
	globals    : {
		...globals.node,
		...globals.es2021,
		__dirname : isModule ? 'off' : 'readonly',
		__filename: isModule ? 'off' : 'readonly',
		exports   : isModule ? 'off' : 'writable',
		module    : isModule ? 'off' : 'readonly',
		require   : isModule ? 'off' : 'readonly'
	},
	sourceType: isModule ? 'module' : 'commonjs'
};

/** @type {import('eslint').Linter.Config[]} */
export const baseOptions = [
	{ignores},
	{linterOptions},
	{languageOptions}
];

/**
 * @typedef {import('@stylistic/eslint-plugin').StylisticCustomizeOptions} StylisticCustomizeOptions
 * @typedef {{
 * 	complexityDepth?: number;
 * 	printWidth?:      number;
 * 	tabWidth?:        number;
 * 	short?:           boolean;
 * } & {
 * 	eslintCommentsPluginName?: string;
 * 	nodePluginName?:           string;
 * 	promisePluginName?:        string;
 * 	reactPluginName?:          string;
 * 	stylisticPluginName?:      string;
 * 	tsPluginName?:             string;
 * } & Omit<StylisticCustomizeOptions, 'pluginName'>} JsConfigOptions	defaults:
 * ```js
 * {
 *    complexityDepth: 2,
 *    printWidth     : 100,
 *      tabWidth     : 3,
 *    short          : false,
 *
 *    arrowParens : false,
 *    blockSpacing: true,
 *    braceStyle  : '1tbs',
 *    commaDangle : 'never',
 *    indent      : 'tab',
 *    jsx         : false,
 *    quoteProps  : 'consistent-as-needed',
 *    quotes      : 'single',
 *    semi        : true,
 *
 *    eslintCommentsPluginName: '@eslint-community/eslint-comments',
 *              nodePluginName: 'n',
 *           promisePluginName: 'promise',
 *             reactPluginName: 'react',
 *         stylisticPluginName: '@stylistic',
 *                tsPluginName: '@typescript-eslint'
 * }
 * ```
 *
 * @typedef {{
 * 	language?:    'commonmark' | 'gfm';
 * 	frontMatter?: false | 'yaml' | 'toml';
 * 	pluginName?:  string;
 * }} MarkdownConfigOptions	defaults:
 * ```js
 * {
 *    language   : 'gfm',
 *    frontMatter: false,
 *    pluginName : 'markdown'
 * }
 * ```
 */
