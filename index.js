// @ts-check

import {defineConfig} from 'eslint/config';

import {baseOptions} from './configs/base.js';
import {getConfigJsAll} from './configs/all-js.js';

import getConfigMarkdown from './plugin-configs/@eslint/markdown/all.js';


// /**
//  * Enforce the usage of smart tabs, as defined in the emacs wiki.
//  * This rule is currently commented out because it is not yet implemented
//  * in the active configuration. It is kept here as a placeholder for future use.
//  * @type {import('eslint').Linter.RulesRecord}
//  */
// Const smarterTabsRule = { 'smarter-tabs/smarter-tabs': WARN };

const configJsAll = getConfigJsAll('error', 'warn', {
	eslintCommentsPluginName: 'eslint-comments'
});

const configMarkdown = getConfigMarkdown('error');


/** @type {import('typescript-eslint').Config} */
export default defineConfig([...baseOptions, configJsAll, configMarkdown]);
