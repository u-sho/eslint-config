/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
'use strict';

const markdownPlugin = require('@eslint/markdown');
const markdownPluginRules = require('./rules/all');

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {{language?: 'commonmark'|'gfm';
 *          frontMatter?: false|'yaml'|'toml';
 *          pluginName?: string}} options default:`{language:'gfm',frontMatter:false, pluginName:'markdown'}`
 * @returns {import('eslint').Linter.Config} 
 */
module.exports = (logLevel = 'error', {language = 'gfm', frontMatter = false, pluginName = 'markdown'} = {}) => {
	let rules = markdownPluginRules(logLevel);
	if (pluginName !== 'markdown') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^markdown\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		files: ['**/*.md'],
		// @ts-ignore
		plugins: { [pluginName]: markdownPlugin },
		language: `${pluginName}/${language}`,
		...frontMatter ? { languageOptions: { frontMatter } } : {},
		rules
	};
}
