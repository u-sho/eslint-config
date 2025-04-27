/**
 * @see https://github.com/import-js/eslint-plugin-import#rules
 * @author @u-sho (Shouhei Uechi)
 * @copyright 2025 @u-sho
 */

// @ts-check
'use strict';


import { getPackageJson } from '../../../../lib/util/get-package-json.cjs';
const packageJson = getPackageJson();
const isModule = packageJson != null
                 && typeof packageJson === 'object'
                 && 'type' in packageJson
                 && packageJson.type === 'module';

/**
 * @param {import('eslint').Linter.RuleSeverity} [logLevel='error']
 * @returns {import('eslint').Linter.RulesRecord}
 */
export default (logLevel = 'error') => ({
	// Forbid AMD `require` and `define` calls.
	'import/no-amd': 0, // I'm not using AMD.

	// Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
	'import/no-commonjs': isModule ? logLevel : 0,

	// Forbid `import` statements with CommonJS `module.exports`.
	'import/no-import-module-exports': logLevel,

	// Forbid Node.js builtin modules.
	'import/no-nodejs-modules': 0, // I'm using Node.js.

	// Forbid potentially ambiguous parse goal (`script` vs. `module`).
	'import/unambiguous': logLevel // maybe slow
});
