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
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']      - default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {{pluginName?: string}} [options={}] - defaults:`{pluginName: 'promise'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (logLevel = 'error', formatLogLevel = 'warn', {pluginName = 'promise'} = {}) => {
	let rules = promiseRules(logLevel, formatLogLevel);
	if ('' === pluginName) {
		console.warn('`pluginName` is empty. Use default `promise`');
	} else if ('promise' !== pluginName) {
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
		// @ts-ignore `eslint-plugin-promise` has old config?
		plugins: {[pluginName]: promisePlugin},
		rules
	};
};
