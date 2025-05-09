/**
 * @see https://eslint-community.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent']       -- good to understand. */
/* eslint no-useless-escape: 'off' -- see `eslint-plugin-import` docs */

import markdownPlugin from '@eslint/markdown';
import markdownPluginRules from './rules/all.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {{language?: 'commonmark'|'gfm';
 *          frontMatter?: false|'yaml'|'toml';
 *          pluginName?: string}} options default:`{language:'gfm',frontMatter:false, pluginName:'markdown'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (
	logLevel = 'error',
	{language = 'gfm', frontMatter = false, pluginName = 'markdown'} = {}
) => {
	if ('' === pluginName)
		console.warn('`pluginName` is empty. Use default `markdown`');

	let rules = markdownPluginRules(logLevel);
	if ('markdown' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^markdown\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	return {
		files   : ['**/*.md'],
		plugins : {[pluginName]: markdownPlugin},
		language: `${pluginName}/${language}`,
		...frontMatter ? {languageOptions: {frontMatter}} : {},
		rules
	};
};
