/**
 * @see https://github.com/eslint-community/eslint-plugin-promise#usage
 * @author u-sho (Shouhei Uechi)
*/

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent']       -- good to understand. */
/* eslint @stylistic/object-curly-newline : ['warn', {minProperties: 2}] -- good to understand. */


import promisePlugin from 'eslint-plugin-promise';

import promiseRules from './rules/all.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {{pluginName?: string}} [options={}] - default:`{pluginName: 'promise'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (formatLogLevel = 'warn', {pluginName = 'promise'} = {}) => {
	if ('' === pluginName)
		throw new Error('`pluginName` is an empty string. Use like `promise`.');

	let rules = promiseRules(0, formatLogLevel);
	if ('promise' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^promise\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		plugins: {[pluginName]: promisePlugin},
		rules
	};
};
