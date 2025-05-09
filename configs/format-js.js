// @ts-check


import {languageOptions} from './base.js';

import getConfigJs from '../plugin-configs/@eslint/js/format.js';

import getConfigPromise from '../plugin-configs/eslint-plugin-promise/format.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic from '../plugin-configs/@stylistic/format.js';


/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {Omit<import('./base.js').JsConfigOptions, 'nodePluginName'>} [option={}]
 * @returns {import('eslint').Linter.Config}
 */
export const getConfigJsFormat = (
	formatLogLevel = 'warn',
	{/* eslint-disable @stylistic/no-multi-spaces */
		complexityDepth = Infinity,
		printWidth     = 100,
		tabWidth       = 3,
		short          = false,
		arrowParens    = false,
		blockSpacing   = true,
		braceStyle     = '1tbs',
		commaDangle    = 'never',
		indent         = 'tab',
		jsx            = false,
		quoteProps     = 'consistent-as-needed',
		quotes         = 'single',
		semi           = true,

		eslintCommentsPluginName = '@eslint-community/eslint-comments',
		promisePluginName        = 'promise',
		reactPluginName          = 'react',
		stylisticPluginName      = '@stylistic',
		tsPluginName             = '@typescript-eslint'
	} = {} /* eslint-enable @stylistic/no-multi-spaces */
) => {
	const configJs = getConfigJs(formatLogLevel, {complexityDepth, jsx, semi});
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
		tsPluginName,
		reactPluginName
	});
	const configEslintComments = getConfigEslintComments('warn', {pluginName: eslintCommentsPluginName});

	const filesJs = ['*.js', '*.mjs', '*.cjs', '**/*.js', '**/*.mjs', '**/*.cjs'];
	const filesJsx = ['*.jsx', '**/*.jsx'];

	return {
		files: [...filesJs, ...jsx ? filesJsx : []],
		languageOptions,
		plugins: {
			...configJs.plugins,
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configPromise.rules,
			...configStylistic.rules,
			...configEslintComments.rules
		},
		settings: {
			...configJs.settings,
			...configPromise.settings,
			...configStylistic.settings,
			...configEslintComments.settings
		}
	};
};

export default getConfigJsFormat();
