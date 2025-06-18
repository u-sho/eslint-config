// @ts-check


import getConfigJs from '../plugin-configs/@eslint/js/format.js';
import getConfigTs from '../plugin-configs/@typescript-eslint/format.js';

import getConfigPromise from '../plugin-configs/eslint-plugin-promise/format.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic      from '../plugin-configs/@stylistic/format.js';


/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default: `'warn'`
 * @param {Omit<import('./all-ts.js').TsConfigOptions, 'nodePluginName'>} [options={}] 	default:
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
 * ,        promisePluginName: 'promise'
 * ,          reactPluginName: 'react'
 * ,      stylisticPluginName: '@stylistic'
 * ,             tsPluginName: '@typescript-eslint'
 * }
 * ```
 *
 * @returns {import('./all-ts.js').ConfigTsAll}
 */
export const getConfigTsFormat = (
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

		isJsFile = false,

		eslintCommentsPluginName = '@eslint-community/eslint-comments', /* eslint-disable @stylistic/indent */
		       promisePluginName = 'promise',
		         reactPluginName = 'react',
		     stylisticPluginName = '@stylistic',
		            tsPluginName = '@typescript-eslint' /* eslint-enable @stylistic/indent */
	} = {}
) => {
	const configJs = getConfigJs(formatLogLevel, {complexityDepth, jsx, semi});
	const configTs = getConfigTs(formatLogLevel, {short, javascript: isJsFile, tsx: jsx, pluginName: tsPluginName});

	const configPromise = getConfigPromise(formatLogLevel, {pluginName: promisePluginName});

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
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configTs.rules,
			...configPromise.rules,
			...configStylistic.rules,
			...configEslintComments.rules
		}

		// Settings: {
		// 	/* ...configJs.settings,
		// 	   ...configTs.settings, */
		// 	/* ...configPromise.settings,
		// 	   ...configStylistic.settings,
		// 	   ...configEslintComments.settings */
		// }
	};
};

export default getConfigTsFormat();
