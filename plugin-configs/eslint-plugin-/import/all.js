/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
/* eslint @stylistic/array-bracket-newline: ['warn', 'consistent']       -- good to understand. */
/* eslint no-useless-escape: 'off' -- see `eslint-plugin-import` docs */

// @ts-ignore `eslint-plugin-import' has no type
import importPlugin from 'eslint-plugin-import';

/* eslint-disable @stylistic/no-multi-spaces */
import importRulesDeprecated      from './rules/deprecated.js';
import importRulesHelpfulWarnings from './rules/helpful-warnings.js';
import importRulesModuleSystems   from './rules/module-systems.js';
import importRulesStaticAnalysis  from './rules/static-analysis.js';
import importRulesStyleGuide      from './rules/style-guide.js';


import {getPackageJson} from '../../../lib/util/get-package-json.cjs';

const packageJson = getPackageJson();
const isModule = null != packageJson
                 && 'object' == typeof packageJson
                 && 'type' in packageJson
                 && 'module' === packageJson.type;

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']      - default:`'error'`
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] - default:`'warn'`
 * @param {{short?:      boolean;
 *          webpack?:    boolean;
 *          typescript?: boolean;
 *          jsx?:        boolean;
 *          pluginName?: string;}} [options={}] - defaults:
 * ```javascript
 * {
 * 	short     : false,
 * 	webpack   : false,
 * 	typescript: false,
 * 	jsx       : false,
 * 	pluginName: 'import'
 * }
 * ```
 * @returns {import('eslint').Linter.Config}
 */
export default (/* eslint-disable @stylistic/indent */
	      logLevel = 'error',
	formatLogLevel = 'warn',
	{
		short      = false,
		webpack    = false,
		typescript = false,
		jsx        = false,
		pluginName = 'import'
	} = {} /* eslint-enable @stylistic/no-multi-spaces, @stylistic/indent */
) => {
	/** @type {import('eslint').Linter.RulesRecord} */
	let rules = {
		...importRulesHelpfulWarnings(logLevel),
		...importRulesModuleSystems(logLevel),
		...importRulesStaticAnalysis(logLevel, formatLogLevel, {short, webpack}),
		...importRulesStyleGuide(logLevel, formatLogLevel, {short, typescript, webpack}),
		...importRulesDeprecated()
	};
	if ('' === pluginName) {
		console.warn('`pluginName` is empty. Use default `import`');
	} else if ('import' !== pluginName) {
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
		/* eslint-disable @stylistic/indent */
		settings: typescript
			? importPlugin.flatConfigs.typescript.settings
			: {'import/extensions': extensions,
			   'import/resolver'  : {node: {extensions: [...extensions, '.json', '.jsonc']}},
			   'import/ignore'    : ['\.(scss|less|css)$']} /* eslint-enable @stylistic/indent */
	};
};
