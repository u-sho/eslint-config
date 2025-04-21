/**
 * @see https://github.com/eslint-community/eslint-plugin-promise#usage
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

const promisePlugin = require('eslint-plugin-promise');

const promiseRules = require('./rules/all');

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='error']
 * @param {{pluginName?: string}} [options]
 * @returns {import('eslint').Linter.Config}
 */
module.exports = (logLevel = 'error', formatLogLevel = 'warn', {pluginName = 'promise'}) => {
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
		plugins: {
			[pluginName]: promisePlugin
		},
		rules
	};
};
