// @ts-check

import {defineConfig} from 'eslint/config';

import {baseOptions, languageOptions} from './_base.js';

import getConfigJs from '../plugin-configs/@eslint/js/format.js';

import getConfigImport from '../plugin-configs/eslint-plugin-/import/format.js';
import getConfigPromise from '../plugin-configs/eslint-plugin-/promise/format.js';

import getConfigEslintComments from '../plugin-configs/@eslint-community/eslint-plugin-eslint-comments/format.js';
import getConfigStylistic from '../plugin-configs/@stylistic/format.js';


/* eslint-disable @stylistic/no-multi-spaces */
const configJs             = getConfigJs();
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
			...configImport.plugins,
			...configPromise.plugins,
			...configStylistic.plugins,
			...configEslintComments.plugins
		},
		rules: {
			...configJs.rules,
			...configStylistic.rules,
			...configEslintComments.rules,

			...configImport.rules,
			...configPromise.rules
		},
		settings: {...configImport.settings}
	}
]);
