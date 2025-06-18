/**
 * @see https://typescript-eslint.io/users/configs
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import globals from 'globals';
import tsPlugin from 'typescript-eslint';

import tsRulesDeprecated from './rules/deprecated.js';
import tsRulesOthers     from './rules/others.js';
import tsRulesStrict     from './rules/strict.js';
import tsRulesStylistic  from './rules/stylistic.js';


import {getPackageJson} from '../../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
                 && 'object' == typeof packageJson
                 && 'type' in packageJson
                 && 'module' === packageJson.type;

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {import('./all.js').TsConfigOptions} [options={}] - default:
 * 	`{pluginName: '@typescript-eslint', short: false, javascript: false, tsx: false}`
 *
 * @typedef {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config} Config
 * @returns {Required<Pick<Config, 'languageOptions'|'plugins'|'rules'>>}
 */
export default (
	formatLogLevel = 'warn',
	{short = false, javascript = false, tsx = false, pluginName = '@typescript-eslint'} = {}
) => {
	if (!isModule)
		throw new Error('This config is for ESM only. Set `type: "module"` in package.json.');

	let rules = {
		...tsRulesStrict(0, formatLogLevel, {short}),
		...tsRulesOthers(0, formatLogLevel, {short, javascript}),
		...tsRulesStylistic(formatLogLevel),
		...tsRulesDeprecated()
	};
	if ('' === pluginName) throw new Error('`pluginName` is empty. Use default `@typescript-eslint`');
	if ('@typescript-eslint' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^@typescript-eslint\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		languageOptions: {
			sourceType : 'module',
			ecmaVersion: 'latest',
			globals    : {
				...globals.browser,
				...globals.node,
				...globals.es2021
			},
			parser       : tsPlugin.parser,
			parserOptions: {
				ecmaFeatures: {
					impliedStrict: true,
					jsx          : tsx
				},
				projectService: true
			}

		},
		plugins: {[pluginName]: tsPlugin.plugin},
		rules
	};
};
