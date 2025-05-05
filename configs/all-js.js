// @ts-check

import {defineConfig} from 'eslint/config';

import {baseOptions, languageOptions} from './_base.js';

/* eslint-disable @stylistic/no-multi-spaces */
import getConfigJs   from '../plugin-configs/@eslint/js/all.js';
import getConfigNode from '../plugin-configs/eslint-plugin-/node/all.js';

import getConfigImport  from '../plugin-configs/eslint-plugin-/import/all.js';
import getConfigPromise from '../plugin-configs/eslint-plugin-/promise/all.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic      from '../plugin-configs/@stylistic/format.js';


const configJs             = getConfigJs();
const configNode           = getConfigNode();
const configImport         = getConfigImport();
const configPromise        = getConfigPromise();
const configStylistic      = getConfigStylistic();
const configEslintComments = getConfigEslintComments('warn', {pluginName: 'eslint-comments'});
/* eslint-enable @stylistic/no-multi-spaces */


/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
	...baseOptions,
	{
		files  : ['*.js', '*.mjs', '*.cjs', '**/*.js', '**/*.mjs', '**/*.cjs'],
		languageOptions,
		plugins: {
			...configJs.plugins,
			...configNode.plugins,
			...configImport.plugins,
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configNode.rules,
			...configStylistic.rules,
			...configEslintComments.rules,

			...configImport.rules,
			...configPromise.rules
		},
		settings: {
			...configNode.settings,
			...configImport.settings
		}
	}
]);
