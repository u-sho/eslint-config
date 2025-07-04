// @ts-check


import getConfigJs   from '../plugin-configs/@eslint/js/all.js';
import getConfigNode from '../plugin-configs/eslint-plugin-n/all.js';

// Import getConfigImport  from '../plugin-configs/eslint-plugin-/import/all.js';
import getConfigPromise from '../plugin-configs/eslint-plugin-promise/all.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic      from '../plugin-configs/@stylistic/format.js';


/**
 * @typedef {import('eslint').Linter.Config} Config
 * @typedef {Required<Pick<Config, 'languageOptions'|'plugins'|'rules'>> & {files: string[]}} JsConfig
 */

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] - default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {import('./base.js').JsConfigOptions} [option={}] - default:
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
 * , eslintCommentsPluginName: '@eslint-community/eslint-comments'
 * ,           nodePluginName: 'n'
 * ,        promisePluginName: 'promise'
 * ,          reactPluginName: 'react'
 * ,      stylisticPluginName: '@stylistic'
 * ,             tsPluginName: '@typescript-eslint'
 * }
 * ```
 * @returns {JsConfig}
 */
export const getConfigJsAll = (
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

		/* eslint-disable @stylistic/indent */
		eslintCommentsPluginName = '@eslint-community/eslint-comments',
		          nodePluginName = 'n',
		       promisePluginName = 'promise',
		         reactPluginName = 'react',
		     stylisticPluginName = '@stylistic',
		            tsPluginName = '@typescript-eslint' /* eslint-enable @stylistic/indent */
	} = {}
) => {
	const configJs = getConfigJs(logLevel, formatLogLevel, {complexityDepth, jsx, semi});
	const configNode = getConfigNode(logLevel, {short, pluginName: nodePluginName});

	// Const configImport = getConfigImport(logLevel, formatLogLevel, {jsx, pluginName: 'import'});
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

	const filesJs = ['*.js', '*.cjs', '*.mjs', '**/*.js', '**/*.mjs', '**/*.cjs'];
	const filesJsx = ['*.jsx', '**/*.jsx'];

	return {
		files: [...filesJs, ...jsx ? filesJsx : []],
		languageOptions: configJs.languageOptions,
		plugins: {
			...configJs.plugins,
			...configNode.plugins,

			// ...configImport.plugins,
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configNode.rules,

			// ...configImport.rules,
			...configPromise.rules,
			...configStylistic.rules,
			...configEslintComments.rules
		}

		// Settings: {
		// 	/* ...configJs.settings,
		// 	   ...configNode.settings, */

		// 	// ...configImport.settings,
		// 	/* ...configPromise.settings,
		// 	   ...configStylistic.settings,
		// 	   ...configEslintComments.settings */
		// }
	};
};

export default getConfigJsAll();
