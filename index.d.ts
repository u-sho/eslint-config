// @ts-check


declare module '@u-sho/eslint-config' {
	import type {Linter} from 'eslint';

	type RuleSeverity = Linter.Severity;
	type RequiredConfig = Required<Linter.Config>;


	import type {JsConfig} from 'configs/all-js.js';
	import type {JsConfigOptions} from 'configs/base.js';
	import type {TsConfig, TsConfigOptions} from 'configs/all-ts.js';

	import type {MdConfig, MdConfigOptions} from 'plugin-configs/@eslint/markdown/all.js';

	const ignores: RequiredConfig['ignores'], /* eslint-disable @stylistic/indent */
	      languageOptions: RequiredConfig['languageOptions'],
	      linterOptions: RequiredConfig['linterOptions']; /* eslint-enable @stylistic/indent */

	function getConfigJsAll(
		logLevel?: RuleSeverity,
		formatLogLevel?: RuleSeverity,
		options?: JsConfigOptions
	): JsConfig;
	function getConfigJsFormat(
		formatLogLevel?: RuleSeverity,
		options?: Omit<JsConfigOptions, 'nodePluginName'>
	): JsConfig;
	function getConfigTsAll(
		logLevel?: RuleSeverity,
		formatLogLevel?: RuleSeverity,
		options?: TsConfigOptions
	): TsConfig;
	function getConfigTsFormat(
		formatLogLevel?: RuleSeverity,
		options?: Omit<TsConfigOptions, 'nodePluginName'>
	): TsConfig;

	function getConfigMarkdownAll(
		logLevel?: RuleSeverity,
		formatLogLevel?: RuleSeverity,
		options?: MdConfigOptions
	): MdConfig;
	function getConfigMarkdownFormat(
		formatLogLevel?: RuleSeverity,
		options?: MdConfigOptions
	): MdConfig;


	export default {
		configs: {
			base: [{ignores}, {linterOptions}, {languageOptions}],
			ignores,
			linterOptions,
			languageOptions,

			javascript: [{ignores}, {linterOptions}, {languageOptions}, JsConfig],
			typescript: [{ignores}, {linterOptions}, {languageOptions}, TsConfig],
			markdown  : [{ignores}, {linterOptions}, MdConfig]
		},
		format: {
			javascript: [{ignores}, {linterOptions}, {languageOptions}, JsConfig],
			typescript: [{ignores}, {linterOptions}, {languageOptions}, TsConfig],
			markdown  : [{ignores}, {linterOptions}, MdConfig]
		},

		getConfigJsAll,
		getConfigJsFormat,
		getConfigTsAll,
		getConfigTsFormat,
		getConfigMarkdownAll,
		getConfigMarkdownFormat
	};
}
