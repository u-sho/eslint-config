/**
 * @see https://github.com/eslint/markdown#configurations
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import markdownPlugin from '@eslint/markdown';
import markdownRulesRecommended from './rules/recommended.js';

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @param {import('./all.js').MdConfigOptions} options default:
 * 	`{language:'gfm',frontMatter:false, pluginName:'markdown'}`
 * @returns {import('./all.js').MdConfig}
 */
export default (
	formatLogLevel = 'warn',
	{language = 'gfm', frontMatter = false, pluginName = 'markdown'} = {}
) => {
	if ('' === pluginName) throw new Error('`pluginName` is an empty string. Use like `markdown`.');

	let rules = markdownRulesRecommended('off', formatLogLevel);
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
		files          : ['*.md', '**/*.md'],
		plugins        : {[pluginName]: markdownPlugin},
		language       : `${pluginName}/${language}`,
		languageOptions: {frontMatter},
		rules
	};
};
