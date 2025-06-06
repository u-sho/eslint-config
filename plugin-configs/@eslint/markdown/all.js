/**
 * @see https://github.com/eslint/markdown#configurations
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import markdownPlugin from '@eslint/markdown';
import markdownPluginRules from './rules/all.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {Readonly<{
 * 	language   ?: 'commonmark' | 'gfm';
 * 	frontMatter?: false | 'yaml' | 'toml';
 * 	pluginName ?: string;
 * }>} options default:`{language:'gfm',frontMatter:false, pluginName:'markdown'}`
 * @returns {import('eslint').Linter.Config}
 */
export default (
	logLevel = 'error',
	{language = 'gfm', frontMatter = false, pluginName = 'markdown'} = {}
) => {
	if ('' === pluginName) throw new Error('`pluginName` is an empty string. Use like `markdown`.');

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
		files   : ['*.md', '**/*.md'],
		plugins : {[pluginName]: markdownPlugin},
		language: `${pluginName}/${language}`,
		...'string' === typeof frontMatter ? {languageOptions: {frontMatter}} : {},
		rules
	};
};
