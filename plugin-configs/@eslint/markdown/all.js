/**
 * @see https://github.com/eslint/markdown#configurations
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import markdownPlugin from '@eslint/markdown';

import markdownRulesNoRecommended from './rules/no-recommended.js';
import markdownRulesRecommended from './rules/recommended.js';


/**
 * @typedef {Readonly<{
 * 	language   ?: 'commonmark' | 'gfm';
 * 	frontMatter?: false | 'yaml' | 'toml';
 * 	pluginName ?: string;
 * }>} MdConfigOptions
 *
 * @typedef {Required<import('eslint').Linter.Config>} Config
 * @typedef {import('@eslint/markdown').MarkdownLanguageContext} MdLanguageOptions
 * @typedef {Pick<Config, 'plugins'|'language'|'rules'> & {files: string[]} & MdLanguageOptions} MdConfig
 */

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error'] default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default:`'warn'`
 * @param {MdConfigOptions} options default:`{language:'gfm',frontMatter:false, pluginName:'markdown'}`
 * @returns {MdConfig}
 */
export default (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{language = 'gfm', frontMatter = false, pluginName = 'markdown'} = {}
) => {
	if ('' === pluginName) throw new Error('`pluginName` is an empty string. Use like `markdown`.');

	let rules = {
		...markdownRulesRecommended(logLevel, formatLogLevel),
		...markdownRulesNoRecommended(logLevel)
	};
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
