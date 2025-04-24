/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author u-sho (Shouhei Uechi)
 * @license MIT See LICENSE file in the root directory for full license.
 */

'use strict';

const importPlugin = require('eslint-plugin-import');
const helpfulWarningRules = require('./rules/helpful-warnings');
const   moduleSystemRules = require('./rules/module-systems');
const staticAnalysisRules = require('./rules/static-analysis');
const     styleGuideRules = require('./rules/style-guide');
const     deprecatedRules = require('./rules/deprecated');

const { getPackageJson } = require('../../../lib/util/get-package-json');
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {{short?: boolean; webpack?: boolean; ts?: boolean; jsx?:boolean; pluginName?: string}} [options]
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (
	logLevel = 'error',
	formatLogLevel = 'warn',
	{short = false, webpack = false, ts = false, jsx = false, pluginName = 'import'}
) => {
	let rules = {
		...helpfulWarningRules(logLevel),
		...moduleSystemRules(logLevel),
		...staticAnalysisRules(logLevel, formatLogLevel, {short, webpack}),
		...styleGuideRules(logLevel, formatLogLevel, {short, ts, webpack}),
		...deprecatedRules(logLevel),
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
		plugins: {[pluginName]: importPlugin},
		rules,
		settings: ts
		          ? importPlugin.configs.typescript.settings
		          : {'import/extensions': extensions,
	                'import/resolver': {node: {extensions: [...extensions, '.json', '.jsonc']}},
	                'import/ignore': ['\.(scss|less|css)$']}
	};
};
