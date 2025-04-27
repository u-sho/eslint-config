/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

// @ts-check
'use strict';

// @ts-ignore `eslint-plugin-import' has no type
import importPlugin from 'eslint-plugin-import';
import helpfulWarningRules from './rules/helpful-warnings.js';
import   moduleSystemRules from './rules/module-systems.js';
import staticAnalysisRules from './rules/static-analysis.js';
import     styleGuideRules from './rules/style-guide.js';
import     deprecatedRules from './rules/deprecated.js';

import { getPackageJson } from '../../../lib/util/get-package-json.cjs';
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {{short?: boolean; webpack?: boolean; ts?: boolean; jsx?:boolean; pluginName?: string}} [options={}]
 * @returns {import('eslint').Linter.Config}
 */
export default (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{short = false, webpack = false, ts = false, jsx = false, pluginName = 'import'} = {}
) => {
	let rules = {
		...helpfulWarningRules(logLevel),
		...moduleSystemRules(logLevel),
		...staticAnalysisRules(logLevel, formatLogLevel, {short, webpack}),
		...styleGuideRules(logLevel, formatLogLevel, {short, ts, webpack}),
		...deprecatedRules(),
	};
	if (pluginName !== 'import') {
		rules = Object.fromEntries(
			Object
				.entries(rules)
				.map(([ruleName, ruleConfig]) => [
					ruleName.replace(/^import\//, `${pluginName}/`),
					ruleConfig
				])
		);
	}

	const extensions = ['.js', isModule ? '.cjs' : '.mjs', ...jsx ? ['.jsx'] : []];

	return {
		...importPlugin.flatConfigs.recommended,
		rules,
		settings: ts
		          ? importPlugin.flatConfigs.typescript.settings
		          : {'import/extensions': extensions,
		             'import/resolver': {node: {extensions: [...extensions, '.json', '.jsonc']}},
		             'import/ignore': ['\.(scss|less|css)$']}
	};
};
