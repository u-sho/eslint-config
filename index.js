// @ts-check

import {config} from 'typescript-eslint';
import {defineConfig} from 'eslint/config';

import {baseOptions, ignores, languageOptions, linterOptions} from './configs/base.js';

import {getConfigJsAll} from './configs/all-js.js';
import {getConfigJsFormat} from './configs/format-js.js';
import {getConfigTsAll} from './configs/all-ts.js';
import {getConfigTsFormat} from './configs/format-ts.js';

import {default as configMarkdownAll, getConfigMarkdownAll} from './configs/all-md.js';
import {default as configMarkdownFormat, getConfigMarkdownFormat} from './configs/format-md.js';


/* eslint-disable capitalized-comments */
// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki.
//  * This rule is currently commented out because it is not yet implemented
//  * in the active configuration. It is kept here as a placeholder for future use.
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };
/* eslint-enable capitalized-comments */

const configJsAll = getConfigJsAll('error', 'warn', {
	eslintCommentsPluginName: 'eslint-comments'
});
const configTsAll = getConfigTsAll('error', 'warn', {
	eslintCommentsPluginName: 'eslint-comments',
	tsPluginName            : 'typescript'
});

/** @type {import('eslint').Linter.LinterOptions} */
const linterOptionsFormat = {
	...linterOptions,
	reportUnusedDisableDirectives: 'off'
};
const configJsFormat = getConfigJsFormat('warn', {eslintCommentsPluginName: 'eslint-comments'});
const configTsFormat = getConfigTsFormat('warn', {
	eslintCommentsPluginName: 'eslint-comments',
	tsPluginName            : 'typescript'
});

export default {
	configs: {
		javascript: defineConfig(...baseOptions, configJsAll),
		typescript: config(...baseOptions, configTsAll),
		markdown  : defineConfig({ignores}, {linterOptions}, configMarkdownAll)
	},
	format: {
		javascript: defineConfig({ignores}, {linterOptions: linterOptionsFormat}, {languageOptions}, configJsFormat),
		typescript: config({ignores}, {linterOptions: linterOptionsFormat}, {languageOptions}, configTsFormat),
		markdown  : defineConfig({ignores}, {linterOptions: linterOptionsFormat}, configMarkdownFormat)
	},
	getConfigJsAll,
	getConfigJsFormat,
	getConfigTsAll,
	getConfigTsFormat,
	getConfigMarkdownAll,
	getConfigMarkdownFormat
};
