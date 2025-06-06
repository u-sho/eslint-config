// @ts-check

import {config} from 'typescript-eslint';
import {defineConfig} from 'eslint/config';

import {baseOptions} from './configs/base.js';
import {getConfigJsAll} from './configs/all-js.js';
import {getConfigTsAll} from './configs/all-ts.js';

import configMarkdown from './configs/all-md.js';


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


/** @type {import('typescript-eslint').Config} */
export default config([...baseOptions, configTsAll, configMarkdown]);

/** @type {import('typescript-eslint').Config} */
export const javascript = defineConfig([...baseOptions, configJsAll]);

/** @type {import('typescript-eslint').Config} */
export const typescript = config([...baseOptions, configTsAll]);

/** @type {import('typescript-eslint').Config} */
export const markdown = defineConfig([...baseOptions, configMarkdown]);
