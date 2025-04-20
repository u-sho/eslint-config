/**
 * @see https://eslint.org/docs/latest/rules/#layout--formatting
 * @author u-sho (Shouhei Uechi)
 */

'use strict';

/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn']
 * @returns {Partial<import('eslint/rules').ESLintRules>}
 */
module.exports = (formatLogLevel = 'warn') => ({
	// Require or disallow Unicode byte order mark (BOM)
	'unicode-bom': [formatLogLevel, 'never']
});
