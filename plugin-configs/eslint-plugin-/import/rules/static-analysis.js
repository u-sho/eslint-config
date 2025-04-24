/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author @u-sho (Shouhei Uechi)
 * @copyright 2025 @u-sho
 */

'use strict';


const { getPackageJson } = require('../../../../lib/util/get-package-json');
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @param {{short?: boolean; ts?: boolean; webpack?: boolean}} [options]
 * @returns {import('eslint').Linter.RulesRecord}
 */
module.exports = (logLevel = 'error', formatLogLevel = 'warn', {short = false, ts = false, webpack = false}) => ({
	// Ensure a default export is present, given a default import.
	'import/default': isModule ? logLevel : 0,

	// Enforce either using, or omitting, the `node:` protocol when importing Node.js builtin modules.
	'import/enforce-node-protocol-usage': short ? formatLogLevel : [logLevel, 'always'],

	// Ensure named imports correspond to a named export in the remote file.
	'import/named': ts ? 0 : logLevel,

	// Ensure imported namespaces contain dereferenced properties as they are dereferenced.
	'import/namespace': logLevel,

	// Forbid import of modules using absolute paths.
	'import/no-absolute-path': logLevel,

	// Forbid a module from importing a module with a dependency path back to itself.
	'import/no-cycle': 0, // I think this check should be done by humans. EST is not UnionFindTree.
	// 'import/no-cycle': [logLevel, {maxDepth: Infinity, ignoreExternal: true}],

	// Forbid `require()` calls with expressions.
	'import/no-dynamic-require': logLevel,

	// Forbid importing the submodules of other modules.
	'import/no-internal-modules': 0, // I do not make sense. This rule wastes the advantage of the module system.

	// Forbid importing packages through relative paths.
	'import/no-relative-packages': 0, // I'd like to forbid only parents.

	// Forbid importing modules from parent directories.
	'import/no-relative-parent-imports': formatLogLevel,

	// Enforce which files can be imported in a given folder.
	'import/no-restricted-paths': 0, // User defined.

	// Forbid a module from importing itself.
	'import/no-self-import': logLevel,

	// Ensure imports point to a file/module that can be resolved.
	'import/no-unresolved': [logLevel, {commonjs: !isModule, amd: false}],

	// Forbid unnecessary path segments in import and require statements.
	'import/no-useless-path-segments': [formatLogLevel, {noUselessIndex: true}],

	// Forbid webpack loader syntax in imports.
	'import/no-webpack-loader-syntax': webpack ? logLevel : 0
});
