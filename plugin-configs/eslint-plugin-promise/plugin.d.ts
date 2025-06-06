/**
 * TEMP: これは暫定的な対応です。
 * @see https://github.com/eslint-community/eslint-plugin-promise/issues/488
 */
declare module 'eslint-plugin-promise' {
	import type {Linter, Rule} from 'eslint';
	import {configs, rules, rulesConfig} from 'eslint-plugin-promise';

	// eslint-disable-next-line typescript/consistent-type-assertions -- for definitions
	export default {
		rules,
		rulesConfig,
		configs
	} as {
		rules      : Record<string, Rule.RuleModule>;
		rulesConfig: Record<keyof typeof rules, Linter.Severity>;
		configs    : Record<string, Linter.Config>;
	};
}
