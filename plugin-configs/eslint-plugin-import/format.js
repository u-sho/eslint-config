/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent'] -- good to understand. */

import importPlugin from 'eslint-plugin-import-x';

import importRulesDeprecated      from './rules/deprecated.js';
import importRulesHelpfulWarnings from './rules/helpful-warnings.js';
import importRulesModuleSystems   from './rules/module-systems.js';
import importRulesStaticAnalysis  from './rules/static-analysis.js';
import importRulesStyleGuide      from './rules/style-guide.js';


import {getPackageJson} from '../../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
                 && 'object' == typeof packageJson
                 && 'type' in packageJson
                 && 'module' === packageJson.type;

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {Readonly<{
 * 	short?:      boolean;
 * 	webpack?:    boolean;
 * 	typescript?: boolean;
 * 	jsx?:        boolean;
 * 	pluginName?: string;
 * }>} [options={}] - default:
 * ```javascript
 * {
 * 	short     : false,
 * 	webpack   : false,
 * 	typescript: false,
 * 	jsx       : false,
 * 	pluginName: 'import'
 * }
 * ```
 * @returns {import('@typescript-eslint/utils/ts-eslint').FlatConfig.Config}
 */
export default (
	formatLogLevel = 'warn',
	{
		short      = false,
		webpack    = false,
		typescript = false,
		jsx        = false,
		pluginName = 'import'
	} = {}
) => {
	if ('' === pluginName)
		throw new Error('`pluginName` is an empty string. Use like `import`.');

	/** @type {import('eslint').Linter.RulesRecord} */
	let rules = {
		...importRulesHelpfulWarnings(0),
		...importRulesModuleSystems(0),
		...importRulesStaticAnalysis(0, formatLogLevel, {short, webpack}),
		...importRulesStyleGuide(0, formatLogLevel, {short, typescript, jsx, webpack}),
		...importRulesDeprecated()
	};
	if ('import' !== pluginName) {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map( ([ruleName, ruleConfig]) => [
					ruleName.replace(/^import\//u, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	const extensions = ['.js', isModule ? '.cjs' : '.mjs', ...jsx ? ['.jsx'] : []];

	return {
		...importPlugin.flatConfigs.recommended,

		rules,

		/* eslint-disable @stylistic/indent, no-useless-escape */
		settings: typescript
		          ? importPlugin.flatConfigs.typescript.settings
		          : {'import/extensions': extensions,
		             'import/resolver'  : {node: {extensions: [...extensions, '.json', '.jsonc']}},
		             'import/ignore'    : ['\.(scss|less|css)$']}
		             /* eslint-enable @stylistic/indent, no-useless-escape */
	};
};
