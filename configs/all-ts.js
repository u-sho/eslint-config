// @ts-check

import getConfigJs from '../plugin-configs/@eslint/js/all.js';
import getConfigTs from '../plugin-configs/@typescript-eslint/all.js';

// Import getConfigImport  from '../plugin-configs/eslint-plugin-/import/all.js';
import getConfigNode    from '../plugin-configs/eslint-plugin-n/all.js';
import getConfigPromise from '../plugin-configs/eslint-plugin-promise/all.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic from '../plugin-configs/@stylistic/format.js';


/**
 * @typedef {import('./base.js').JsConfigOptions & {readonly isJsFile?: boolean}} TsConfigOptions
 *
 * @typedef {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config} Config
 * @typedef {Required<Pick<Config,'languageOptions'|'plugins'|'rules'>> & {files: string[]}} ConfigTsAll
 */

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] - default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {TsConfigOptions} [option={}] - default:
 * ```js
 * { complexityDepth: Infinity
 * , printWidth     : 100
 * , tabWidth       : 3
 * , short          : false
 * , arrowParens    : false
 * , blockSpacing   : true
 * , braceStyle     : '1tbs'
 * , commaDangle    : 'never'
 * , indent         : 'tab'
 * , jsx            : false
 * , quoteProps     : 'consistent-as-needed'
 * , quotes         : 'single'
 * , semi           : true
 *
 * , isJsFile       : false
 *
 * , eslintCommentsPluginName: '@eslint-community/eslint-comments'
 * ,           nodePluginName: 'n'
 * ,        promisePluginName: 'promise'
 * ,          reactPluginName: 'react'
 * ,      stylisticPluginName: '@stylistic'
 * ,             tsPluginName: '@typescript-eslint'
 * }
 * ```
 * @returns {ConfigTsAll}
 */
export const getConfigTsAll = (/* eslint-disable @stylistic/indent */
	      logLevel = 'error',
	formatLogLevel = 'warn',
	{
		complexityDepth = Infinity,
		printWidth      = 100,
		tabWidth        = 3,
		short           = false,
		arrowParens     = false,
		blockSpacing    = true,
		braceStyle      = '1tbs',
		commaDangle     = 'never',
		indent          = 'tab',
		jsx             = false,
		quoteProps      = 'consistent-as-needed',
		quotes          = 'single',
		semi            = true,

		isJsFile  = false,

		eslintCommentsPluginName = '@eslint-community/eslint-comments',
		          nodePluginName = 'n',
		       promisePluginName = 'promise',
		         reactPluginName = 'react',
		     stylisticPluginName = '@stylistic',
		            tsPluginName = '@typescript-eslint'
	} = {} /* eslint-enable @stylistic/indent */
) => {
	const configJs = getConfigJs(logLevel, formatLogLevel, {complexityDepth, jsx, semi});
	const configTs = getConfigTs(logLevel, formatLogLevel, {short, javascript: isJsFile, pluginName: tsPluginName});

	// Const configImport = getConfigImport(logLevel, formatLogLevel, {jsx, pluginName: 'import'});
	const configNode = getConfigNode(logLevel, {short, pluginName: nodePluginName});
	const configPromise = getConfigPromise(logLevel, formatLogLevel, {pluginName: promisePluginName});

	const configStylistic = getConfigStylistic(formatLogLevel, {
		printWidth,
		tabWidth,
		short,

		arrowParens,
		blockSpacing,
		braceStyle,
		commaDangle,
		indent,
		jsx,
		quoteProps,
		quotes,
		semi,

		pluginName: stylisticPluginName,
		reactPluginName,
		tsPluginName
	});
	const configEslintComments = getConfigEslintComments(formatLogLevel, {pluginName: eslintCommentsPluginName});

	const filesJs = ['*.js', '*.mjs', '*.cjs', '**/*.js', '**/*.mjs', '**/*.cjs'];
	const filesTs = ['*.ts', '*.mts', '*.cts', '**/*.ts', '**/*.mts', '**/*.cts'];
	const filesJsx = ['*.jsx', '**/*.jsx'];
	const filesTsx = ['*.tsx', '**/*.tsx'];
	const files = [
		...filesTs,
		...jsx ? filesTsx : [],
		...isJsFile ? filesJs : [],
		...isJsFile && jsx ? filesJsx : []
	];

	return {
		files,
		languageOptions: {...configJs.languageOptions, ...configTs.languageOptions},
		plugins: {
			...configJs.plugins,
			...configTs.plugins,

			// ...configImport.plugins,
			...configNode.plugins,
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configTs.rules,

			// ...configImport.rules,
			...configNode.rules,
			...configPromise.rules,
			...configStylistic.rules,
			...configEslintComments.rules
		}

		// Settings: {
		// 	/* ...configJs.settings,
		// 	   ...configTs.settings, */

		// 	//  ...configImport.settings,
		// 	/* ...configNode.settings,
		// 	   ...configPromise.settings,
		// 	   ...configStylistic.settings,
		// 	   ...configEslintComments.settings */
		// }
	};
};

export default getConfigTsAll();
