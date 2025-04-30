/**
 * @see https://eslint.org/docs/latest/rules/#layout--formatting
 * @author u-sho (Shouhei Uechi)
 */

// @ts-check


/**
 * @param {import('eslint').Linter.RuleSeverity} [formatLogLevel='warn'] default: `'warn'`
 * @returns {Partial<import('eslint/rules').ESLintRules>}
 */
export default (formatLogLevel = 'warn') => ({
	// Require or disallow Unicode byte order mark (BOM)
	'unicode-bom': [formatLogLevel, 'never']
});
