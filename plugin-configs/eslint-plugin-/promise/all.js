/**
 * @see https://github.com/eslint-community/eslint-plugin-promise#usage
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

import promisePlugin from 'eslint-plugin-promise';

import promiseRules from './rules/all.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='error']
 * @param {{pluginName?: string}} [options={}]
 * @returns {import('eslint').Linter.Config}
 */
export default (logLevel = 'error', formatLogLevel = 'warn', {pluginName = 'promise'} = {}) => {
	let rules = promiseRules(logLevel, formatLogLevel);
	if (pluginName !== 'promise') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^promise\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		// @ts-ignore `eslint-plugin-promise` has old config?
		plugins: { [pluginName]: promisePlugin },
		rules
	};
};
